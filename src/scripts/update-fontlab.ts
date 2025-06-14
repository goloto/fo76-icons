import { OUTPUT_DIRECTORY } from '@/constants';

const updateUnicodeMap = () => {
  const file = Bun.file(`${OUTPUT_DIRECTORY}/standard.nam`);

  Bun.write(`${Bun.env.FONTLAB_PATH}/standard.nam`, file);
};

updateUnicodeMap();
