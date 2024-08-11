import { LeftSignature, RightSignature } from '@/constants';
import type { IconNames, Rule } from '@/types';
import { readFileAsJson } from '@/utils/file-reading';
import {
  ICONS_DEFAULT_RULES,
  RULES_DIRECTORY,
  SORTED_RULES_KEYS,
} from '@/constants';
import { getNumFromHexadecimal, sortByOrder } from '@/utils/common';
import { writeJson } from '@/utils/file-writing';
import { ICON_CATEGORIES_ORDER } from '@/constants/categories-order';
import type { ICON_CATEGORIES } from '@/generated/icon-categories-enum';

export const buildIconRules = async (
  iconNames: Record<ICON_CATEGORIES, IconNames[]>
): Promise<Rule<IconNames>[]> => {
  const concatenatedRules = await ICON_CATEGORIES_ORDER.reduce<
    Promise<Rule<IconNames>[]>
  >(async (accumulator, category) => {
    const categoryRulesPath = `${RULES_DIRECTORY}/${category.name}.json`;
    const awaitedAccumulator = await accumulator;
    const categoryRules =
      await readFileAsJson<Rule<IconNames>[]>(categoryRulesPath);
    const categoryIconNames = categoryRules.map((item) => item.iconName);
    const newRules = iconNames[category.name].reduce<Rule<IconNames>[]>(
      (accumulator, item) => {
        if (categoryIconNames.includes(item)) {
          return accumulator;
        }

        return accumulator.concat(createDefaultInfo(item, category.name));
      },
      []
    );
    const updatedRules = categoryRules
      .concat(newRules)
      .filter((rule) => !rule.isInjected)
      .concat(injectRules(category.name, categoryRules))
      .map(sortRuleKeys)
      .sort(sortByOrder)
      .map(updateOrderAndHeader);

    await writeJson(categoryRulesPath, updatedRules);

    return awaitedAccumulator.concat(updatedRules);
  }, Promise.resolve([]));

  return concatenatedRules;
};

const injectRules = (
  category: string,
  rules: Rule<IconNames>[]
): Rule<IconNames>[] => {
  switch (category) {
    case 'legendary-effects':
      return [
        {
          order: 99,
          iconName: '_injected_innr_eraser',
          leftSignature: LeftSignature.InstanceNamingRules,
          rightSignature: RightSignature.WNAM,
          isInjected: true,
          isDeleted: false,
          isAnyKeyword: false,
          isInclusiveOr: false,
          isFullReplaced: true,
          header: ' 0x020',
          include: [],
          exclude: rules.reduce<string[]>(concatAllIncludeRules, [
            'ekwd|CustomItemName',
            'ekwd|PowerArmor',
            'ekwd|HandmadeRifle',
            'ekwd|PipeWrench_Flowers',
          ]),
        },
      ];

    default:
      return [];
  }
};

const concatAllIncludeRules = (
  accumulator: string[],
  rule: Rule<IconNames>
): string[] => (rule?.include ? accumulator.concat(rule.include) : accumulator);

const updateOrderAndHeader = (item: Rule<IconNames>, index: number) => ({
  ...item,
  order: index,
  header: item.isInjected
    ? item.header
    : generateIconHeader(item.iconName || ''),
});

const sortRuleKeys = (item: Rule<IconNames>) => {
  const itemWithSortedKeys = SORTED_RULES_KEYS.reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: item[key],
    }),
    <Rule<IconNames>>{}
  );

  return itemWithSortedKeys;
};

const HEADER_GENERATOR = (function* () {
  let start = getNumFromHexadecimal('2265');

  while (true) {
    start += 1;

    yield start;
  }
})();

const ICON_NAME_MAP = new Map();

const generateIconHeader = (iconName: string): string => {
  if (ICON_NAME_MAP.has(iconName)) {
    return ICON_NAME_MAP.get(iconName);
  }

  const value = '0x' + HEADER_GENERATOR.next().value.toString(16);

  ICON_NAME_MAP.set(iconName, value);

  return value;
};

const createDefaultInfo = (
  iconName: IconNames,
  category: string
): Rule<typeof iconName> => ({
  order: 999,
  iconName: iconName,
  isInjected: false,
  isDeleted: false,
  isAnyKeyword: false,
  isInclusiveOr: false,
  header: generateIconHeader(iconName),
  include: [],
  exclude: [],
  ...ICONS_DEFAULT_RULES[category],
});
