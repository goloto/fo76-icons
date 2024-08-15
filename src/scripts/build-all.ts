import { generateHeadersFile } from '@/scripts/generate-headers-file';
import { generateCategoriesFile } from '@/scripts/generate-categories-file';
import { generateIconsEnumFile } from '@/scripts/generate-icons-enum-file';
import { generateFontConfigFile } from '@/utils/generate-font-config-file';
import { generateUnicodeMapFile } from '@/utils/generate-unicode-map-file';
import { generateIconsFile } from '@/scripts/generate-icons-file';

const build = async () => {
  await generateCategoriesFile();
  await generateIconsEnumFile();
  await generateIconsFile();
  await generateHeadersFile();
  await generateFontConfigFile();
  await generateUnicodeMapFile();
};

await build();
