import { ICONS_DIRECTORY, JSON_DIRECTORY } from "./const";
import type { ItemOrderMap, ItemOrder, IconRule } from "./types";

export const readCategoriesOrderFile= async (): Promise<ItemOrderMap> => {
  return await readFileAsJson<ItemOrderMap>(`${JSON_DIRECTORY}/categories-order.json`);
}

export const readIconsOrderFile= async (): Promise<ItemOrder[]> => {
  return await readFileAsJson<ItemOrder[]>(`${JSON_DIRECTORY}/icons-order.json`);
}

export const readIconRulesFile = async (): Promise<IconRule[]> => {
  return await readFileAsJson<IconRule[]>(`${JSON_DIRECTORY}/icons-rules.json`);
}

export const readOrderFile = async (): Promise<string[]> => {
  return await readFileAsJson<string[]>(`${ICONS_DIRECTORY}/order.json`);
}

export const readUnicodeMapFile = async (): Promise<string> => {
  return await readFileAsText('./fontlab/standard.nam');
}

const readFileAsJson = async <T extends unknown>(path: string) => {
  const str = await readFileAsText(path);
  const json = JSON.parse(str) as T;

  return json;
}

const readFileAsText = async (path: string) => {
  const file = Bun.file(path);
  const str = await file.text();

  return str;
}