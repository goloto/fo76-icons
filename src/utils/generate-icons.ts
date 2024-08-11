import { ICON_CATEGORIES_ORDER } from '@/constants/categories-order';
import * as ALL_RULES from '@/rules';
import type { Icon, IconNames, RulesGroup } from '@/types';
import { getNumFromHexadecimal } from '@/utils/common';
import { getMaxLength } from '@/utils/get-max-length';

export const generateIcons = (): Icon[] => {
  const unsortedRuleGroups = Object.values(ALL_RULES);
  const sortedRuleGroups = ICON_CATEGORIES_ORDER.reduce(
    (accumulator, category) => {
      const group = unsortedRuleGroups.find(
        (group) => group.category === category.name
      );

      if (!!group) {
        accumulator.push(group);
      }

      return accumulator;
    },
    <RulesGroup<IconNames>[]>[]
  );

  const icons = sortedRuleGroups.reduce(
    (accumulator, group) => {
      const maxPrefixLength = getMaxLength(
        group.rules
          .filter((rule) => !!rule.prefix)
          .map((rule) => rule.prefix as IconNames[])
      );
      const iconsArray: Icon[] = [];

      for (let index = 0; index < maxPrefixLength; index++) {
        iconsArray.push(
          ...group.rules
            .map((rule) => rule.prefix?.[index])
            .filter((prefix) => !!prefix)
            .map((prefix) => ({
              name: prefix,
              charCode: generateIconHeader(prefix),
            }))
        );
      }

      return [...accumulator, ...iconsArray];
    },
    <Icon[]>[]
  );

  return icons;
};

const HEADER_GENERATOR = (function* () {
  let start = getNumFromHexadecimal('2265');

  while (true) {
    start += 1;

    yield start;
  }
})();

const ICON_NAME_MAP = new Map([['_injected_innr_eraser', '0x020']]);

const generateIconHeader = (iconName: IconNames): string => {
  if (ICON_NAME_MAP.has(iconName)) {
    return ICON_NAME_MAP.get(iconName) as string;
  }

  const value = '0x' + HEADER_GENERATOR.next().value.toString(16);

  ICON_NAME_MAP.set(iconName, value);

  return value;
};
