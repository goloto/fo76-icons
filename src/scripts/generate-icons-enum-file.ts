import { generateIconsEnum } from '@/ast-utils/generate-icons-enum';
import type { CategoryOrder } from '@/types';

export const generateIconsEnumFile = async (
  categoryOrder: CategoryOrder[]
): Promise<void> => {
  const content = await generateIconsEnum(categoryOrder);

  await Bun.write('./src/generated/icons-enum.ts', content);
};
