import { readdir } from "node:fs/promises";

interface IconInfo {
  name: string;
  header?: string;
  include?: string[];
  exclude?: string[];
  isEnabled?: boolean;
  isFullReplaced?: boolean;
  isFallback?: boolean;
}

type Subcategories = Record<string, IconInfo[]>;

const ICONS_DIRECTORY = './icons';
const CATEGORIES = ['armor', 'weapons'];
const NON_MERGED_ATTRS = ['header'];
const HEADER_GENERATOR = (function* () {
  let start = Number.parseInt('2270', 16);

  while (true) {
    start += 1;

    yield start;
  }
})();

const generateInfo = async () => {
  CATEGORIES.forEach(async (category) => {
    const files = await readdir(`${ICONS_DIRECTORY}/${category}`, {recursive: true});
    const subcategories = createSubcategoriesRecord(files);

    Object.entries(subcategories).forEach(async ([subcategory, info]) => {
      const mergedSubcategory = await mergeSubcategory([subcategory, info], category);

      await Bun.write(getInfoPath(category, subcategory), JSON.stringify(mergedSubcategory, null, "\t"));
    });
  });
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

const mergeSubcategory = async ([subcategory, info]: [string, IconInfo[]], category: string): Promise<IconInfo[]> => {
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
    
    return Object.keys(currentItem).reduce((accumulator, key) => {
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
  header: HEADER_GENERATOR.next().value.toString(16),
  include: [] 
});

const getInfoPath = (category: string, subcategory: string) => 
  `${ICONS_DIRECTORY}/${category}/${subcategory}/info.json`;

const isIconInfo = (input: any): input is IconInfo[] => Array.isArray(input);

await generateInfo();