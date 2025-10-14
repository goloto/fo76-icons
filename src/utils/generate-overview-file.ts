import { JSDOM } from 'jsdom';
import { INPUT_DIRECTORY, OUTPUT_DIRECTORY } from '@/constants';
import { ICONS } from '@/generated/icons';
import { getCharFromHexadecimal } from './common';
import { createElement } from './dom';

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
    const iconElement = createElement(window, {
      tag: 'div',
      id: 'icon',
      text: getCharFromHexadecimal(icon.charCode),
    });

    root.appendChild(iconElement);
  });

  Bun.write(`${OUTPUT_DIRECTORY}/${overviewFileName}`, dom.serialize());
};
