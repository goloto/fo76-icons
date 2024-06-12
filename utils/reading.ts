import { ICONS_DIRECTORY, JSON_DIRECTORY } from "./const";
import type { DirectoryOrderMap, InfoMap } from "./types";

export const readDirectoriesFile= async (): Promise<DirectoryOrderMap> => {
  return await readFileAsJson<DirectoryOrderMap>(`${JSON_DIRECTORY}/dirs.json`);
}

export const readInfoFile = async (): Promise<InfoMap> => {
  return await readFileAsJson<InfoMap>(`${ICONS_DIRECTORY}/info.json`);
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