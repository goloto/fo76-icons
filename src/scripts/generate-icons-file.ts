import { generateIconsObj } from '@/ast-utils/generate-icons-obj';

export const generateIconsFile = async (): Promise<void> => {
  const content = await generateIconsObj();

  await Bun.write('./src/generated/icons.ts', content);
};
