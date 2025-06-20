import { getCharFromHexadecimal } from '@/utils/common';
import { ICONS } from '@/generated/icons';
import { INPUT_DIRECTORY, OUTPUT_DIRECTORY } from '@/constants';

type TLangInfo = {
  lang: 'ru' | 'en';
  inputFile: string;
  outputFile: string;
};

const languages: TLangInfo[] = [
  {
    lang: 'ru',
    inputFile: 'fontconfig_ru (Cyrillic Font Library).txt',
    outputFile: 'fontconfig_ru.txt',
  },
  {
    lang: 'en',
    inputFile: 'fontconfig_en.txt',
    outputFile: 'fontconfig_en.txt',
  },
];

export const generateFontConfigFile = async () => {
  const characters = ICONS.reduce(
    (accumulator, icon) =>
      `${accumulator}${getCharFromHexadecimal(icon.charCode)}`,
    ''
  );

  await Bun.write(`${OUTPUT_DIRECTORY}/custom_characters.txt`, characters);

  languages.forEach(async ({ inputFile, outputFile }) => {
    const fontConfigFile = Bun.file(`${INPUT_DIRECTORY}/${inputFile}`);
    const fontConfig = await fontConfigFile.text();
    const lineIndex = fontConfig.indexOf('validNameChars');
    const charsIndex = fontConfig.indexOf('\n', lineIndex) - 1;
    const startFontConfig = fontConfig.substring(0, charsIndex);
    const endFontConfig = fontConfig.substring(charsIndex);
    const result = `${startFontConfig}${characters}${endFontConfig}`.replaceAll(
      '\\\\',
      '\\'
    );

    await Bun.write(`${OUTPUT_DIRECTORY}/${outputFile}`, result);
  });
};
