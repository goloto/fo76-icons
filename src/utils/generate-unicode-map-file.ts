import { readUnicodeMapFile } from '@/utils/file-reading';
import { ICONS } from '@/generated/icons';

const TEMPLATE_LINK = '%custom-names%';

export const generateUnicodeMapFile = async () => {
  const map = await readUnicodeMapFile();
  const slicedMap =
    map.slice(0, map.indexOf(TEMPLATE_LINK) + TEMPLATE_LINK.length) + '\r\n';
  const newMap = ICONS.reduce((accumulator, item, index) => {
    const newLine = index + 1 < ICONS.length ? '\r\n' : '';

    if (!item.charCode || !item.name) {
      return accumulator;
    }

    return `${accumulator}${item.charCode} ${item.name}${newLine}`;
  }, slicedMap);

  await Bun.write('./fontlab/standard.nam', newMap);
};
