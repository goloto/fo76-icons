import { buildIconRules } from './icons-rules';
import { buildHeaders } from './icons-headers';
import { buildFontConfig } from './font-config';
import { buildUnicodeMap } from './unicode-map';
import { readIcons } from './read-icons';
import { generateCategoriesFile } from '../generate-categories-file';
import { generateIconsEnumFile } from '../generate-icons-enum-file';

const build = async () => {
  await generateCategoriesFile();
  await generateIconsEnumFile();

  const iconNames = await readIcons();
  const iconRules = await buildIconRules(iconNames);

  await buildHeaders(iconRules);
  await buildFontConfig(iconRules);
  await buildUnicodeMap(iconRules);
};

await build();
