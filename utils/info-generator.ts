import { readdir } from "node:fs/promises";
import type { IconInfo, Subcategories } from "./types";
import { isIconInfo } from "./common";

const ICONS_DIRECTORY = './icons';
const CATEGORIES = ['armor', 'weapons'];
const NON_MERGED_ATTRS = ['header'];
const HEADER_GENERATOR = (function* () {
  let start = Number.parseInt('F0E0', 16);

  while (true) {
    start += 1;

    yield start;
  }
})();

const generateInfo = async () => {
  for (const category of CATEGORIES) {
    const files = await readdir(`${ICONS_DIRECTORY}/${category}`, {recursive: true});
    const subcategories = createSubcategoriesRecord(files);

    for (const [subcategory, info] of Object.entries(subcategories)) {
      const mergedSubcategory = await mergeSubcategory(subcategory, info, category);

      await Bun.write(getInfoPath(category, subcategory), JSON.stringify(mergedSubcategory, null, "\t"));
    }
  }
};

const createSubcategoriesRecord = (files: string[]): Subcategories => {
  return files.reduce((accumulator, filePath) => {
    const [subcategory, fullName] = filePath.split('/');

    if (fullName === undefined) {
      return accumulator;
    }

    const [name, extension] = fullName.split('.');

    if (extension !== 'svg') {
      return accumulator;
    }

    return {
      ...accumulator,
      [subcategory]: [
        ...(accumulator[subcategory] ?? []),
        createDefaultInfo(name),
      ],
    }
  }, <Subcategories>{});
}

const mergeSubcategory = async (subcategory: string, info: IconInfo[], category: string): Promise<IconInfo[]> => {
  const subcategoryFile = Bun.file(getInfoPath(category, subcategory));
  const isFileExist = await subcategoryFile.exists();
  const sortedInfo = info.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));

  if (!isFileExist) {
    return sortedInfo;
  }

  const text = await subcategoryFile.text();
  const oldItem = JSON.parse(text);

  if (!isIconInfo(oldItem)) {
    return [];
  }

  return sortedInfo.map((currentItem) => {
    const duplicate = oldItem.find((value) => value.name === currentItem.name);

    if (!duplicate) {
      return currentItem;
    }
    
    return (Object.keys(currentItem) as Array<keyof IconInfo>).reduce((accumulator, key) => {
      if (NON_MERGED_ATTRS.includes(key)) {
        return ({
          ...accumulator,
          [key]: currentItem[key],
        });
      }

      return ({
        ...accumulator,
        [key]: Object.hasOwn(duplicate, key) ? duplicate[key] : currentItem[key],
      })
    }, duplicate);
  });
}

const createDefaultInfo = (name: string) => ({ 
  name, 
  header: '0x' + HEADER_GENERATOR.next().value.toString(16),
  include: [] 
});

const getInfoPath = (category: string, subcategory: string) => 
  `${ICONS_DIRECTORY}/${category}/${subcategory}/info.json`;

await generateInfo();