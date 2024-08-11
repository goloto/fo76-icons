import { ICON_HOLOTAPES } from '@/generated/icons-enum';
import { LeftSignature, RightSignature } from '@/constants';
import type { RulesGroup } from '@/types';
import { ICON_CATEGORIES } from '@/generated/icon-categories-enum';

export const HOLOTAPES_RULES_GROUP = {
  category: ICON_CATEGORIES.Holotapes,
  rules: [
    {
      order: 0,
      prefix: [ICON_HOLOTAPES.SiloTape],
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
      prefix: [ICON_HOLOTAPES.Holotape],
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
  ],
} as const satisfies RulesGroup<ICON_HOLOTAPES>;
