import type { Info } from "./types";

export const isIconInfoArray = (input: any): input is Info[] => Array.isArray(input);

export const getNumFromHexadecimal = (str: string): number => Number.parseInt(str, 16);

export const getCharFromHexadecimal = (str?: string): string => {
  if (!str) {
    return '';
  }

  return String.fromCharCode(getNumFromHexadecimal(str));
}

export const getSafeFileName = (filePath: string): string => {
  const [fileName, ...paths] = filePath.split('/').reverse();
  const safeFileName = fileName.replaceAll('-', '_');
  const safeFilePath = [safeFileName, ...paths];

  return safeFilePath.reverse().join('');
}
