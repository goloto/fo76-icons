import { ICONS_DIRECTORY } from '@/constants';
import { ICON_CATEGORIES_ORDER } from '@/constants/categories-order';
import type { IconNames } from '@/types';
import { readdir } from 'node:fs/promises';

export const readIcons = async (): Promise<Record<string, IconNames[]>> => {
  const paths = await ICON_CATEGORIES_ORDER.reduce(
    async (accumulator, category) => {
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
    },
    Promise.resolve({})
  );

  return paths;
};
