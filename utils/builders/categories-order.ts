import { readdir } from "node:fs/promises";
import { JSON_DIRECTORY, RULES_DIRECTORY } from "../const";
import { readCategoriesOrderFile } from "../file-reading";
import { writeJson } from "../file-writing";
import type { CategoryOrder } from "../types";

export const buildCategoryOrder = async (): Promise<CategoryOrder[]> => {
  const directories = await readdir(`${RULES_DIRECTORY}`);
  const clearedDirectories = directories
    .filter((item) => item[0] !== '.json')
    .map((item) => item.replace('.json', ''));
  const directoriesOrder = await readCategoriesOrderFile();
  const existedDirectories = directoriesOrder
    .filter((item) => clearedDirectories.includes(item.name))
    .sort((itemA, itemB) => itemA.order - itemB.order)
    .map((item, index) => ({...item, order: index}));
  const simplifiedExistedDirectories = existedDirectories
    .map((item) => item.name);
  const newDirectories = clearedDirectories.reduce((accumulator, item) => {
    if (!simplifiedExistedDirectories.includes(item)) {
      return [
        ...accumulator,
        {name: item, order: accumulator.length},
      ]
    }

    return accumulator
  }, existedDirectories);
  const result = newDirectories
    .sort((itemA, itemB) => itemA.order - itemB.order);

  await writeJson(`${JSON_DIRECTORY}/categories-order.json`,result);

  return result;
}