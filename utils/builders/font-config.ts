import { readdir } from "node:fs/promises";
import { ICONS_DIRECTORY, getCharFromHexadecimal, isIconInfoArray, readInfoFile } from "../common";

const FONT_CONFIG_TEMPLATE = `fontlib "fonts_ru"
map "$76HandwrittenIlliterate" = "HandwrittenIlliterate" Normal
map "$76HandwrittenNeat_Font" = "76HandwrittenNeat" Normal
map "$BerlinDemi" = "Berlin Sans FB Demi Bold" Bold
map "$BRODY" = "Brody" Normal
map "$Brush_Script_Std" = "Brush Script Std Medium" Normal
map "$ChowderHead" = "Chowderhead" Normal
map "$ConsoleFont" = "Arial" Normal
map "$Controller_Buttons" = "Controller  Buttons" Normal
map "$Controller_Buttons_inverted" = "Controller  Buttons inverted" Normal
map "$DebugTextFont" = "Consolas" Normal
map "$DotMatrix_Font" = "Dot Matrix" Normal
map "$evaScript_Font" = "evaScript" Normal
map "$Futura_Bold" = "Futura-CondensedBold" Bold
map "$Guidestone" = "Guidestone.fcp Symbols" Normal
map "$HandwrittenFont" = "Handwritten_Institute" Normal
map "$KiddieCocktails" = "Kiddie Cocktails" Normal
map "$Leiascript_Font" = "LeiaScript" Normal
map "$MAIN_Font" = "Roboto Condensed" Normal
map "$MAIN_Font_Bold" = "Roboto Condensed Bold" Bold
map "$MAIN_Font_Light" = "Roboto Condensed Light" Normal
map "$NixieTube_Font" = "NixieTube" Normal
map "$Portico_Font_Regular" = "Portico Regular" Normal
map "$Slate_Mobile" = "Slate Mobile" Normal
map "$Terminal_Font" = "Share-TechMono Regular" Normal
map "$Typewriter_Font" = "VeteranTypewriterRedacted" Normal
validNameChars "\`1234567890-=~!@#$%^&*():_+QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./qwertyuiop{}\\asdfghjkl;'zxcvbnm?|ЎўЈ¤Ґ¦§Ё©Є«®Ї°Ііґ¶·ё№є»јЅѕїДАБВГЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэю я%custom-characters% "
validBookChars "\`1234567890-=~!@#$%^&*():_+QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./qwertyuiop{}\\asdfghjkl;'zxcvbnm<>?|ЎўЈ¤Ґ¦§Ё©Є«®Ї°Ііґ¶·ё№є»јЅѕїДАБВГЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэю я "`;

export const buildFontConfig = async () => {
  let characters = '';
  const files = await readdir(ICONS_DIRECTORY, {recursive: true});

  for (let fileName of files) {
    if (!fileName.includes('info.json')) {
      continue;
    }

    const info = await readInfoFile();

    if (!isIconInfoArray(info)) {
      continue;
    }

    characters += info.reduce((accumulator, info) => {
      return accumulator + getCharFromHexadecimal(info?.header)
    }, '');
  }

  await Bun.write('./headers/fontconfig_ru.txt', FONT_CONFIG_TEMPLATE.replace('%custom-characters%', characters));
}

await buildFontConfig();