import { JSDOM } from 'jsdom';
import { INPUT_DIRECTORY, OUTPUT_DIRECTORY } from '@/constants';
import { ICONS } from '@/generated/icons';
import { getCharFromHexadecimal } from './common';
import { ICON_CATEGORIES } from '@/generated/icon-categories-enum';
import { createElement } from './dom';

const legendFileName = 'legend.html';

export const generateLegendFile = async () => {
  const templateFile = Bun.file(`${INPUT_DIRECTORY}/${legendFileName}`);
  const template = await templateFile.text();
  const dom = new JSDOM(template, { contentType: 'text/xml' });
  const window = dom?.window?.document;
  const root = window?.querySelector('#legend-container');

  if (!root) {
    throw new Error(`Missing root element in ${legendFileName}`);
  }

  const categoryIconsMap = Object.values(ICON_CATEGORIES).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: [],
    }),
    <Record<ICON_CATEGORIES, Array<HTMLElement>>>{}
  );

  ICONS.forEach((icon) => {
    const iconContainerElement = createElement(window, {
      tag: 'div',
      id: 'icon-container',
    });
    const iconElement = createElement(window, {
      tag: 'div',
      id: 'icon',
      text: getCharFromHexadecimal(icon.charCode),
    });
    const descriptionElement = createElement(window, {
      tag: 'p',
      text: icon.name.replaceAll('-', ' ').replaceAll('_', ' '),
    });

    iconContainerElement.appendChild(iconElement);
    iconContainerElement.appendChild(descriptionElement);
    categoryIconsMap[icon.category].push(iconContainerElement);
  });

  Object.entries(categoryIconsMap).forEach(([key, value]) => {
    const titleElement = createElement(window, {
      tag: 'h2',
      id: 'title',
      text: key,
    });
    const categoryContainer = createElement(window, {
      tag: 'div',
      id: 'category-container',
    });

    root.appendChild(titleElement);

    value.forEach((iconElement) => {
      categoryContainer.appendChild(iconElement);
    });

    root.appendChild(categoryContainer);
  });

  Bun.write(`${OUTPUT_DIRECTORY}/${legendFileName}`, dom.serialize());
};
