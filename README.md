# fo76-icons

This is toolkit and source code of the [Goloto's Icons](https://www.nexusmods.com/fallout76/mods/3487) mod for Fallout 76.

## Installation

1. Install `bun` with this [guide](https://bun.sh/)
2. Run `bun install` in root project folder

For some scripts to work, you need to create a `.env` file and fill it in using example of `.env.sample`, specifying path to Fontlab and Fallout 76 directories in it.

## Structure

- `assets` - icons, draft icons, images, docs and other
- `input` - source game files and template for overview page
- `output` - final game files, font, unicode-map and overview page
- `src` - source code for toolkit

## Scripts

- `build-all` - starts update process and generation of all icon rules and configurations
- `reset-fonts-swf` - updates `fonts_*.swf` files by copying them from `/input` directory to `/output`
- `reset-interface` - erases all files in `Interface` game folder
- `update-fontlab` - replaces `standard.nam` file in the Fontlab directory with a similar file from `/output' directory

## Script `build-all`

1. Sorts categories
2. Sorts icon rules
3. Generates categories
4. Generates icons
5. Generates a header file
6. Generates a font configuration file
7. Generates a unicode map
8. Generates an overview page

## Other

### Automatic sorting

The icons are sorted according to the following rules:

- groups are sorted according to `src\constants\categories-order.ts`
- the order of icons repeats the order of their use in the group rules
- first, all icons are sorted in the first position of the prefix, then in the second, etc.
- all repeated icon encounters are ignored
- all non-main group icons are ignored (the main icons for each group are defined here: `src\constants\index.ts`)

### Icons margin

Icons for events, years, quarters, rarity, and high cost have an indentation of 100 on the left side. It is necessary for a better perception of these icons, because they always follow another icon.
