import { readdir } from "node:fs/promises";
import { ICONS_DIRECTORY, getNumFromHexadecimal, getSafeFileName, readInfoFile, readOrderFile } from "../common";
import type { Info } from "../types";
import { ICONS_ORDER } from "../const";

const HEADER_GENERATOR = (function* () {
  let start = getNumFromHexadecimal('2265');

  while (true) {
    start += 1;

    yield start;
  }
})();

export const buildInfo = async () => {
  const info = await readInfoFile();
  let concatenatedInfo = {};

  for (const iconDir of ICONS_ORDER) {
    const files = await readdir(`${ICONS_DIRECTORY}/${iconDir}`);
    const newInfo: Info = files.reduce((accumulator, fileName) => {
      if (!fileName.includes('.svg')) {
        return accumulator;
      }
  
      const iconName = getIconSafeName(fileName);
  
      if (iconName in info) {
        return {
          ...accumulator,
          [iconName]: {
            ...info[iconName],
            header: generateIconHeader(),
          },
        }
      }
  
      return {
        ...accumulator,
        [iconName]: createDefaultInfo(iconName),
      }
    }, <Info>{});
  
    concatenatedInfo = {...concatenatedInfo, ...newInfo};
  };

  await Bun.write(`${ICONS_DIRECTORY}/info.json`, JSON.stringify(concatenatedInfo, null, '\t'));
};


const generateIconHeader = (): string => '0x' + HEADER_GENERATOR.next().value.toString(16);

const createDefaultInfo = (name: string) => ({ 
  name, 
  header: generateIconHeader(),
  include: [],
  exclude: [],
});

const getIconSafeName = (fileName: string) => getSafeFileName(fileName).replaceAll('.svg', '');

await buildInfo();