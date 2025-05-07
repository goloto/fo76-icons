import { ICON_AID, ICON_AMMO, ICON_APPAREL, ICON_ARMOR, ICON_CURRENCY, ICON_EVENTS, ICON_FOOD, ICON_HEAVY_WEAPONS, ICON_HOLOTAPES, ICON_KEYS, ICON_LEGENDARY_EFFECTS, ICON_MELEE_WEAPONS, ICON_MINES, ICON_MISC, ICON_NOTES, ICON_PISTOLS, ICON_RIFLES, ICON_SHOTGUNS, ICON_THROWN_WEAPONS, ICON_WEAPONS } from "@/generated/icons-enum";
import type { Icon } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const ICONS = [
    {
        name: ICON_CURRENCY.Caps,
        category: ICON_CATEGORIES.Currency,
        charCode: '0x2266'
    },
    {
        name: ICON_THROWN_WEAPONS.MeatClever,
        category: ICON_CATEGORIES.ThrownWeapons,
        charCode: '0x2267'
    },
    {
        name: ICON_THROWN_WEAPONS.NukaGrenade,
        category: ICON_CATEGORIES.ThrownWeapons,
        charCode: '0x2268'
    },
    {
        name: ICON_THROWN_WEAPONS.PlasmaGrenade,
        category: ICON_CATEGORIES.ThrownWeapons,
        charCode: '0x2269'
    },
    {
        name: ICON_THROWN_WEAPONS.CryoGrenade,
        category: ICON_CATEGORIES.ThrownWeapons,
        charCode: '0x226a'
    },
    {
        name: ICON_THROWN_WEAPONS.PulseGrenade,
        category: ICON_CATEGORIES.ThrownWeapons,
        charCode: '0x226b'
    },
    {
        name: ICON_THROWN_WEAPONS.FragmentationGrenade,
        category: ICON_CATEGORIES.ThrownWeapons,
        charCode: '0x226c'
    },
    {
        name: ICON_THROWN_WEAPONS.ThrownBomb,
        category: ICON_CATEGORIES.ThrownWeapons,
        charCode: '0x226d'
    },
    {
        name: ICON_THROWN_WEAPONS.Dynamite,
        category: ICON_CATEGORIES.ThrownWeapons,
        charCode: '0x226e'
    },
    {
        name: ICON_MINES.CryoMine,
        category: ICON_CATEGORIES.Mines,
        charCode: '0x226f'
    },
    {
        name: ICON_MINES.PlasmaMine,
        category: ICON_CATEGORIES.Mines,
        charCode: '0x2270'
    },
    {
        name: ICON_MINES.PulseMine,
        category: ICON_CATEGORIES.Mines,
        charCode: '0x2271'
    },
    {
        name: ICON_MINES.BottlecapMine,
        category: ICON_CATEGORIES.Mines,
        charCode: '0x2272'
    },
    {
        name: ICON_MINES.NukeMine,
        category: ICON_CATEGORIES.Mines,
        charCode: '0x2273'
    },
    {
        name: ICON_MINES.FragmentationMine,
        category: ICON_CATEGORIES.Mines,
        charCode: '0x2274'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Unyielding,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2275'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.AntiArmor,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2276'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Bloodied,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2277'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Junkie,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2278'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Gourmand,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2279'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Aristocrat,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x227a'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Instigating,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x227b'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Jaggernaut,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x227c'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Mutant,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x227d'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Berserker,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x227e'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Quad,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x227f'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.TwoShot,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2280'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Zealot,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2281'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Nocturnal,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2282'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Exterminator,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2283'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Assassin,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2284'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Furious,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2285'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Troubleshooter,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2286'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.MutantSlayer,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2287'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Executioner,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2288'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Hunter,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2289'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Bolstering,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x228a'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Stalker,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x228b'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Chameleon,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x228c'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.GhoulSlayer,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x228d'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.LifeSaving,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x228e'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Vanguard,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x228f'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Cloaking,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2290'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Supressor,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2291'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Vampire,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2292'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Medic,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2293'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.AutoStim,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2294'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Regenerating,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2295'
    },
    {
        name: ICON_LEGENDARY_EFFECTS.Weightless,
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x2296'
    },
    {
        name: '_injected_innr_eraser',
        category: ICON_CATEGORIES.LegendaryEffects,
        charCode: '0x020'
    },
    {
        name: ICON_MISC.LegendaryModule,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x2297'
    },
    {
        name: ICON_MISC.LegendaryCore,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x2298'
    },
    {
        name: ICON_MISC.TreasureNote,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x2299'
    },
    {
        name: ICON_MISC.NukeCard,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x229a'
    },
    {
        name: ICON_MISC.RepairKit,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x229b'
    },
    {
        name: ICON_MISC.LegendaryModification,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x229c'
    },
    {
        name: ICON_MISC.FluxMisc,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x229d'
    },
    {
        name: ICON_MISC.Token,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x229e'
    },
    {
        name: ICON_MISC.HybridFlower,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x229f'
    },
    {
        name: ICON_MISC.Cards,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a0'
    },
    {
        name: ICON_MISC.Bulk,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a1'
    },
    {
        name: ICON_MISC.Components,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a2'
    },
    {
        name: ICON_MISC.Corpse,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a3'
    },
    {
        name: ICON_MISC.Skull,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a4'
    },
    {
        name: ICON_MISC.Bones,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a5'
    },
    {
        name: ICON_MISC.TeddyBear,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a6'
    },
    {
        name: ICON_MISC.RocketToy,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a7'
    },
    {
        name: ICON_MISC.CircuitBoard,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a8'
    },
    {
        name: ICON_MISC.Canister,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22a9'
    },
    {
        name: ICON_MISC.MetalScrap,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22aa'
    },
    {
        name: ICON_MISC.Ore,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22ab'
    },
    {
        name: ICON_MISC.Junk,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22ac'
    },
    {
        name: ICON_MISC.Quest,
        category: ICON_CATEGORIES.Misc,
        charCode: '0x22ad'
    },
    {
        name: ICON_KEYS.AccessCard,
        category: ICON_CATEGORIES.Keys,
        charCode: '0x22ae'
    },
    {
        name: ICON_KEYS.Key,
        category: ICON_CATEGORIES.Keys,
        charCode: '0x22af'
    },
    {
        name: ICON_NOTES.Plan,
        category: ICON_CATEGORIES.Notes,
        charCode: '0x22b0'
    },
    {
        name: ICON_NOTES.TreasureMap,
        category: ICON_CATEGORIES.Notes,
        charCode: '0x22b1'
    },
    {
        name: ICON_NOTES.Note,
        category: ICON_CATEGORIES.Notes,
        charCode: '0x22b2'
    },
    {
        name: ICON_NOTES.Check,
        category: ICON_CATEGORIES.Notes,
        charCode: '0x22b3'
    },
    {
        name: ICON_HOLOTAPES.SiloTape,
        category: ICON_CATEGORIES.Holotapes,
        charCode: '0x22b4'
    },
    {
        name: ICON_HOLOTAPES.Holotape,
        category: ICON_CATEGORIES.Holotapes,
        charCode: '0x22b5'
    },
    {
        name: ICON_AMMO.MiniNuke,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22b6'
    },
    {
        name: ICON_AMMO.FusionCore,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22b7'
    },
    {
        name: ICON_AMMO.Rocket,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22b8'
    },
    {
        name: ICON_AMMO.FortyMmGrenade,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22b9'
    },
    {
        name: ICON_AMMO.Fuel,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22ba'
    },
    {
        name: ICON_AMMO.FusionCell,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22bb'
    },
    {
        name: ICON_AMMO.NukaColaAmmo,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22bc'
    },
    {
        name: ICON_AMMO.Arrows,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22bd'
    },
    {
        name: ICON_AMMO.CameraFilm,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22be'
    },
    {
        name: ICON_AMMO.BallisticAmmo,
        category: ICON_CATEGORIES.Ammo,
        charCode: '0x22bf'
    },
    {
        name: ICON_AID.Lunchbox,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c0'
    },
    {
        name: ICON_AID.Scout,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c1'
    },
    {
        name: ICON_AID.TreasureHuntChest,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c2'
    },
    {
        name: ICON_AID.HolidayGift,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c3'
    },
    {
        name: ICON_AID.Stimpak,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c4'
    },
    {
        name: ICON_AID.Radaway,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c5'
    },
    {
        name: ICON_AID.Drugs,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c6'
    },
    {
        name: ICON_AID.Stealthboy,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c7'
    },
    {
        name: ICON_AID.BloodPack,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c8'
    },
    {
        name: ICON_AID.MutationSerum,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22c9'
    },
    {
        name: ICON_AID.FluxAid,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22ca'
    },
    {
        name: ICON_AID.Magazine,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22cb'
    },
    {
        name: ICON_AID.Bobblehead,
        category: ICON_CATEGORIES.Aid,
        charCode: '0x22cc'
    },
    {
        name: ICON_FOOD.Toxic,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22cd'
    },
    {
        name: ICON_FOOD.BottleOfWater,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22ce'
    },
    {
        name: ICON_FOOD.DirtyWater,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22cf'
    },
    {
        name: ICON_FOOD.NukaCola,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d0'
    },
    {
        name: ICON_FOOD.WeightIncreaser,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d1'
    },
    {
        name: ICON_FOOD.Beer,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d2'
    },
    {
        name: ICON_FOOD.Wine,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d3'
    },
    {
        name: ICON_FOOD.Whiskey,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d4'
    },
    {
        name: ICON_FOOD.FermentedAlcohol,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d5'
    },
    {
        name: ICON_FOOD.Juice,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d6'
    },
    {
        name: ICON_FOOD.Tea,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d7'
    },
    {
        name: ICON_FOOD.Milk,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d8'
    },
    {
        name: ICON_FOOD.Salad,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22d9'
    },
    {
        name: ICON_FOOD.Soup,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22da'
    },
    {
        name: ICON_FOOD.CannedFood,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22db'
    },
    {
        name: ICON_FOOD.Bubblegum,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22dc'
    },
    {
        name: ICON_FOOD.Candy,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22dd'
    },
    {
        name: ICON_FOOD.Cake,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22de'
    },
    {
        name: ICON_FOOD.MeatSoup,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22df'
    },
    {
        name: ICON_FOOD.CookedMeat,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e0'
    },
    {
        name: ICON_FOOD.RawMeat,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e1'
    },
    {
        name: ICON_FOOD.Egg,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e2'
    },
    {
        name: ICON_FOOD.TickBlood,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e3'
    },
    {
        name: ICON_FOOD.Berry,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e4'
    },
    {
        name: ICON_FOOD.Carrot,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e5'
    },
    {
        name: ICON_FOOD.Flower,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e6'
    },
    {
        name: ICON_FOOD.Fruit,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e7'
    },
    {
        name: ICON_FOOD.Mushrooms,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e8'
    },
    {
        name: ICON_FOOD.Honey,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22e9'
    },
    {
        name: ICON_FOOD.Flavor,
        category: ICON_CATEGORIES.Food,
        charCode: '0x22ea'
    },
    {
        name: ICON_APPAREL.Glasses,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22eb'
    },
    {
        name: ICON_APPAREL.FedoraHat,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22ec'
    },
    {
        name: ICON_APPAREL.Cap,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22ed'
    },
    {
        name: ICON_APPAREL.Beret,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22ee'
    },
    {
        name: ICON_APPAREL.GasMask,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22ef'
    },
    {
        name: ICON_APPAREL.Helmet,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22f0'
    },
    {
        name: ICON_APPAREL.FasnachtMask,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22f1'
    },
    {
        name: ICON_APPAREL.CultistHood,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22f2'
    },
    {
        name: ICON_APPAREL.CarnivalCostume,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22f3'
    },
    {
        name: ICON_APPAREL.Jumpsuit,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22f4'
    },
    {
        name: ICON_APPAREL.Dress,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22f5'
    },
    {
        name: ICON_APPAREL.Suit,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22f6'
    },
    {
        name: ICON_APPAREL.Apparel,
        category: ICON_CATEGORIES.Apparel,
        charCode: '0x22f7'
    },
    {
        name: ICON_ARMOR.PowerArmorHelmet,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x22f8'
    },
    {
        name: ICON_ARMOR.Excavator,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x22f9'
    },
    {
        name: ICON_ARMOR.TFortyFive,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x22fa'
    },
    {
        name: ICON_ARMOR.TFiftyOne,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x22fb'
    },
    {
        name: ICON_ARMOR.TSixty,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x22fc'
    },
    {
        name: ICON_ARMOR.TSixtyFive,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x22fd'
    },
    {
        name: ICON_ARMOR.XOne,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x22fe'
    },
    {
        name: ICON_ARMOR.Underarmor,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x22ff'
    },
    {
        name: ICON_ARMOR.Spacesuit,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x2300'
    },
    {
        name: ICON_ARMOR.ChestArmor,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x2301'
    },
    {
        name: ICON_ARMOR.ArmorRightArm,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x2302'
    },
    {
        name: ICON_ARMOR.ArmorLeftArm,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x2303'
    },
    {
        name: ICON_ARMOR.ArmorRightLeg,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x2304'
    },
    {
        name: ICON_ARMOR.ArmorLeftLeg,
        category: ICON_CATEGORIES.Armor,
        charCode: '0x2305'
    },
    {
        name: ICON_WEAPONS.UniqueWeapon,
        category: ICON_CATEGORIES.Weapons,
        charCode: '0x2306'
    },
    {
        name: ICON_WEAPONS.Binoculars,
        category: ICON_CATEGORIES.Weapons,
        charCode: '0x2307'
    },
    {
        name: ICON_WEAPONS.Camera,
        category: ICON_CATEGORIES.Weapons,
        charCode: '0x2308'
    },
    {
        name: ICON_WEAPONS.AssaultronHead,
        category: ICON_CATEGORIES.Weapons,
        charCode: '0x2309'
    },
    {
        name: ICON_WEAPONS.Syringer,
        category: ICON_CATEGORIES.Weapons,
        charCode: '0x230a'
    },
    {
        name: ICON_WEAPONS.Bow,
        category: ICON_CATEGORIES.Weapons,
        charCode: '0x230b'
    },
    {
        name: ICON_WEAPONS.CompoundBow,
        category: ICON_CATEGORIES.Weapons,
        charCode: '0x230c'
    },
    {
        name: ICON_WEAPONS.Weapon,
        category: ICON_CATEGORIES.Weapons,
        charCode: '0x230d'
    },
    {
        name: ICON_MELEE_WEAPONS.PowerFist,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x230e'
    },
    {
        name: ICON_MELEE_WEAPONS.Unarmed,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x230f'
    },
    {
        name: ICON_MELEE_WEAPONS.Chainsaw,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2310'
    },
    {
        name: ICON_MELEE_WEAPONS.Shishkebab,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2311'
    },
    {
        name: ICON_MELEE_WEAPONS.Ripper,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2312'
    },
    {
        name: ICON_MELEE_WEAPONS.Knife,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2313'
    },
    {
        name: ICON_MELEE_WEAPONS.Machete,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2314'
    },
    {
        name: ICON_MELEE_WEAPONS.OneHandedAxe,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2315'
    },
    {
        name: ICON_MELEE_WEAPONS.OneHandedBat,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2316'
    },
    {
        name: ICON_MELEE_WEAPONS.OneHandedMelee,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2317'
    },
    {
        name: ICON_MELEE_WEAPONS.SuperSledge,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2318'
    },
    {
        name: ICON_MELEE_WEAPONS.TwoHandedBat,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x2319'
    },
    {
        name: ICON_MELEE_WEAPONS.TwoHandedAxe,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x231a'
    },
    {
        name: ICON_MELEE_WEAPONS.TwoHandedSword,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x231b'
    },
    {
        name: ICON_MELEE_WEAPONS.TwoHandedMelee,
        category: ICON_CATEGORIES.MeleeWeapons,
        charCode: '0x231c'
    },
    {
        name: ICON_HEAVY_WEAPONS.Flamer,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x231d'
    },
    {
        name: ICON_HEAVY_WEAPONS.Cryolator,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x231e'
    },
    {
        name: ICON_HEAVY_WEAPONS.MachineGun,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x231f'
    },
    {
        name: ICON_HEAVY_WEAPONS.LightMachineGun,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2320'
    },
    {
        name: ICON_HEAVY_WEAPONS.GatlingLaser,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2321'
    },
    {
        name: ICON_HEAVY_WEAPONS.GatlingPlasma,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2322'
    },
    {
        name: ICON_HEAVY_WEAPONS.GatlingGun,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2323'
    },
    {
        name: ICON_HEAVY_WEAPONS.PlasmaCaster,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2324'
    },
    {
        name: ICON_HEAVY_WEAPONS.Minigun,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2325'
    },
    {
        name: ICON_HEAVY_WEAPONS.Broadsider,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2326'
    },
    {
        name: ICON_HEAVY_WEAPONS.MissileLauncher,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2327'
    },
    {
        name: ICON_HEAVY_WEAPONS.HellstormMissileLauncher,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2328'
    },
    {
        name: ICON_HEAVY_WEAPONS.GrenadeLauncher,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x2329'
    },
    {
        name: ICON_HEAVY_WEAPONS.AutoGrenadeLauncher,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x232a'
    },
    {
        name: ICON_HEAVY_WEAPONS.Fatman,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x232b'
    },
    {
        name: ICON_HEAVY_WEAPONS.HarpoonGun,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x232c'
    },
    {
        name: ICON_HEAVY_WEAPONS.JunkJet,
        category: ICON_CATEGORIES.HeavyWeapons,
        charCode: '0x232d'
    },
    {
        name: ICON_RIFLES.Fixer,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x232e'
    },
    {
        name: ICON_RIFLES.HandmadeRifle,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x232f'
    },
    {
        name: ICON_RIFLES.RailwayRifle,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x2330'
    },
    {
        name: ICON_RIFLES.TeslaRifle,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x2331'
    },
    {
        name: ICON_RIFLES.AlienDisintegrator,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x2332'
    },
    {
        name: ICON_RIFLES.GaussRifle,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x2333'
    },
    {
        name: ICON_RIFLES.PlasmaRifle,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x2334'
    },
    {
        name: ICON_RIFLES.LaserRifle,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x2335'
    },
    {
        name: ICON_RIFLES.PipeRifle,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x2336'
    },
    {
        name: ICON_RIFLES.LaserMusket,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x2337'
    },
    {
        name: ICON_RIFLES.Rifle,
        category: ICON_CATEGORIES.Rifles,
        charCode: '0x2338'
    },
    {
        name: ICON_SHOTGUNS.Shotgun,
        category: ICON_CATEGORIES.Shotguns,
        charCode: '0x2339'
    },
    {
        name: ICON_PISTOLS.GaussPistol,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x233a'
    },
    {
        name: ICON_PISTOLS.AlienBluster,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x233b'
    },
    {
        name: ICON_PISTOLS.GammaGun,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x233c'
    },
    {
        name: ICON_PISTOLS.PlasmaPistol,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x233d'
    },
    {
        name: ICON_PISTOLS.LaserPistol,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x233e'
    },
    {
        name: ICON_PISTOLS.Revolver,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x233f'
    },
    {
        name: ICON_PISTOLS.PipeRevolver,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x2340'
    },
    {
        name: ICON_PISTOLS.PipePistol,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x2341'
    },
    {
        name: ICON_PISTOLS.FlareGun,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x2342'
    },
    {
        name: ICON_PISTOLS.CrusaderPistol,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x2343'
    },
    {
        name: ICON_PISTOLS.ThirstZapper,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x2344'
    },
    {
        name: ICON_PISTOLS.BlackPowderPistol,
        category: ICON_CATEGORIES.Pistols,
        charCode: '0x2345'
    }
] as const satisfies Icon[];
