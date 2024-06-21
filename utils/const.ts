import type { IconRule } from "./types";

export const ICONS_DIRECTORY = './icons';
export const JSON_DIRECTORY = './json';
export const RULES_DIRECTORY = './rules';

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
}

export const SORTED_RULES_KEYS: Array<keyof IconRule> = [
  'order',
  'iconName',
  'leftSignature',
  'rightSignature',
  'isDeleted',
  'isAnyKeyword',
  'isInclusiveOr',
  'isFullReplaced',
  'header',
  'include',
  'exclude',
  'isEnabled',
  'isFallback'
];

export const ICONS_DEFAULT_RULES: Record<
  string, 
  Pick<IconRule, 'leftSignature' | 'rightSignature' | 'isFullReplaced'>
> = {
  aid: {
    rightSignature: RightSignature.FULL,
    leftSignature: LeftSignature.Alchemy,
    isFullReplaced: false,
  },
  ammo: {
    leftSignature: LeftSignature.Ammunition,
    rightSignature: RightSignature.FULL,
    isFullReplaced: false,
  },
  apparel: {
    leftSignature: LeftSignature.Armor,
    rightSignature: RightSignature.FULL,
    isFullReplaced: false,
  },
  armor: {
    leftSignature: LeftSignature.Armor,
    rightSignature: RightSignature.FULL,
    isFullReplaced: false,
  },
  food: {
    leftSignature: LeftSignature.Alchemy,
    rightSignature: RightSignature.FULL,
    isFullReplaced: false,
  },
  junk: {
    leftSignature: LeftSignature.Misc,
    rightSignature: RightSignature.FULL,
    isFullReplaced: false,
  },
  keys: {
    leftSignature: LeftSignature.Key,
    rightSignature: RightSignature.FULL,
    isFullReplaced: false,
  },
  legendary: {
    leftSignature: LeftSignature.InstanceNamingRules,
    rightSignature: RightSignature.WNAM,
    isFullReplaced: true,
  },
  notes: {
    leftSignature: LeftSignature.Book,
    rightSignature: RightSignature.FULL,
    isFullReplaced: false,
  },
  weapons: {
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isFullReplaced: false,
  },
  misc: {
    leftSignature: LeftSignature.Misc,
    rightSignature: RightSignature.FULL,
    isFullReplaced: false,
  },
};
