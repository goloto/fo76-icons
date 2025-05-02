import type { IconNames, Rule } from '../types';

export const OUTPUT_DIRECTORY = './output';
export const INPUT_DIRECTORY = './input';
export const ICONS_DIRECTORY = './icons';
export const GENERATED_DIRECTORY = './src/generated';
export const RULES_DIRECTORY = './src/rules';

const onlyActualItemsRegExp = new RegExp(
  '^((?!((zzz)|(ZZZ)|(DEl)|(DEL)|(test)|(DEPRECATED)|(cr)|(TEMPLATE)))).*(?!((NPC)|(NONPLAYABLE)))$'
);

export enum RightSignature {
  WNAM = 'WNAM',
  DESC = 'DESC',
  FULL = 'FULL',
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
