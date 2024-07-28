import { readdir } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { getSafeFileName } from './common';
import { ICONS_DIRECTORY } from './const';

const cleanup = async () => {
    const files = await readdir(ICONS_DIRECTORY, { recursive: true });

    files.forEach(async (fileName) => {
        if (!fileName.includes('.svg')) {
            return;
        }

        const file = Bun.file(`${ICONS_DIRECTORY}/${fileName}`);
        const originalString = await file.text();
        const cleanedString = originalString.replace(/(^[ \t]*\n)/gm, '');
        const dom = new JSDOM(cleanedString, { contentType: 'text/xml' });
        const defs = dom?.window?.document?.querySelector('defs');

        defs?.parentNode?.removeChild(defs);

        while (dom?.window?.document?.querySelector('.cls-2')) {
            const uselessNodes = dom?.window?.document?.querySelector('.cls-2');

            uselessNodes?.parentNode?.removeChild(uselessNodes);
        }

        Bun.write(`./icons/${getSafeFileName(fileName)}`, dom.serialize());
    });
};

await cleanup();
