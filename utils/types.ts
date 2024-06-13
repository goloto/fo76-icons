export interface Info {
  name: string;
  header?: string;
  include?: string[];
  exclude?: string[];
  isEnabled?: boolean;
  isFullReplaced?: boolean;
  isFallback?: boolean;
}

export type InfoMap = Record<string, Info>;

export interface ItemOrder {
  name: string;
  order: number;
  isDeleted: boolean;
}

export type ItemOrderMap = Record<string, ItemOrder>;