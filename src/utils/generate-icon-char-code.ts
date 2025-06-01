import type { IconNames } from '@/types';
import { getNumFromHexadecimal } from './common';
import { ERASER } from '@/constants';

const HEADER_GENERATOR = (function* () {
  let start = getNumFromHexadecimal('2265');

  while (true) {
    start += 1;

    yield start;
  }
})();

const ICON_NAME_MAP = new Map<IconNames, string>([[ERASER, '0x020']]);

export const generateCharCode = (iconName: IconNames): string => {
  if (ICON_NAME_MAP.has(iconName)) {
    return ICON_NAME_MAP.get(iconName) as string;
  }

  const value = '0x' + HEADER_GENERATOR.next().value.toString(16);

  ICON_NAME_MAP.set(iconName, value);

  return value;
};
