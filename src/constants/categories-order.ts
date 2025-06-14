import type { CategoryOrder } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const ICON_CATEGORIES_ORDER = [
    {
        name: ICON_CATEGORIES.LegendaryEffects,
        order: 0,
    },
    {
        name: ICON_CATEGORIES.Misc,
        order: 1,
    },
    {
        name: ICON_CATEGORIES.Keys,
        order: 2,
    },
    {
        name: ICON_CATEGORIES.Notes,
        order: 3,
    },
    {
        name: ICON_CATEGORIES.Ammo,
        order: 4,
    },
    {
        name: ICON_CATEGORIES.Aid,
        order: 5,
    },
    {
        name: ICON_CATEGORIES.Food,
        order: 6,
    },
    {
        name: ICON_CATEGORIES.Apparel,
        order: 7,
    },
    {
        name: ICON_CATEGORIES.Armor,
        order: 8,
    },
    {
        name: ICON_CATEGORIES.Weapons,
        order: 9,
    },
    {
        name: ICON_CATEGORIES.Utility,
        order: 10,
    }
] as const satisfies CategoryOrder[];
