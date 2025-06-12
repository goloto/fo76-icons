import type {
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
} from '../generated/icons-enum';
import type { SPACE, LeftSignature, RightSignature } from '../constants';
import type { ICON_CATEGORIES } from '@/generated/icon-categories-enum';

export interface Icon {
  name: IconNames;
  charCode: string;
  category: ICON_CATEGORIES;
}

// TODO: generate this too
export type IconNames =
  | typeof SPACE
  | ICON_CURRENCY
  | ICON_LEGENDARY_EFFECTS
  | ICON_MISC
  | ICON_KEYS
  | ICON_NOTES
  | ICON_AMMO
  | ICON_AID
  | ICON_FOOD
  | ICON_APPAREL
  | ICON_ARMOR
  | ICON_WEAPONS
  | ICON_UTILITY;

export type IncludeProperty =
  | `edid|${string}`
  | `ekwd|${string}`
  | `form|${string}`;

export interface Rule<T extends IconNames> {
  order: number;
  leftSignature: LeftSignature;
  rightSignature: RightSignature;
  isInjected: boolean;
  isDeleted: boolean;
  isAnyKeyword: boolean;
  isInclusiveOr: boolean;
  isFullReplaced: boolean;
  include?: IncludeProperty[];
  exclude?: string[];
  isEnabled?: boolean;
  isFallback?: boolean;
  prefix?: T[];
  postfix?: T[];
  translationReplacing?: string[];
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
