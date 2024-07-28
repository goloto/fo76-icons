import type { LeftSignature, RightSignature } from './const';

export interface Icon {
    name: string;
    category: string;
    charCode: string;
    order: number;
}

export interface Rule {
    iconName: string;
    order: number;
    leftSignature: LeftSignature;
    rightSignature: RightSignature;
    isInjected: boolean;
    isDeleted: boolean;
    isAnyKeyword: boolean;
    isInclusiveOr: boolean;
    isFullReplaced: boolean;
    header?: string;
    include?: string[];
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
