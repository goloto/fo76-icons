import { OUTPUT_DIRECTORY } from '@/constants';
import * as ICONS_RULES from '@/rules';
import { ICONS } from '@/generated/icons';
import { type Rule, type IconNames } from '@/types';
import { getCharFromHexadecimal } from '@/utils/common';

export const generateTranslateFile = async () => {
  const translateFile = Bun.file(`${OUTPUT_DIRECTORY}/translate_ru.txt`);
  const translationString = await translateFile.text();
  const rulesWithTranslationReplacing = Object.values(ICONS_RULES)
    .map(({ rules }) => rules)
    .reduce<Rule<IconNames>[]>(
      (accumulator, categoryRules) => [...accumulator, ...categoryRules],
      []
    )
    .filter((rule) => !!rule.translationReplacing);
  const prefixesForTranslationReplacing = rulesWithTranslationReplacing
    .map(({ prefix }) => prefix)
    .reduce<IconNames[]>((accumulator, prefixes) => {
      if (!prefixes) {
        return accumulator;
      }

      return [...accumulator, ...prefixes];
    }, []);
  const iconsForTranslationReplacing = ICONS.filter(({ name }) =>
    prefixesForTranslationReplacing.includes(name)
  );
  const iconsCharCodeMap = iconsForTranslationReplacing.reduce(
    (accumulator, { name, charCode }) => {
      return {
        ...accumulator,
        [name]: charCode,
      };
    },
    <Record<IconNames, string>>{}
  );
  const correctedTranslation = rulesWithTranslationReplacing.reduce<string>(
    (stringAccumulator, { translationReplacing, prefix: prefixList }) => {
      if (!prefixList || !prefixList.length || !translationReplacing) {
        return stringAccumulator;
      }

      return translationReplacing.reduce((accumulator, replacer) => {
        const index = accumulator.indexOf(replacer);

        if (!~index) {
          return accumulator;
        }

        const endLineIndex = accumulator.indexOf('\n', index);
        const prefixString = prefixList
          .map((prefix) => {
            return getCharFromHexadecimal(iconsCharCodeMap[prefix]);
          })
          .join('');

        return `${accumulator.slice(0, index)}${replacer}${'	'}${prefixString}${accumulator.slice(endLineIndex)}`;
      }, stringAccumulator);
    },
    translationString
  );

  await Bun.write(`${OUTPUT_DIRECTORY}/translate_ru.txt`, correctedTranslation);
};
