export interface IconRule {
  name: string;
  isDeleted: boolean;
  header?: string;
  include?: string[];
  exclude?: string[];
  isEnabled?: boolean;
  isFullReplaced?: boolean;
  isFallback?: boolean;
}

export type IconRuleMap = Record<string, IconRule>;

export interface ItemOrder {
  name: string;
  order: number;
  isDeleted: boolean;
}

export type ItemOrderMap = Record<string, ItemOrder>;