import { ICONS_DIRECTORY, JSON_DIRECTORY } from "../const";
import { readCategoriesOrderFile, readIconsOrderFile } from "../file-reading";
import { readdir } from "node:fs/promises";
import type { IconOrder } from "../types";
import { writeJson } from "../file-writing";
import { filterRecursiveDirs } from "../common";

export const buildIconsOrder = async () => {
  const iconsOrderJson = await readIconsOrderFile();
  const categoriesOrderJson = await readCategoriesOrderFile();
  const sortedCategoriesOrder = Object.values(categoriesOrderJson)
    .filter((item) => !item.isDeleted)
    .sort((itemA, itemB) => itemA.order - itemB.order);
  const itemsOrder = await sortedCategoriesOrder
    .reduce<Promise<IconOrder[]>>(async (accumulator, dir) => {
      const awaitedAccumulator = await accumulator;
      const dirIcons = await readdir(`${ICONS_DIRECTORY}/${dir.name}`);
      const filteredDirIcons = dirIcons
        .filter(filterRecursiveDirs)
        .map((item) => item.replace('.svg', ''));
      const currentCategoryIconsOrder = iconsOrderJson
        .filter((item) => filteredDirIcons.includes(item.name))
        .sort((itemA, itemB) => itemA.order - itemB.order)
        .map((item, index) => ({...item, order: index}));
      const newCategoryIconsOrder = currentCategoryIconsOrder
        .map((item, index) => ({
          name: item.name,
          order: awaitedAccumulator.length + index,
          category: dir.name,
          isDeleted: false,
        }));

      return [
        ...awaitedAccumulator,
        ...newCategoryIconsOrder,
      ]
    }, Promise.resolve([]));

  await writeJson(`${JSON_DIRECTORY}/icons-order.json`, itemsOrder);
}

await buildIconsOrder();

