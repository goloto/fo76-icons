import { JSDOM } from 'jsdom';
import { INPUT_DIRECTORY, OUTPUT_DIRECTORY } from '@/constants';
import { ICONS } from '@/generated/icons';
import { getCharFromHexadecimal } from './common';

const overviewFileName = 'overview.html';

export const generateOverviewFile = async () => {
  const templateFile = Bun.file(`${INPUT_DIRECTORY}/${overviewFileName}`);
  const template = await templateFile.text();
  const dom = new JSDOM(template, { contentType: 'text/xml' });
  const window = dom?.window?.document;
  const root = window?.querySelector('#overview-grid');

  if (!root) {
    throw new Error(`Missing root element in ${overviewFileName}`);
  }

  ICONS.forEach((icon) => {
    const iconElement = window.createElement('div');
    const iconText = window.createTextNode(
      getCharFromHexadecimal(icon.charCode)
    );

    iconElement.setAttribute('id', 'icon');
    iconElement.appendChild(iconText);
    root.appendChild(iconElement);
  });

  Bun.write(`${OUTPUT_DIRECTORY}/${overviewFileName}`, dom.serialize());
};
