import { GENERATED_DIRECTORY } from "./const";
import type { CategoryOrder, IconRule, IconOrder } from "./types";

export const readCategoriesOrderFile= async (): Promise<CategoryOrder[]> => {
  return await readFileAsJson<CategoryOrder[]>(`${GENERATED_DIRECTORY}/categories-order.json`);
}

export const readIconsOrderFile= async (): Promise<IconOrder[]> => {
  return await readFileAsJson<IconOrder[]>(`${GENERATED_DIRECTORY}/rules-order.json`);
}

export const readIconRulesFile = async (): Promise<IconRule[]> => {
  return await readFileAsJson<IconRule[]>(`${GENERATED_DIRECTORY}/icons-rules.json`);
}

export const readUnicodeMapFile = async (): Promise<string> => {
  return await readFileAsText('./fontlab/standard.nam');
}

export const readFileAsJson = async <T extends unknown>(path: string) => {
  const str = await readFileAsText(path);
  const json = JSON.parse(str) as T;

  return json;
}

const readFileAsText = async (path: string) => {
  const file = Bun.file(path);
  const str = await file.text();

  return str;
}