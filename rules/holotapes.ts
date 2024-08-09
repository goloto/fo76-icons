import { ICON_HOLOTAPES } from '@/generated/icons-enum';
import { LeftSignature, RightSignature } from '@/constants';
import type { Rule } from '@/types';

export const HOLOTAPES_RULES: Rule<ICON_HOLOTAPES>[] = [
  {
    order: 0,
    iconName: ICON_HOLOTAPES.SiloTape,
    leftSignature: LeftSignature.Note,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x22b1',
    include: ['edid|SiloStateTape'],
    exclude: [],
  },
  {
    order: 1,
    iconName: ICON_HOLOTAPES.Holotape,
    leftSignature: LeftSignature.Note,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: true,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x22b2',
    include: [],
    exclude: [],
  },
];
