import { readdir } from "node:fs/promises";
import { getNumFromHexadecimal } from "../common";
import type { Info } from "../types";

const ICONS_DIRECTORY = './icons';
const HEADER_GENERATOR = (function* () {
  let start = getNumFromHexadecimal('F0E0');

  while (true) {
    start += 1;

    yield start;
  }
})();

export const buildInfo = async () => {
  const infoFile = Bun.file(`${ICONS_DIRECTORY}/info.json`);
  const infoString = await infoFile.text();
  const infoJson = JSON.parse(infoString) as Info;
  const files = await readdir(`${ICONS_DIRECTORY}`, {recursive: true});
  const newInfo: Info = {};

  for (const fileName of files) {
    if (!fileName.includes('.svg')) {
      continue;
    }

    const iconName = getIconSafeName(fileName);

    if (iconName in infoJson) {
      continue;
    }

    newInfo[iconName] = createDefaultInfo(iconName);
  }

  await Bun.write(`${ICONS_DIRECTORY}/info.json`, JSON.stringify({...infoJson, ...newInfo}, null, '\t'));
};

const createDefaultInfo = (name: string) => ({ 
  name, 
  header: '0x' + HEADER_GENERATOR.next().value.toString(16),
  include: [] 
});

const getIconSafeName = (fileName: string) => {
  const pathSegments = fileName.split('/');
  const fileNameWithoutExtension = pathSegments[pathSegments.length - 1].replace('.svg', '');
  const fileNameWithoutDash = fileNameWithoutExtension.replace('-', '_');

  return fileNameWithoutDash;
}

await buildInfo();