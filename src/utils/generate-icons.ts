import { ICON_CATEGORIES_ORDER } from '@/constants/categories-order';
import * as ALL_RULES from '@/rules';
import type { Icon, IconNames, RulesGroup } from '@/types';
import { getMaxLength } from '@/utils/get-max-length';
import { generateCharCode } from '@/utils/generate-icon-char-code';

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
              charCode: generateCharCode(prefix),
            }))
        );
      }

      return [...accumulator, ...iconsArray];
    },
    <Icon[]>[]
  );

  return icons;
};
