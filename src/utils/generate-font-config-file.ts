import { getCharFromHexadecimal } from '@/utils/common';
import { ICONS } from '@/generated/icons';
import { INPUT_DIRECTORY, OUTPUT_DIRECTORY } from '@/constants';

const languages = ['ru', 'en'] as const;

export const generateFontConfigFile = async () => {
  const characters = ICONS.reduce(
    (accumulator, icon) =>
      `${accumulator}${getCharFromHexadecimal(icon.charCode)}`,
    ''
  );

  await Bun.write(`${OUTPUT_DIRECTORY}/custom_characters.txt`, characters);

  languages.forEach(async (lang) => {
    const fontConfigFile = Bun.file(
      `${INPUT_DIRECTORY}/fontconfig_${lang}.txt`
    );
    const fontConfig = await fontConfigFile.text();
    const lineIndex = fontConfig.indexOf('validNameChars');
    const charsIndex = fontConfig.indexOf('\n', lineIndex) - 1;
    const startFontConfig = fontConfig.substring(0, charsIndex);
    const endFontConfig = fontConfig.substring(charsIndex);
    const result = `${startFontConfig}${characters}${endFontConfig}`.replaceAll(
      '\\\\',
      '\\'
    );

    await Bun.write(`${OUTPUT_DIRECTORY}/fontconfig_${lang}.txt`, result);
  });
};
