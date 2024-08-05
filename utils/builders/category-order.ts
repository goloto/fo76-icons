import { readdir } from 'node:fs/promises';
import { GENERATED_DIRECTORY, RULES_DIRECTORY } from '@/constants';
import { readCategoriesOrderFile } from '@/utils/file-reading';
import { writeJson } from '@/utils/file-writing';
import type { CategoryOrder } from '@/types';
import { sortByOrder } from '@/utils/common';

export const buildCategoryOrder = async (): Promise<CategoryOrder[]> => {
  const categoryFiles = await readdir(`${RULES_DIRECTORY}`);
  const categories = categoryFiles.filter(filterOnlyJson).map(removeExtension);
  const currentCategories = await readCategoriesOrderFile();
  const existedDirectories = currentCategories
    .filter((item) => categories.includes(item.name))
    .sort(sortByOrder)
    .map(refreshOrder);
  const simplifiedExistedCategories = existedDirectories.map(
    (item) => item.name
  );
  const result = categories
    .reduce((accumulator, item) => {
      if (!simplifiedExistedCategories.includes(item)) {
        return [...accumulator, { name: item, order: accumulator.length }];
      }

      return accumulator;
    }, existedDirectories)
    .sort(sortByOrder);

  await writeJson(`${GENERATED_DIRECTORY}/categories-order.json`, result);

  return result;
};

const refreshOrder = (item: CategoryOrder, index: number) => ({
  ...item,
  order: index,
});
const filterOnlyJson = (item: string) => item.includes('.json');
const removeExtension = (item: string) => item.replace('.json', '');
