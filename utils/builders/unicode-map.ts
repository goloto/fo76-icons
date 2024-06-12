import { readInfoFile, readUnicodeMapFile } from "../reading";

const TEMPLATE_LINK = '%custom-names%';

export const buildUnicodeMap = async () => {
  const info = await readInfoFile();
  const map = await readUnicodeMapFile();
  const slicedMap = map.slice(0, map.indexOf(TEMPLATE_LINK) + TEMPLATE_LINK.length) + '\r'; 
  const newMap = Object.values(info).reduce((accumulator, item) => {
    return accumulator + item.header + ' ' + item.name + '\r';
  }, slicedMap);
  
  await Bun.write('./fontlab/standard.nam', newMap);
}

await buildUnicodeMap();