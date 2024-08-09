import { ICON_CURRENCY } from '@/generated/icons-enum';
import { LeftSignature, RightSignature } from '@/constants';
import type { Rule } from '@/types';

export const CURRENCY_RULES: Rule<ICON_CURRENCY>[] = [
  {
    order: 0,
    iconName: ICON_CURRENCY.Caps,
    leftSignature: LeftSignature.Currency,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x2266',
    include: ['edid|Caps001'],
    exclude: [],
  },
];
