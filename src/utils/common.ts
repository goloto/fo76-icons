import type { IconNames, Rule } from '../types';

export const isIconInfoArray = (input: any): input is Rule<IconNames>[] =>
  Array.isArray(input);

export const getNumFromHexadecimal = (str: string): number =>
  Number.parseInt(str, 16);

export const getCharFromHexadecimal = (str?: string): string => {
  if (!str) {
    return '';
  }

  return String.fromCharCode(getNumFromHexadecimal(str));
};

export const getSafeFileName = (filePath: string): string => {
  const [fileName, ...paths] = filePath.split('/').reverse();
  const safeFileName = fileName.replaceAll('-', '_');
  const safeFilePath = [safeFileName, ...paths];

  return safeFilePath.reverse().join('');
};

export const filterRecursiveDirs = (item: string) => {
  const splittedDirs = item.split('/');
  const result = splittedDirs.reduce((accumulator, item) => {
    if (accumulator === false) {
      return accumulator;
    }

    if (item[0] === '.') {
      return false;
    }

    return true;
  }, true);

  return result;
};

export const sortByOrder = (
  itemA: { order: number },
  itemB: { order: number }
) => itemA.order - itemB.order;
