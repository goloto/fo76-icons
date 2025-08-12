import { OUTPUT_DIRECTORY } from '@/constants';
import { rm } from 'node:fs/promises';

const files = [
  'fonts_en.swf',
  'fonts_ru.swf',
  'fontconfig_en.txt',
  'fontconfig_ru.txt',
] as const;

const resetInterfaceDirectory = async () => {
  const interfaceDir = `${Bun.env.GAME_DATA_PATH}/Interface`;

  await rm(interfaceDir, { recursive: true, force: true });

  for (const fileName of files) {
    const file = Bun.file(`${OUTPUT_DIRECTORY}/${fileName}`);

    Bun.write(`${interfaceDir}/${fileName}`, file);
  }
};

await resetInterfaceDirectory();
