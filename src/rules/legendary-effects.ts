import { ICON_LEGENDARY_EFFECTS } from "@/generated/icons-enum";
import { BROADSIDER_RULE, ERASER, HARPOONGUN_RULE, LeftSignature, POWER_ARMOR_EFFECTS, REVOLVER_RULE, RightSignature } from "@/constants";
import type { IncludeProperty, RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
const unyieldingRules = [
    "ekwd|HasLegendary_Weapon_Steady",
    "ekwd|HasLegendary_Armor_LowHealthIncreasesStats"
] as const satisfies IncludeProperty[];
const antiArmorRules = [
    "ekwd|HasLegendary_Weapon_AntiArmor"
] as const satisfies IncludeProperty[];
const bloodiedRules = [
    "ekwd|HasLegendary_Weapon_DamageInverseHealth"
] as const satisfies IncludeProperty[];
const junkieRules = [
    "ekwd|HasLegendary_Weapon_DamageAddiction"
] as const satisfies IncludeProperty[];
const gourmandRules = [
    "ekwd|HasLegendary_Weapon_Gourmand",
    "ekwd|HasLegendary_Armor_Overeater"
] as const satisfies IncludeProperty[];
const aristocratRules = [
    "ekwd|HasLegendary_Armor_ResistancesProportionalCaps",
    "ekwd|HasLegendary_Weapon_DamageViaCaps"
] as const satisfies IncludeProperty[];
const instigatingRules = [
    "ekwd|HasLegendary_Weapon_DamageFirstBlood"
] as const satisfies IncludeProperty[];
const jaggernautRules = [
    "ekwd|HasLegendary_Weapon_DamageViaHealth"
] as const satisfies IncludeProperty[];
const mutantRules = [
    "ekwd|HasLegendary_Armor_ResistancesMutation",
    "ekwd|HasLegendary_Weapon_DamageWithMutation"
] as const satisfies IncludeProperty[];
const berserkerRules = [
    "ekwd|HasLegendary_Weapon_DamageUnarmored"
] as const satisfies IncludeProperty[];
const quadRules = [
    "ekwd|HasLegendary_Weapon_AmmoCapacity4x"
] as const satisfies IncludeProperty[];
const twoShotRules = [
    "ekwd|HasLegendary_Weapon_TwoShot"
] as const satisfies IncludeProperty[];
const zealotRules = [
    "ekwd|HasLegendary_Armor_LessDMGScorched",
    "ekwd|HasLegendary_Weapon_DamageVsScorched"
] as const satisfies IncludeProperty[];
const nocturnalRules = [
    "ekwd|HasLegendary_Armor_ResistancesNight",
    "ekwd|HasLegendary_Weapon_DamageNight"
] as const satisfies IncludeProperty[];
const exterminatorRules = [
    "ekwd|HasLegendary_Armor_LessDMGBugs",
    "ekwd|HasLegendary_Weapon_DamageVsBugs"
] as const satisfies IncludeProperty[];
const assassinRules = [
    "ekwd|HasLegendary_Armor_LessDMGHumans",
    "ekwd|HasLegendary_Weapon_DamageVsPlayers"
] as const satisfies IncludeProperty[];
const furiousRules = [
    "ekwd|HasLegendary_Weapon_DamageConsecutiveHits"
] as const satisfies IncludeProperty[];
const troubleshooterRules = [
    "ekwd|HasLegendary_Weapon_DamageVsRobots",
    "ekwd|HasLegendary_Armor_LessDMGRobots"
] as const satisfies IncludeProperty[];
const mutantSlayerRules = [
    "ekwd|HasLegendary_Armor_LessDMGSupermutants",
    "ekwd|HasLegendary_Weapon_DamageVsSupermutants"
] as const satisfies IncludeProperty[];
const executionerRules = [
    "ekwd|HasLegendary_Weapon_Execute"
] as const satisfies IncludeProperty[];
const hunterRules = [
    "ekwd|HasLegendary_Weapon_DamageVsAnimals",
    "ekwd|HasLegendary_Armor_LessDMGAnimals"
] as const satisfies IncludeProperty[];
const bolsteringRules = [
    "ekwd|HasLegendary_Armor_ResistancesInverseHealth"
] as const satisfies IncludeProperty[];
const stalkerRules = [
    "ekwd|HasLegendary_Weapon_AccuracyNotInCombat"
] as const satisfies IncludeProperty[];
const chameleonRules = [
    "ekwd|HasLegendary_Armor_Chameleon"
] as const satisfies IncludeProperty[];
const ghoulSlayerRules = [
    "ekwd|HasLegendary_Weapon_DamageVsGhouls",
    "ekwd|HasLegendary_Armor_LessDMGGhouls"
] as const satisfies IncludeProperty[];
const lifeSaving = [
    "ekwd|HasLegendary_Armor_AutoRevive"
] as const satisfies IncludeProperty[];
const vanguardRules = [
    "ekwd|HasLegendary_Armor_ResistancesProportionalHealth"
] as const satisfies IncludeProperty[];
const cloakingRules = [
    "ekwd|HasLegendary_Armor_GettingMeleedTriggersInvisibility"
] as const satisfies IncludeProperty[];
const supressorRules = [
    "ekwd|HasLegendary_Weapon_DebuffDamage"
] as const satisfies IncludeProperty[];
const vampireRules = [
    "ekwd|HasLegendary_Weapon_Vampire"
] as const satisfies IncludeProperty[];
const medicRules = [
    "ekwd|HasLegendary_Weapon_Medic"
] as const satisfies IncludeProperty[];
const autoStimRules = [
    "ekwd|HasLegendary_Armor_LowHealthTriggersStimpak"
] as const satisfies IncludeProperty[];
const regeneratingRules = [
    "ekwd|HasLegendary_Armor_HealthRegen"
] as const satisfies IncludeProperty[];
const weightlessRules = [
    "ekwd|HasLegendary_Armor_Weightless"
] as const satisfies IncludeProperty[];
export const LEGENDARY_EFFECTS_RULES_GROUP = {
    category: ICON_CATEGORIES.LegendaryEffects,
    rules: [
        {
            order: 0,
            prefix: [ICON_LEGENDARY_EFFECTS.Furious],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...furiousRules],
            exclude: [],
        },
        {
            order: 1,
            prefix: [ICON_LEGENDARY_EFFECTS.TwoShot],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...twoShotRules],
            exclude: [],
        },
        {
            order: 2,
            prefix: [ICON_LEGENDARY_EFFECTS.Quad],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...quadRules],
            exclude: [],
        },
        {
            order: 3,
            prefix: [ICON_LEGENDARY_EFFECTS.Unyielding],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...unyieldingRules],
            exclude: [],
        },
        {
            order: 4,
            prefix: [ICON_LEGENDARY_EFFECTS.Gourmand],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...gourmandRules],
            exclude: [],
        },
        {
            order: 5,
            prefix: [ICON_LEGENDARY_EFFECTS.AntiArmor],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...antiArmorRules],
            exclude: [],
        },
        {
            order: 6,
            prefix: [ICON_LEGENDARY_EFFECTS.Bloodied],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...bloodiedRules],
            exclude: [],
        },
        {
            order: 7,
            prefix: [ICON_LEGENDARY_EFFECTS.Mutant],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...mutantRules],
            exclude: [],
        },
        {
            order: 8,
            prefix: [ICON_LEGENDARY_EFFECTS.Junkie],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...junkieRules],
            exclude: [],
        },
        {
            order: 9,
            prefix: [ICON_LEGENDARY_EFFECTS.Instigating],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...instigatingRules],
            exclude: [],
        },
        {
            order: 10,
            prefix: [ICON_LEGENDARY_EFFECTS.Jaggernaut],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...jaggernautRules],
            exclude: [],
        },
        {
            order: 11,
            prefix: [ICON_LEGENDARY_EFFECTS.Aristocrat],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...aristocratRules],
            exclude: [],
        },
        {
            order: 12,
            prefix: [ICON_LEGENDARY_EFFECTS.Troubleshooter],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...troubleshooterRules],
            exclude: [],
        },
        {
            order: 13,
            prefix: [ICON_LEGENDARY_EFFECTS.MutantSlayer],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...mutantSlayerRules],
            exclude: [],
        },
        {
            order: 14,
            prefix: [ICON_LEGENDARY_EFFECTS.GhoulSlayer],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...ghoulSlayerRules],
            exclude: [],
        },
        {
            order: 15,
            prefix: [ICON_LEGENDARY_EFFECTS.Zealot],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...zealotRules],
            exclude: [],
        },
        {
            order: 16,
            prefix: [ICON_LEGENDARY_EFFECTS.Assassin],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...assassinRules],
            exclude: [],
        },
        {
            order: 17,
            prefix: [ICON_LEGENDARY_EFFECTS.Exterminator],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...exterminatorRules],
            exclude: [],
        },
        {
            order: 18,
            prefix: [ICON_LEGENDARY_EFFECTS.Hunter],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...hunterRules],
            exclude: [],
        },
        {
            order: 19,
            prefix: [ICON_LEGENDARY_EFFECTS.Vampire],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...vampireRules],
            exclude: [],
        },
        {
            order: 20,
            prefix: [ICON_LEGENDARY_EFFECTS.Medic],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...medicRules],
            exclude: [],
        },
        {
            order: 21,
            prefix: [ICON_LEGENDARY_EFFECTS.Regenerating],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...regeneratingRules],
            exclude: [],
        },
        {
            order: 22,
            prefix: [ICON_LEGENDARY_EFFECTS.AutoStim],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...autoStimRules],
            exclude: [],
        },
        {
            order: 23,
            prefix: [ICON_LEGENDARY_EFFECTS.LifeSaving],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...lifeSaving],
            exclude: [],
        },
        {
            order: 24,
            prefix: [ICON_LEGENDARY_EFFECTS.Vanguard],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...vanguardRules],
            exclude: [],
        },
        {
            order: 25,
            prefix: [ICON_LEGENDARY_EFFECTS.Berserker],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...berserkerRules],
            exclude: [],
        },
        {
            order: 26,
            prefix: [ICON_LEGENDARY_EFFECTS.Nocturnal],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [...nocturnalRules],
            exclude: [],
        },
        {
            order: 27,
            prefix: [ICON_LEGENDARY_EFFECTS.Executioner],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...executionerRules],
            exclude: [],
        },
        {
            order: 28,
            prefix: [ICON_LEGENDARY_EFFECTS.Bolstering],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...bolsteringRules],
            exclude: [],
        },
        {
            order: 29,
            prefix: [ICON_LEGENDARY_EFFECTS.Stalker],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...stalkerRules],
            exclude: [],
        },
        {
            order: 30,
            prefix: [ICON_LEGENDARY_EFFECTS.Chameleon],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...chameleonRules],
            exclude: [],
        },
        {
            order: 31,
            prefix: [ICON_LEGENDARY_EFFECTS.Cloaking],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...cloakingRules],
            exclude: [],
        },
        {
            order: 32,
            prefix: [ICON_LEGENDARY_EFFECTS.Supressor],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [...supressorRules],
            exclude: [],
        },
        {
            order: 33,
            prefix: [ICON_LEGENDARY_EFFECTS.Weightless],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Armor_Weightless"],
            exclude: [],
        },
        {
            order: 34,
            prefix: [ERASER],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: true,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [],
            exclude: [
                "ekwd|HandmadeAssaultRifle",
                "ekwd|CustomItemName",
                "ekwd|PowerArmor",
                "ekwd|HasGrip_Rifle",
                "ekwd|HasGrip_Pistol",
                HARPOONGUN_RULE,
                REVOLVER_RULE,
                BROADSIDER_RULE,
                ...unyieldingRules,
                ...antiArmorRules,
                ...bloodiedRules,
                ...junkieRules,
                ...gourmandRules,
                ...aristocratRules,
                ...instigatingRules,
                ...jaggernautRules,
                ...mutantRules,
                ...berserkerRules,
                ...quadRules,
                ...twoShotRules,
                ...zealotRules,
                ...nocturnalRules,
                ...exterminatorRules,
                ...assassinRules,
                ...furiousRules,
                ...troubleshooterRules,
                ...mutantSlayerRules,
                ...executionerRules,
                ...hunterRules,
                ...bolsteringRules,
                ...stalkerRules,
                ...chameleonRules,
                ...ghoulSlayerRules,
                ...lifeSaving,
                ...vanguardRules,
                ...cloakingRules,
                ...supressorRules,
                ...vampireRules,
                ...medicRules,
                ...autoStimRules,
                ...regeneratingRules,
                ...weightlessRules,
            ],
        },
        {
            order: 35,
            prefix: [ERASER],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: true,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                ...POWER_ARMOR_EFFECTS,
                "ekwd|SilverLining",
                "ekwd|LastBastion",
                "ekwd|TrailWarden",
                "ekwd|StandFast",
                "ekwd|BlueRidgeGuardsmanArmor",
                "ekwd|HasChainsawBar",
                "ekwd|HasMag",
                "ekwd|HasMuzzle",
                "ekwd|HasReceiver",
                "ekwd|HasBarrel",
                "ekwd|CustomItemName_NukaShank"
            ],
            exclude: [
                BROADSIDER_RULE,
                HARPOONGUN_RULE
            ],
        }
    ],
} as const satisfies RulesGroup<ICON_LEGENDARY_EFFECTS | typeof ERASER>;
