import type { IconInfo } from "./types";

export const isIconInfoArray = (input: any): input is IconInfo[] => Array.isArray(input);

export const getNumFromHexadecimal = (str: string): number => Number.parseInt(str, 16);

export const getCharFromHexadecimal = (str?: string): string => {
  if (!str) {
    return '';
  }

  return String.fromCharCode(getNumFromHexadecimal(str));
}