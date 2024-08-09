import { ICON_NOTES } from '@/generated/icons-enum';
import { LeftSignature, RightSignature } from '@/constants';
import type { Rule } from '@/types';

export const NOTES_RULES: Rule<ICON_NOTES>[] = [
  {
    order: 0,
    iconName: ICON_NOTES.Plan,
    leftSignature: LeftSignature.Book,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x22ae',
    include: ['ekwd|ObjectTypeRecipe'],
    exclude: [],
  },
  {
    order: 1,
    iconName: ICON_NOTES.Note,
    leftSignature: LeftSignature.Book,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x22af',
    include: [],
    exclude: ['ekwd|ObjectTypeRecipe', 'ekwd|MagazineKeyword'],
  },
  {
    order: 2,
    iconName: ICON_NOTES.Check,
    leftSignature: LeftSignature.Book,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x22b0',
    include: [],
    exclude: [],
  },
];
