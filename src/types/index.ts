import type {
  ICON_AID,
  ICON_AMMO,
  ICON_APPAREL,
  ICON_ARMOR,
  ICON_CURRENCY,
  ICON_FOOD,
  ICON_HEAVY_WEAPONS,
  ICON_HOLOTAPES,
  ICON_KEYS,
  ICON_LEGENDARY_EFFECTS,
  ICON_MELEE_WEAPONS,
  ICON_MINES,
  ICON_MISC,
  ICON_NOTES,
  ICON_PISTOLS,
  ICON_RIFLES,
  ICON_SHOTGUNS,
  ICON_THROWN_WEAPONS,
  ICON_WEAPONS,
} from '../generated/icons-enum';
import type { LeftSignature, RightSignature } from '../constants';
import type { ICON_CATEGORIES } from '@/generated/icon-categories-enum';

export interface Icon {
  name: IconNames;
  charCode: string;
}

export type ICON_COMMON = '_injected_innr_eraser';

export type IconNames =
  | ICON_COMMON
  | ICON_CURRENCY
  | ICON_THROWN_WEAPONS
  | ICON_MINES
  | ICON_LEGENDARY_EFFECTS
  | ICON_MISC
  | ICON_KEYS
  | ICON_NOTES
  | ICON_HOLOTAPES
  | ICON_AMMO
  | ICON_AID
  | ICON_FOOD
  | ICON_APPAREL
  | ICON_ARMOR
  | ICON_WEAPONS
  | ICON_MELEE_WEAPONS
  | ICON_HEAVY_WEAPONS
  | ICON_RIFLES
  | ICON_SHOTGUNS
  | ICON_PISTOLS;

type IncludeProperty = `edid|${string}`[] | `ekwd|${string}`[];

export interface Rule<T extends IconNames> {
  iconName?: T;
  order: number;
  leftSignature: LeftSignature;
  rightSignature: RightSignature;
  isInjected: boolean;
  isDeleted: boolean;
  isAnyKeyword: boolean;
  isInclusiveOr: boolean;
  isFullReplaced: boolean;
  header?: string;
  include?: IncludeProperty;
  exclude?: string[];
  isEnabled?: boolean;
  isFallback?: boolean;
  prefix?: T[];
  postfix?: T[];
}

export type RulesGroup<T extends IconNames> = {
  category: ICON_CATEGORIES;
  rules: Rule<T>[];
};

export interface CategoryOrder {
  name: ICON_CATEGORIES;
  order: number;
}

export interface IconOrder extends CategoryOrder {
  category: string;
}

export type IconOrderMap = Record<string, IconOrder>;
