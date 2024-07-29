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
import type { LeftSignature, RightSignature } from './const';

export interface Icon {
  name: string;
  category: string;
  charCode: string;
  order: number;
}

type IncludeProperty = `edid|${string}`[] | `ekwd|${string}`[];

export interface Rule {
  iconName:
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
}

export type RulesMap = Record<string, Rule>;

export interface CategoryOrder {
  name: string;
  order: number;
}

export interface IconOrder extends CategoryOrder {
  category: string;
}

export type IconOrderMap = Record<string, IconOrder>;
