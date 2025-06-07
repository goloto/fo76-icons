import { ICON_CATEGORIES } from '@/generated/icon-categories-enum';
import type { IconNames, IncludeProperty } from '../types';
import {
  ICON_AID,
  ICON_AMMO,
  ICON_APPAREL,
  ICON_ARMOR,
  ICON_CURRENCY,
  ICON_FOOD,
  ICON_KEYS,
  ICON_LEGENDARY_EFFECTS,
  ICON_MISC,
  ICON_NOTES,
  ICON_UTILITY,
  ICON_WEAPONS,
} from '@/generated/icons-enum';

export { ICON_CATEGORIES_ORDER } from './categories-order';

export const OUTPUT_DIRECTORY = './output';
export const INPUT_DIRECTORY = './input';
export const ICONS_DIRECTORY = './assets/icons';
export const GENERATED_DIRECTORY = './src/generated';
export const RULES_DIRECTORY = './src/rules';

export const NOT_EXISTED_EDID = 'edid|absolutely_not_existed_edid' as const;

/** Используется для удаления строк */
export const SPACE = '_space_' as const;

/** Главные иконки для каждой из категорий. Нужно для корректной авто-сортировки иконок */
export const GROUP_MAIN_ICONS_MAP: Record<ICON_CATEGORIES, Array<IconNames>> = {
  [ICON_CATEGORIES.Aid]: Object.values(ICON_AID),
  [ICON_CATEGORIES.Ammo]: Object.values(ICON_AMMO),
  [ICON_CATEGORIES.Apparel]: Object.values(ICON_APPAREL),
  [ICON_CATEGORIES.Armor]: Object.values(ICON_ARMOR),
  [ICON_CATEGORIES.Currency]: Object.values(ICON_CURRENCY),
  [ICON_CATEGORIES.Food]: Object.values(ICON_FOOD),
  [ICON_CATEGORIES.Keys]: Object.values(ICON_KEYS),
  [ICON_CATEGORIES.LegendaryEffects]: [
    ...Object.values(ICON_LEGENDARY_EFFECTS),
    SPACE,
  ],
  [ICON_CATEGORIES.Misc]: Object.values(ICON_MISC),
  [ICON_CATEGORIES.Notes]: Object.values(ICON_NOTES),
  [ICON_CATEGORIES.Utility]: Object.values(ICON_UTILITY),
  [ICON_CATEGORIES.Weapons]: Object.values(ICON_WEAPONS),
};

export const POWER_ARMOR_EFFECTS = [
  'ekwd|HasLegendary_PowerArmor',
  'ekwd|PowerArmor_Fasnacht_FatherWinter',
] as const satisfies IncludeProperty[];

export const BROADSIDER_RULE = 'ekwd|HasBarrel_MultiShot' as const;
export const REVOLVER_RULE = 'ekwd|ma_Revolver' as const;
export const HARPOONGUN_RULE = 'ekwd|DLC03_ma_HarpoonGun' as const;

const onlyActualItemsRegExp = new RegExp(
  '^((?!((zzz)|(ZZZ)|(DEl)|(DEL)|(CUT)|(debug)|(test)|(Test)|(DEPRECATED)|(cr)|(TEMPLATE)|(CreatureClothes)))).*(?!((NPC)|(NONPLAYABLE)))$'
);

export enum RightSignature {
  WNAM = 'WNAM',
  DESC = 'DESC',
  FULL = 'FULL',
  MCM = '*MCM',
}

export enum LeftSignature {
  Activity = 'ACTI',
  Alchemy = 'ALCH',
  Ammunition = 'AMMO',
  Armor = 'ARMO',
  Book = 'BOOK',
  Component = 'CMPO',
  Currency = 'CNCY',
  Container = 'CONT',
  Enchanted = 'ENCH',
  Furniture = 'FURN',
  InstanceNamingRules = 'INNR',
  Key = 'KEYM',
  Keyword = 'KYWD',
  Location = 'LCTN',
  Legendary = 'LGDI',
  MCM = '*MCM',
  Message = 'MESG',
  Misc = 'MISC',
  Note = 'NOTE',
  Npc = 'NPC_',
  Modification = 'OMOD',
  PowerArmor = 'PACH',
  Spell = 'SPEL',
  Utility = 'UTIL',
  Weapon = 'WEAP',
  Workshop = 'COBJ',
}
