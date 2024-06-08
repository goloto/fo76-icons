import type { IconInfo, Info, Order } from "./types";

export const ICONS_DIRECTORY = './icons';

export const isIconInfoArray = (input: any): input is IconInfo[] => Array.isArray(input);

export const getNumFromHexadecimal = (str: string): number => Number.parseInt(str, 16);

export const getCharFromHexadecimal = (str?: string): string => {
  if (!str) {
    return '';
  }

  return String.fromCharCode(getNumFromHexadecimal(str));
}

export const readInfoFile = async (): Promise<Info> => {
  const infoFile = Bun.file(`${ICONS_DIRECTORY}/info.json`);
  const infoString = await infoFile.text();
  const infoJson = JSON.parse(infoString) as Info;

  return infoJson;
}

export const readUnicodeMapFile = async (): Promise<string> => {
  const mapFile = Bun.file('./fontlab/standard.nam');
  const mapString = await mapFile.text();

  return mapString;
}

export const readOrderFile = async (): Promise<string[]> => {
  const orderFile = Bun.file(`${ICONS_DIRECTORY}/order.json`);
  const orderString = await orderFile.text();
  const orderJson = JSON.parse(orderString) as string[];

  return orderJson;
}

export const getSafeFileName = (filePath: string): string => {
  const [fileName, ...paths] = filePath.split('/').reverse();
  const safeFileName = fileName.replaceAll('-', '_');
  const safeFilePath = [safeFileName, ...paths];

  return safeFilePath.reverse().join('');
}