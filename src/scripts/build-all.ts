import {
  generateCategoriesFile,
  generateFontConfigFile,
  generateHeadersFile,
  generateIconsEnumFile,
  generateIconsFile,
  generateUnicodeMapFile,
  sortCategories,
  sortRules,
} from '@/utils';

const build = async () => {
  await sortCategories();
  await sortRules();

  await generateCategoriesFile();
  await generateIconsEnumFile();
  await generateIconsFile();
  await generateHeadersFile();
  await generateFontConfigFile();
  await generateUnicodeMapFile();
};

await build();
