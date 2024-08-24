import type { CategoryOrder } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const ICON_CATEGORIES_ORDER = [
    {
        name: ICON_CATEGORIES.Currency,
        order: 0,
    },
    {
        name: ICON_CATEGORIES.ThrownWeapons,
        order: 1,
    },
    {
        name: ICON_CATEGORIES.Mines,
        order: 2,
    },
    {
        name: ICON_CATEGORIES.LegendaryEffects,
        order: 3,
    },
    {
        name: ICON_CATEGORIES.Misc,
        order: 4,
    },
    {
        name: ICON_CATEGORIES.Keys,
        order: 5,
    },
    {
        name: ICON_CATEGORIES.Notes,
        order: 6,
    },
    {
        name: ICON_CATEGORIES.Holotapes,
        order: 7,
    },
    {
        name: ICON_CATEGORIES.Ammo,
        order: 8,
    },
    {
        name: ICON_CATEGORIES.Aid,
        order: 9,
    },
    {
        name: ICON_CATEGORIES.Food,
        order: 10,
    },
    {
        name: ICON_CATEGORIES.Apparel,
        order: 11,
    },
    {
        name: ICON_CATEGORIES.Armor,
        order: 12,
    },
    {
        name: ICON_CATEGORIES.Weapons,
        order: 13,
    },
    {
        name: ICON_CATEGORIES.MeleeWeapons,
        order: 14,
    },
    {
        name: ICON_CATEGORIES.HeavyWeapons,
        order: 15,
    },
    {
        name: ICON_CATEGORIES.Rifles,
        order: 16,
    },
    {
        name: ICON_CATEGORIES.Shotguns,
        order: 17,
    },
    {
        name: ICON_CATEGORIES.Pistols,
        order: 18,
    }
] as const satisfies CategoryOrder[];
