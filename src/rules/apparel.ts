import { ICON_APPAREL } from "@/generated/icons-enum";
import { LeftSignature, RightSignature } from "@/constants";
import type { RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const APPAREL_RULES_GROUP = {
    category: ICON_CATEGORIES.Apparel,
    rules: [
        {
            order: 0,
            prefix: [ICON_APPAREL.Helmet],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: ["edid|helmet"],
            exclude: ["edid|nohelmet"]
            // include: ["ekwd|ClothingTypeHat", "ekwd|ArmorBodyPartHead", "ekwd|HelmetCoversMouth"],
            // exclude: [
            //     "ekwd|ClothingTypeGasMask",
            //     "ekwd|ClothingTypeFedora",
            //     "ekwd|HatTypeFasnachtMask",
            //     "ekwd|ClothingTypeGlasses",
            // ],
        },
        {
            order: 1,
            prefix: [ICON_APPAREL.FedoraHat],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|ClothingTypeHat", "ekwd|ClothingTypeFedora"],
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
            isInclusiveOr: false,
            isFullReplaced: false,
            // "ekwd|ClothingTypeMask"
            include: ["ekwd|ClothingTypeHat", "ekwd|HatTypeFasnachtMask"],
            exclude: [],
        },
        {
            order: 3,
            prefix: [ICON_APPAREL.Beret],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["edid|beret"],
            exclude: [],
        },
        {
            order: 4,
            prefix: [ICON_APPAREL.GasMask],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|ClothingTypeMask", "ekwd|ClothingTypeGasMask"],
            exclude: [],
        },
        {
            order: 5,
            prefix: [ICON_APPAREL.Glasses],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: ["ekwd|ClothingTypeGlasses", "ekwd|ArmorBodyPartEyes"],
            exclude: [],
        },
        {
            order: 6,
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
            order: 7,
            prefix: [ICON_APPAREL.Suit],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|ClothingTypeFormalWear"],
            exclude: ["ekwd|ClothingTypeDress", "edid|mask"],
        },
        {
            order: 8,
            prefix: [ICON_APPAREL.Apparel],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["ekwd|ObjectTypeClothing"],
            exclude: [
                "ekwd|ClothingTypeHat",
                "ekwd|ClothingTypeGasMask",
                "ekwd|ClothingTypeDress",
                "ekwd|ClothingTypeFormalWear",
            ],
        }
        // "ekwd|ObjectTypeSports"
        // "ekwd|ClothingTypeCultist"
        // "ekwd|ClothingTypeHistorical"
        // "ekwd|ClothingTypeFishingHat"
        // "ekwd|ClothingTypeFormalHat"
        // "ekwd|ClothingTypeCostume"
        // "ekwd|HatTypeClown"
        // "ekwd|HatTypeTinfoil"
        // "ekwd|DiseasePrevention_Inhalation"
        // "ekwd|HatTypeHoliday"
        // "ekwd|HatTypeMilitary"
    ],
} as const satisfies RulesGroup<ICON_APPAREL>;
