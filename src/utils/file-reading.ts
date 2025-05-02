import { INPUT_DIRECTORY } from '@/constants';

export const readUnicodeMapFile = async (): Promise<string> => {
  return await readFileAsText(`${INPUT_DIRECTORY}/standard.nam`);
};

export const readFileAsJson = async <T extends unknown>(path: string) => {
  const str = await readFileAsText(path);
  const json = JSON.parse(str) as T;

  return json;
};

const readFileAsText = async (path: string) => {
  const file = Bun.file(path);
  const str = await file.text();

  return str;
};
