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

type SubCategory = Record<string, IconInfo[]>;

const ICONS_DIRECTORY = './icons';
const CATEGORIES = ['armor', 'weapons'];

const generateInfo = async () => {
  CATEGORIES.forEach(async (category) => {
    const files = await readdir(`${ICONS_DIRECTORY}/${category}`, {recursive: true});
    const subcategories: SubCategory = {};

    files.forEach(async (filePath) => {
      const [subcategory, fullName] = filePath.split('/');

      if (fullName === undefined) {
        return;
      }

      const [name, extension] = fullName.split('.');

      if (extension !== 'svg') {
        return;
      }

      subcategories[subcategory] = [
        ...(subcategories[subcategory] ?? []),
        { name },
      ]
    });

    Object.entries(subcategories).forEach(async ([name, info]) => {
      const subcategoryFile = Bun.file(`${ICONS_DIRECTORY}/${category}/${name}/info.json`);
      const isFileExist = await subcategoryFile.exists();

      if (!isFileExist) {
        await Bun.write(`${ICONS_DIRECTORY}/${category}/${name}/info.json`, JSON.stringify(info));

        return;
      }

      const text = await subcategoryFile.text();
      const oldInfo = JSON.parse(text);

      if (!isIconInfo(oldInfo)) {
        return;
      }

      const newInfo = info.map((item) => {
        const duplicate = oldInfo.find((value) => value.name === item.name);

        if (duplicate) {
          return duplicate;
        }

        return item;
      });

      await Bun.write(`${ICONS_DIRECTORY}/${category}/${name}/info.json`, JSON.stringify(newInfo, null, "\t"));
    });

  });
}

const isIconInfo = (input: any): input is IconInfo[] => {
  return Array.isArray(input);
}

await generateInfo();