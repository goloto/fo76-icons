import { ICON_UTILITY } from "@/generated/icons-enum";
import type { RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
import { LeftSignature, RightSignature } from "@/constants";
export const UTILITY_RULES_GROUP = {
    category: ICON_CATEGORIES.Utility,
    rules: [
        {
            order: 0,
            prefix: [ICON_UTILITY.Empty],
            leftSignature: LeftSignature.Note,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["edid|absolutely_not_existed_edid"],
            exclude: [],
        }
    ],
} as const satisfies RulesGroup<ICON_UTILITY>;
