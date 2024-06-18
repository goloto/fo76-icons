import type { IconRule } from "./types";

export const ICONS_DIRECTORY = './icons';
export const JSON_DIRECTORY = './json';

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

export const ICONS_DEFAULT_RULES: Record<
  string, 
  Pick<IconRule, 'leftSignature' | 'rightSignature' | 'isFullReplaced'>
> = {
  aid: {
    rightSignature: RightSignature.FULL,
    leftSignature: LeftSignature.Alchemy,
    isFullReplaced: true,
  },
  ammo: {
    leftSignature: LeftSignature.Ammunition,
    rightSignature: RightSignature.FULL,
    isFullReplaced: true,
  },
  apparel: {
    leftSignature: LeftSignature.Armor,
    rightSignature: RightSignature.FULL,
    isFullReplaced: true,
  },
  armor: {
    leftSignature: LeftSignature.Armor,
    rightSignature: RightSignature.FULL,
    isFullReplaced: true,
  },
  food: {
    leftSignature: LeftSignature.Alchemy,
    rightSignature: RightSignature.FULL,
    isFullReplaced: true,
  },
  junk: {
    leftSignature: LeftSignature.Misc,
    rightSignature: RightSignature.FULL,
    isFullReplaced: true,
  },
  keys: {
    leftSignature: LeftSignature.Key,
    rightSignature: RightSignature.FULL,
    isFullReplaced: true,
  },
  legendary: {
    leftSignature: LeftSignature.InstanceNamingRules,
    rightSignature: RightSignature.WNAM,
    isFullReplaced: true,
  },
  notes: {
    leftSignature: LeftSignature.Book,
    rightSignature: RightSignature.FULL,
    isFullReplaced: true,
  },
  weapons: {
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isFullReplaced: true,
  },
  misc: {
    leftSignature: LeftSignature.Misc,
    rightSignature: RightSignature.FULL,
    isFullReplaced: true,
  },
};
