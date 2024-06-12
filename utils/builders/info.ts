import { readdir } from "node:fs/promises";
import { readInfoFile } from "../reading";
import { ICONS_DIRECTORY } from "../const";
import type { InfoMap } from "../types";
import { ICONS_ORDER } from "../const";
import { getNumFromHexadecimal, getSafeFileName } from "../common";
import { writeJson } from "../writing";

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
    const newInfo: InfoMap = files.reduce((accumulator, fileName) => {
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
    }, <InfoMap>{});
  
    concatenatedInfo = {...concatenatedInfo, ...newInfo};
  };

  await writeJson(`${ICONS_DIRECTORY}/info.json`, concatenatedInfo);
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