export type Info = Record<string, IconInfo>;

export interface IconInfo {
  name: string;
  header?: string;
  include?: string[];
  exclude?: string[];
  isEnabled?: boolean;
  isFullReplaced?: boolean;
  isFallback?: boolean;
}