import type { LeftSignature, RightSignature } from "./const";

export interface IconRule {
  name: string;
  leftSignature: LeftSignature;
  rightSignature: RightSignature;
  isDeleted: boolean;
  isAnyKeyword: boolean;
  isInclusiveOr: boolean;
  isFullReplace: boolean;
  header?: string;
  include?: string[];
  exclude?: string[];
  isEnabled?: boolean;
  isFullReplaced?: boolean;
  isFallback?: boolean;
}

export type IconRuleMap = Record<string, IconRule>;

export interface CategoryOrder {
  name: string;
  order: number;
  isDeleted: boolean;
}

export type CategoryOrderMap = Record<string, CategoryOrder>;

export interface IconOrder extends CategoryOrder {
  category: string;
}

export type IconOrderMap = Record<string, IconOrder>;