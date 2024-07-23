import { readUnicodeMapFile } from "../file-reading";
import type { Rule } from "../types";

const TEMPLATE_LINK = '%custom-names%';

export const buildUnicodeMap = async (iconRules: Rule[]) => {
  const map = await readUnicodeMapFile();
  const slicedMap = map.slice(0, map.indexOf(TEMPLATE_LINK) + TEMPLATE_LINK.length) + '\r\n'; 
  const newMap = iconRules.reduce((accumulator, item, index) => {
    const newLine = index + 1 < iconRules.length ? '\r\n' : '';

    if (!item.header || !item.iconName || item.header === ' ') {
      return accumulator;
    }

    return `${accumulator}${item.header} ${item.iconName}${newLine}`;
  }, slicedMap);
  
  await Bun.write('./fontlab/standard.nam', newMap);
}