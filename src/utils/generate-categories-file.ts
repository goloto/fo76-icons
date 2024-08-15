import { generateCategories } from '@/ast-utils/generate-categories';

export const generateCategoriesFile = async (): Promise<void> => {
  const content = await generateCategories();

  await Bun.write('./src/generated/icon-categories-enum.ts', content);
};
