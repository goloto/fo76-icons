import {
  generateCategoriesFile,
  generateFontConfigFile,
  generateHeadersFile,
  generateIconsEnumFile,
  generateIconsFile,
  generateUnicodeMapFile,
  generateOverviewFile,
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
  await generateOverviewFile();
};

await build();
