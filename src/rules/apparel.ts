import { ICON_APPAREL } from "@/generated/icons-enum";
import { LeftSignature, RightSignature } from "@/constants";
import type { IncludeProperty, RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
const glassesInclude: IncludeProperty[] = [
    "edid|glasses",
    "edid|goggles",
    "edid|Headwear_Metal_Shades",
    "edid|Headwear_TrustySidekick_Inspector_Mask",
    "edid|Headwear_SkippysOutfit",
    "edid|Headwear_BoS_Science_Scribe_Helmet"
];
const fedoraInclude: IncludeProperty[] = [
    "edid|headwear",
    "edid|Encryptid_Clothes_WhiteFedora",
    "edid|Mini_Robot_Hat",
    "edid|Tadpole_Clothes_PioneerScoutOutfit_Squirrel_Skirt",
    "edid|Supermutant_KingGrognak_Headband",
    "edid|Herd_Workshop_Clothes_BlueDevilHooddd"
];
const helmetInclude: IncludeProperty[] = [
    "edid|helmet",
    "edid|SupermutantHat",
    "edid|Supermutant76Hat1",
    "edid|ATX_Headwear_VintageFootball",
    "edid|Headwear_ChineseStealthArmor",
    "edid|Headwear_PumpkinHeavy_Black",
    "edid|Headwear_Jumpsuit_SpaceSuitClean1",
    "edid|Headwear_SpaceSuitHatClean",
    "edid|Headwear_AlaskanWinter",
    "edid|Headwear_CaptainCosmos",
    "edid|Creature_Spooky_Headwear_CaptainCosmos",
    "edid|Headwear_FreeStatesResistance",
    "edid|Headwear_PumpkinHeavy",
    "edid|Spooky_Headwear_PumpkinHeavy",
    "edid|F1_Headwear_RangersUniform",
    "edid|Headwear_HalloweenVikingBustedHorns",
    "edid|Spooky_Headwear_HalloweenVikingBustedHorns",
    "edid|Headwear_SkullRider_Flaming",
    "edid|Headwear_SkullRider_Rad",
    "edid|Armor_Raider_Skilanes_Headwear",
    "edid|Headwear_SkullRider",
    "edid|Headwear_CardboardRobot",
    "edid|Headwear_Jumpsuit_SpaceSuit1",
    "edid|Headwear_Responders_FirebreatherHat",
    "edid|Headwear_DeathclawMascot",
    "edid|Headwear_CommunistSpaceSuit",
    "edid|Headwear_FiremanHat",
    "edid|Headwear_Clothes_DLC03_Marine_Arctic",
    "edid|Headwear_FreeStatesRevolutionary",
    "edid|Headwear_BloodEagleMerc_Charmer2",
    "edid|Headwear_BloodEagleMerc_Charmer1",
    "edid|Headwear_SpaceSuitHat",
    "edid|Headwear_Union",
    "edid|Headwear_Responders_FiremanHat",
    "edid|Headwear_SuperMutant_Helm",
    "edid|Headwear_MutantArmor",
    "edid|Headwear_RangerArmor_Desert",
    "edid|Headwear_RangerArmor_Riot",
    "edid|Headwear_Clothes_Tempest"
];
const beretInclude: IncludeProperty[] = [
    "edid|beret",
    "edid|MilitaryCap",
    "edid|DLC03CaptainsDanceHat"
];
const gasMaskInclude: IncludeProperty[] = [
    "edid|gasmask",
    "edid|Headwear_Radicals_Mask_A"
];
const fasnachtMaskKeywordInclude: IncludeProperty[] = [
    "ekwd|fasnacht"
];
const fasnachtMaskEdidInclude: IncludeProperty[] = [
    "edid|Veteran_Mask",
    "edid|ClothesMistressOfMysteryVeil",
    "edid|ClothesMistressOfMysteryWornVeil"
];
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
            isInclusiveOr: true,
            isFullReplaced: false,
            include: glassesInclude,
            exclude: [],
        },
        {
            order: 1,
            prefix: [ICON_APPAREL.FedoraHat],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: fedoraInclude,
            exclude: [
                ...fasnachtMaskKeywordInclude,
                ...fasnachtMaskEdidInclude,
                ...gasMaskInclude,
                ...beretInclude,
                ...helmetInclude,
            ],
        },
        {
            order: 2,
            prefix: [ICON_APPAREL.Beret],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: beretInclude,
            exclude: [
                ...fasnachtMaskKeywordInclude,
                ...fasnachtMaskEdidInclude,
            ],
        },
        {
            order: 3,
            prefix: [ICON_APPAREL.GasMask],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: gasMaskInclude,
            exclude: [],
        },
        {
            order: 4,
            prefix: [ICON_APPAREL.Helmet],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: helmetInclude,
            exclude: [
                "edid|nohelmet",
                "edid|gasmask",
                "edid|fasnacht",
                "edid|PowerArmor"
            ],
        },
        {
            order: 5,
            prefix: [ICON_APPAREL.FasnachtMask],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: fasnachtMaskKeywordInclude,
            exclude: [],
        },
        {
            order: 6,
            prefix: [ICON_APPAREL.FasnachtMask],
            leftSignature: LeftSignature.Armor,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: fasnachtMaskEdidInclude,
            exclude: [],
        },
        {
            order: 7,
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
            order: 8,
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
            order: 9,
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
        },
        {
            order: 10,
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
