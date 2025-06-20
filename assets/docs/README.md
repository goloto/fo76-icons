# Goloto's Icons

## About this mod
This mod is an alternative to [IconSortingTags](http://www.nexusmods.com/fallout76/mods/146), but with fewer icons.

My main goals are: different style, more simple and readable UI and few other improvements without loss of functionality.

## Installation
Installation is same as [IconSortingTags](http://www.nexusmods.com/fallout76/mods/146).

**WARNING!** You need to follow steps 4-11 after each game update.

1. Install latest version of [xTranslator](http://www.nexusmods.com/starfield/mods/313)
2. Open xTranslator and choose Fallout 76
3. Open `Options` -> `Dictionary and languages` window. Set `Source language`, `Destination language` parameters to your current game language and `./data` and `./strings/` parameters to `Data` folder in your current game directory. After setting those parameters xTranslator should not display any errors in this window.
4. Select SeventySix.esm in `File` -> `Load Esp/Esm`
5. Extract mod files in `Data/Interface` folder in your current game directory
6. Open `Wizards` -> `HeaderProcessor Wizrd` window
7. Click `Create ba2 backup` for creating backup files
8. Make sure, that game path and language on step 1 and 2 are correct
9. Click `Load Rules` on step 3 and chose file `HeaderRules.txt` from mod files
10. Click `Run Processor` on step 6 and wait until it's complete
11. Click `Patch game files` on step 7 and wait until it's complete

## Troubleshooting

- If there are `LOOKUP FAILED` messages in the game, you need to re-install mod
- If there are squares instead of icons, most likely you forgot to complete step 11

## Key features
- icons for new events and items, including Big Bloom, fishing, legendary mods, canned cooked food, mystery boxes and other
- icons for item sources (events, vendors, raids etc.)
- icons for rare items
- strict sorting for plans and items, the newest and rarest items are displayed first
- removed all armor/weapon suffixes/prefixes for non-legendary modifications
- cyrillized fonts for RU version

## Credits
Most of the icons are generated with [flux.1-dev](http://huggingface.co/black-forest-labs/FLUX.1-dev) and then mannually modified by myself.

All of fonts, icons and source code are available at [GitHub](http://github.com/goloto/fo76-icon-tags) by MIT and OFL licenses.

Thanks to [mcguffin](http://next.nexusmods.com/profile/mcguffin) and his [xTranslator](http://www.nexusmods.com/starfield/mods/313), without which I would not have been able to make this mod.

Thanks to [BiggerDigger](http://next.nexusmods.com/profile/BiggerDigger) and his [Cyrillized Font Library](http://www.nexusmods.com/fallout76/mods/362), which mod I take for russian version of this mod.

Thanks to my wife for most ambitious and interesting icon ideas. 