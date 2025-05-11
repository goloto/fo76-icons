import type { CategoryOrder } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const ICON_CATEGORIES_ORDER = [
    {
        name: ICON_CATEGORIES.Currency,
        order: 0,
    },
    {
        name: ICON_CATEGORIES.LegendaryEffects,
        order: 1,
    },
    {
        name: ICON_CATEGORIES.Misc,
        order: 2,
    },
    {
        name: ICON_CATEGORIES.Keys,
        order: 3,
    },
    {
        name: ICON_CATEGORIES.Notes,
        order: 4,
    },
    {
        name: ICON_CATEGORIES.Holotapes,
        order: 5,
    },
    {
        name: ICON_CATEGORIES.Ammo,
        order: 6,
    },
    {
        name: ICON_CATEGORIES.Aid,
        order: 7,
    },
    {
        name: ICON_CATEGORIES.Food,
        order: 8,
    },
    {
        name: ICON_CATEGORIES.Apparel,
        order: 9,
    },
    {
        name: ICON_CATEGORIES.Armor,
        order: 10,
    },
    {
        name: ICON_CATEGORIES.Weapons,
        order: 11,
    },
    {
        name: ICON_CATEGORIES.Events,
        order: 12,
    }
] as const satisfies CategoryOrder[];
