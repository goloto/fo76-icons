import { JSON_DIRECTORY, RULES_DIRECTORY } from "../const";
import { readFileAsJson } from "../file-reading";
import type { CategoryOrder, IconOrder, IconRule } from "../types";
import { writeJson } from "../file-writing";

export const buildIconsOrder = async (categoriesOrderJson: CategoryOrder[]): Promise<IconOrder[]> => {
  const itemsOrder = await categoriesOrderJson
    .sort((itemA, itemB) => itemA.order - itemB.order)
    .reduce<Promise<IconOrder[]>>(async (accumulator, category) => {
      const awaitedAccumulator = await accumulator;
      const iconRules = await readFileAsJson<IconRule[]>(`${RULES_DIRECTORY}/${category.name}.json`);
      const mergedIconsOrder = iconRules
        .map((item, index) => ({
          name: item.name,
          order: index,
          category: category.name,
        }))
        .map((item, index) => ({...item, order: awaitedAccumulator.length + index}));

      return awaitedAccumulator.concat(mergedIconsOrder);
    }, Promise.resolve([]));

  await writeJson(`${JSON_DIRECTORY}/icons-order.json`, itemsOrder);

  return itemsOrder;
}
