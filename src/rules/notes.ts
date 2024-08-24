import { ICON_NOTES } from "@/generated/icons-enum";
import { LeftSignature, RightSignature } from "@/constants";
import type { RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const NOTES_RULES_GROUP = {
    category: ICON_CATEGORIES.Notes,
    rules: [
        {
            order: 0,
            prefix: [ICON_NOTES.Plan],
            leftSignature: LeftSignature.Book,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|ObjectTypeRecipe"],
            exclude: [],
        },
        {
            order: 1,
            prefix: [ICON_NOTES.Note],
            leftSignature: LeftSignature.Book,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [],
            exclude: ["ekwd|ObjectTypeRecipe", "ekwd|MagazineKeyword"],
        },
        {
            order: 2,
            prefix: [ICON_NOTES.Check],
            leftSignature: LeftSignature.Book,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [],
            exclude: [],
        }
    ],
} as const satisfies RulesGroup<ICON_NOTES>;
