import { ICON_CURRENCY } from "@/generated/icons-enum";
import { LeftSignature, RightSignature } from "@/constants";
import type { RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const CURRENCY_RULES_GROUP = {
    category: ICON_CATEGORIES.Currency,
    rules: [
        {
            order: 0,
            prefix: [ICON_CURRENCY.Caps],
            leftSignature: LeftSignature.Currency,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["edid|Caps001"],
            exclude: [],
        }
    ],
} as const satisfies RulesGroup<ICON_CURRENCY>;
