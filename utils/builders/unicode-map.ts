import { readIconRulesFile, readUnicodeMapFile } from "../file-reading";

const TEMPLATE_LINK = '%custom-names%';

export const buildUnicodeMap = async () => {
  const iconRules = await readIconRulesFile();
  const map = await readUnicodeMapFile();
  const slicedMap = map.slice(0, map.indexOf(TEMPLATE_LINK) + TEMPLATE_LINK.length) + '\r'; 
  const newMap = iconRules.reduce((accumulator, item, index) => {
    const newLine = index + 1 < iconRules.length ? '\r\n' : '';

    return `${accumulator}${item.header} ${item.name}${newLine}`;
  }, slicedMap);
  
  await Bun.write('./fontlab/standard.nam', newMap);
}

await buildUnicodeMap();