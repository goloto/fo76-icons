import { generateIconsEnum } from '@/ast-utils/generate-icons-enum';

export const generateIconsEnumFile = async (): Promise<void> => {
  const content = await generateIconsEnum();

  await Bun.write('./src/generated/icons-enum.ts', content);
};
