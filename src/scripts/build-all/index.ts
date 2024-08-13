import { buildIconRules } from './icons-rules';
import { buildHeaders } from './icons-headers';
import { readIcons } from './read-icons';
import { generateCategoriesFile } from '@/scripts/generate-categories-file';
import { generateIconsEnumFile } from '@/scripts/generate-icons-enum-file';
import { generateFontConfigFile } from '@/utils/generate-font-config-file';
import { generateUnicodeMapFile } from '@/utils/generate-unicode-map-file';
import { generateIconsFile } from '@/scripts/generate-icons-file';

const build = async () => {
  await generateCategoriesFile();
  await generateIconsEnumFile();
  await generateIconsFile();

  const iconNames = await readIcons();
  const iconRules = await buildIconRules(iconNames);

  await buildHeaders(iconRules);
  await generateFontConfigFile();
  await generateUnicodeMapFile();
};

await build();
