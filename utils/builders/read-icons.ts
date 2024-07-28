import { ICONS_DIRECTORY } from '../const';
import type { CategoryOrder } from '../types';
import { readdir } from 'node:fs/promises';

export const readIcons = async (
  categoryOrder: CategoryOrder[]
): Promise<Record<string, string[]>> => {
  const paths = await categoryOrder.reduce(async (accumulator, category) => {
    const awaitedAccumulator = await accumulator;
    const categoryIconPaths = await readdir(
      `${ICONS_DIRECTORY}/${category.name}`
    );

    const categoryIcons = categoryIconPaths
      .filter((item) => item.includes('.svg'))
      .map((item) => item.replace('.svg', ''));

    return Object.assign(awaitedAccumulator, {
      [category.name]: categoryIcons,
    });
  }, Promise.resolve({}));

  return paths;
};
