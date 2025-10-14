import { JSDOM } from 'jsdom';
import { INPUT_DIRECTORY, OUTPUT_DIRECTORY } from '@/constants';
import { ICONS } from '@/generated/icons';
import { getCharFromHexadecimal } from './common';
import { ICON_CATEGORIES } from '@/generated/icon-categories-enum';

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
    const iconContainerElement = window.createElement('div');

    iconContainerElement.setAttribute('id', 'icon-container');

    const iconElement = window.createElement('div');
    const iconTextNode = window.createTextNode(
      getCharFromHexadecimal(icon.charCode)
    );

    iconElement.setAttribute('id', 'icon');
    iconElement.appendChild(iconTextNode);

    const descriptionElement = window.createElement('p');
    const formattedIconName = icon.name
      .replaceAll('-', ' ')
      .replaceAll('_', ' ');
    const descriptionTextNode = window.createTextNode(formattedIconName);

    descriptionElement.appendChild(descriptionTextNode);

    iconContainerElement.appendChild(iconElement);
    iconContainerElement.appendChild(descriptionElement);
    categoryIconsMap[icon.category].push(iconContainerElement);
  });

  Object.entries(categoryIconsMap).forEach(([key, value]) => {
    const titleElement = window.createElement('h2');
    const titleText = window.createTextNode(key);

    titleElement.setAttribute('id', 'title');
    titleElement.appendChild(titleText);

    const categoryContainer = window.createElement('div');

    categoryContainer.setAttribute('id', 'category-container');

    root.appendChild(titleElement);

    value.forEach((iconElement) => {
      categoryContainer.appendChild(iconElement);
    });

    root.appendChild(categoryContainer);
  });

  Bun.write(`${OUTPUT_DIRECTORY}/${legendFileName}`, dom.serialize());
};
