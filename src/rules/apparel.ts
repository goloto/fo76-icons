import { ICON_APPAREL } from "@/generated/icons-enum";
import { LeftSignature, RightSignature } from "@/constants";
import type { IncludeProperty, RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
const objectTypeClothing = "ekwd|ObjectTypeClothing" as const;
const clothingTypeHat = "ekwd|ClothingTypeHat" as const;
const clothingTypeCostume = "ekwd|ClothingTypeCostume" as const;
const clothingTypeHoliday = "ekwd|ClothingTypeHoliday" as const;
const clothingTypeSwimsuit = "ekwd|ClothingTypeSwimsuit" as const;
const armorBodyPartHead = "ekwd|ArmorBodyPartHead" as const;
const hatTypeMilitary = "ekwd|HatTypeMilitary" as const;
export const APPAREL_RULES_GROUP = {
    category: ICON_CATEGORIES.Apparel,
    rules: [
        {
            order: 0,
            prefix: [ICON_APPAREL.Glasses],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|ClothingTypeGlasses"],
            exclude: [],
        },
        {
            order: 1,
            prefix: [ICON_APPAREL.FasnachtMask],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|fasnacht"],
            exclude: [],
        },
        {
            order: 2,
            prefix: [ICON_APPAREL.FasnachtMask],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: [
                "edid|Veteran_Mask",
                "edid|ClothesMistressOfMysteryVeil",
                "edid|ClothesMistressOfMysteryWornVeil"
            ],
            exclude: [],
        },
        {
            order: 3,
            prefix: [ICON_APPAREL.FlowerCrown],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["edid|FlowerCrown"],
            exclude: [],
        },
        {
            order: 4,
            prefix: [ICON_APPAREL.SpacesuitHat],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["edid|Headwear_Jumpsuit_SpaceSuit"],
            exclude: [],
        },
        {
            order: 5,
            prefix: [ICON_APPAREL.SpacesuitHat],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                clothingTypeHat,
                "ekwd|ClothingTypeSpaceSuit"
            ],
            exclude: [],
        },
        {
            order: 6,
            prefix: [ICON_APPAREL.CowboyHat],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|HatTypeCowboy"],
            exclude: [],
        },
        {
            order: 7,
            prefix: [ICON_APPAREL.CowboyHat],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["edid|Veracio_Hat"],
            exclude: [],
        },
        {
            order: 8,
            prefix: [ICON_APPAREL.CultistHood],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                clothingTypeHat,
                "ekwd|ClothingTypeCultist",
            ],
            exclude: [],
        },
        {
            order: 9,
            prefix: [ICON_APPAREL.FedoraHat],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [clothingTypeHat],
            exclude: [hatTypeMilitary],
        },
        {
            order: 10,
            prefix: [ICON_APPAREL.GasMask],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|ClothingTypeGasmask"],
            exclude: [],
        },
        {
            order: 11,
            prefix: [ICON_APPAREL.MilitaryHat],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [hatTypeMilitary],
            exclude: [
                armorBodyPartHead,
                clothingTypeCostume,
            ],
        },
        {
            order: 12,
            prefix: [ICON_APPAREL.Helmet],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [armorBodyPartHead],
            exclude: [],
        },
        {
            order: 13,
            prefix: [ICON_APPAREL.Asylum],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                objectTypeClothing,
                "ekwd|ClothingTypeAsylum",
            ],
            exclude: [],
        },
        {
            order: 14,
            prefix: [ICON_APPAREL.CarnivalCostume],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                objectTypeClothing,
                clothingTypeHoliday,
            ],
            exclude: [
                "ekwd|hat",
                "ekwd|glasses",
            ],
        },
        {
            order: 15,
            prefix: [ICON_APPAREL.CarnivalCostume],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                objectTypeClothing,
                clothingTypeCostume,
            ],
            exclude: [
                "ekwd|ClothingTypeDress",
                "ekwd|ClothingTypeSpacesuit",
                "ekwd|ClothingTypeCowboy",
                clothingTypeSwimsuit
            ],
        },
        {
            order: 16,
            prefix: [ICON_APPAREL.CowboyClothing],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                objectTypeClothing,
                "ekwd|ClothingTypeCowboy",
            ],
            exclude: [clothingTypeHat],
        },
        {
            order: 17,
            prefix: [ICON_APPAREL.CowboyClothing],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["edid|Outfit_NukaCowboyChaps"],
            exclude: [clothingTypeHat],
        },
        {
            order: 18,
            prefix: [ICON_APPAREL.SpacesuitClothing],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                objectTypeClothing,
                "ekwd|ClothingTypeSpacesuit"
            ],
            exclude: [
                clothingTypeHat,
            ],
        },
        {
            order: 19,
            prefix: [ICON_APPAREL.Dress],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|ClothingTypeDress"],
            exclude: [],
        },
        {
            order: 20,
            prefix: [ICON_APPAREL.WinterJacket],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                objectTypeClothing,
                "ekwd|ClothingTypeWinter"
            ],
            exclude: [
                "ekwd|ObjectTypeArmor",
                clothingTypeHat,
                clothingTypeCostume
            ],
        },
        {
            order: 21,
            prefix: [ICON_APPAREL.MilitaryClothing],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                objectTypeClothing,
                "ekwd|ClothingTypeMilitary"
            ],
            exclude: [],
        },
        {
            order: 22,
            prefix: [ICON_APPAREL.Suit],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|ClothingTypeFormalWear"],
            exclude: [
                "ekwd|ClothingTypeDress",
                "edid|mask",
                clothingTypeSwimsuit
            ],
        },
        {
            order: 23,
            prefix: [ICON_APPAREL.Sleepwear],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                objectTypeClothing,
                "ekwd|ClothingTypeSleepwear"
            ],
            exclude: [
                "ekwd|ObjectTypeSwimsuit",
                clothingTypeHoliday,
            ],
        },
        {
            order: 24,
            prefix: [ICON_APPAREL.Swimsuit],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [
                objectTypeClothing,
                clothingTypeSwimsuit
            ],
            exclude: [],
        },
        // refactor
        {
            order: 25,
            prefix: [ICON_APPAREL.Apparel],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: [objectTypeClothing],
            exclude: [
                clothingTypeHat,
                "ekwd|ClothingTypeGasMask",
                "ekwd|ClothingTypeDress",
                "ekwd|ClothingTypeFormalWear",
            ],
        },
        // refactor
        {
            order: 26,
            prefix: [ICON_APPAREL.Apparel],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: [
                "edid|Armor_Disciples_Underarmor",
                "edid|MotivationalCollar",
                "edid|WeaselCollar",
                "edid|Outfit_TheMechanicOutfit_GreaseGoblin",
            ],
            exclude: [],
        }
        // "ekwd|ClothingTypeCostumeUnstoppables"
        // "ekwd|ClothingTypeFishingOutfit"
        // "ekwd|ClothingTypePioneer"
        // "ekwd|CLothingTypeFormalWear"
        // "ekwd|ClothingTypeDress"
        // "ekwd|HatTypeAsylum"
        // "ekwd|HatTypeHalloween"
        // "ekwd|ObjectTypeSports"
        // "ekwd|ClothingTypeCultist"
        // "ekwd|ClothingTypeHistorical"
        // "ekwd|HatTypeClown"
        // "ekwd|HatTypeTinfoil"
        // "ekwd|DiseasePrevention_Inhalation"
        // "ekwd|HatTypeHoliday"
        // "ekwd|ClothingTypeFishingHat"
        // "ekwd|HatTypeMilitary"
        // "ekwd|ClothingTypeFormalHat"
    ],
} as const satisfies RulesGroup<ICON_APPAREL>;
