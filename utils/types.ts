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

interface Directory {
  name: string;
  order: number;
  isDeleted: boolean;
}

export type DirectoryOrderMap = Record<string, Directory>;