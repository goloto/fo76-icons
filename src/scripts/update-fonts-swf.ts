import { INPUT_DIRECTORY, OUTPUT_DIRECTORY } from '@/constants';

type TCopyingInfo = {
  origin: string;
  renamed: string;
};

const files = [
  {
    origin: 'fonts_ru (Cyrillic Font Library).swf',
    renamed: 'fonts_ru.swf',
  },
  {
    origin: 'fonts_en.swf',
    renamed: 'fonts_en.swf',
  },
] as const satisfies TCopyingInfo[];

const updateFontsSwf = () => {
  for (const info of files) {
    const file = Bun.file(`${INPUT_DIRECTORY}/${info.origin}`);

    Bun.write(`${OUTPUT_DIRECTORY}/${info.renamed}`, file);
  }
};

updateFontsSwf();
