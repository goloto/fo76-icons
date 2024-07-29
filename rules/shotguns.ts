import { ICON_SHOTGUNS } from '../generated/icons-enum';
import { LeftSignature, RightSignature } from '../utils/const';
import type { Rule } from '../utils/types';

export const SHOTGUNS_RULES: Rule[] = [
  {
    order: 0,
    iconName: ICON_SHOTGUNS.Shotgun,
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: true,
    isFullReplaced: false,
    header: '0x233d',
    include: ['edid|shotgun', 'edid|WesternSpirit'],
    exclude: [],
  },
];
