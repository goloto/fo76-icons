import { ICON_SHOTGUNS } from '@/generated/icons-enum';
import { LeftSignature, RightSignature } from '@/constants';
import type { RulesGroup } from '@/types';
import { ICON_CATEGORIES } from '@/generated/icon-categories-enum';

export const SHOTGUNS_RULES_GROUP: RulesGroup<ICON_SHOTGUNS> = {
  category: ICON_CATEGORIES.Shotguns,
  rules: [
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
  ],
};
