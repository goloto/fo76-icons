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

export const ICONS_CATEGORY_SIGNATURE_MAP: Record<string, LeftSignature> = {
  aid: LeftSignature.Alchemy,
  ammo: LeftSignature.Ammunition,
  apparel: LeftSignature.Armor,
  armor: LeftSignature.Armor,
  food: LeftSignature.Alchemy,
  junk: LeftSignature.Misc,
  notes: LeftSignature.Book,
  weapons: LeftSignature.Weapon,
  misc: LeftSignature.Misc
}
