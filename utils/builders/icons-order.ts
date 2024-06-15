import { ICONS_DIRECTORY, JSON_DIRECTORY } from "../const";
import { readCategoriesOrderFile, readIconsOrderFile } from "../file-reading";
import { readdir } from "node:fs/promises";
import type { IconOrder, IconOrderMap } from "../types";
import { writeJson } from "../file-writing";
import { filterRecursiveDirs } from "../common";

export const buildIconsOrder = async () => {
  const iconsOrderJson = await readIconsOrderFile();
  const iconsOrderMap = iconsOrderJson
    .reduce((accumulator, item) => ({...accumulator, [item.name]: item}), <IconOrderMap>{});
  const categoriesOrderJson = await readCategoriesOrderFile();
  const sortedCategoriesOrder = Object.values(categoriesOrderJson)
    .filter((item) => !item.isDeleted)
    .sort((itemA, itemB) => itemA.order - itemB.order);
  const itemsOrder = await sortedCategoriesOrder
    .reduce<Promise<IconOrder[]>>(async (accumulator, dir) => {
      const awaitedAccumulator = await accumulator;
      const dirIcons = await readdir(`${ICONS_DIRECTORY}/${dir.name}`);
      const mergedIconsOrder = dirIcons
        .filter(filterRecursiveDirs)
        .map((item) => item.replace('.svg', ''))
        .map((item, index): IconOrder => {
          if (item in iconsOrderMap) {
            return iconsOrderMap[item];
          }
          
          return {
            name: item,
            order: index,
            category: dir.name,
            isDeleted: false,
          }
        })
        .sort((itemA, itemB) => itemA.order - itemB.order)
        .map((item, index) => ({...item, order: awaitedAccumulator.length + index}));

      return [
        ...awaitedAccumulator,
        ...mergedIconsOrder,
      ]
    }, Promise.resolve([]));

  await writeJson(`${JSON_DIRECTORY}/icons-order.json`, itemsOrder);
}

await buildIconsOrder();

