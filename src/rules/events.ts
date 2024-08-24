import { ICON_EVENTS } from "@/generated/icons-enum";
import type { RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const EVENTS_RULES_GROUP = {
    category: ICON_CATEGORIES.Events,
    rules: [],
} as const satisfies RulesGroup<ICON_EVENTS>;
