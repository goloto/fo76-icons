import { readdir } from "node:fs/promises";
import { ICONS_DIRECTORY, JSON_DIRECTORY } from "../const";
import { readDirectoriesFile } from "../reading";
import { writeJson } from "../writing";

export const buildDirectoriesOrder = async () => {
  const directories = await readdir(`${ICONS_DIRECTORY}`);
  const clearedDirectories = directories
    .filter((item) => item[0] !== '.');
  const directoriesOrder = await readDirectoriesFile();
  const deletedDirectories = Object
    .values(directoriesOrder)
    .filter((item) => !clearedDirectories.includes(item.name))
    .map((item) => ({...item, isDeleted: true}));
  const existedDirectories = Object
    .values(directoriesOrder)
    .filter((item) => clearedDirectories.includes(item.name))
    .sort((itemA, itemB) => itemA.order - itemB.order)
    .map((item, index) => ({...item, order: index}));
  const simplifiedExistedDirectories = existedDirectories
    .map((item) => item.name);
  const newDirectories = clearedDirectories.reduce((accumulator, item, index) => {
    if (!simplifiedExistedDirectories.includes(item)) {
      return [
        ...accumulator,
        {name: item, order: accumulator.length, isDeleted: false},
      ]
    }

    return accumulator
  }, existedDirectories);
  const result = [...newDirectories, ...deletedDirectories].reduce((accumulator, item, index) => {
    return {
      ...accumulator,
      [item.name]: item,
    }
  }, {});

  await writeJson(`${JSON_DIRECTORY}/dirs.json`,result);
}

await buildDirectoriesOrder();