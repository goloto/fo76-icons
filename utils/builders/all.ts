import { buildCategoryOrder } from "./categories-order";
import { buildIconsOrder } from "./icons-order";
import { buildIconRules } from "./icons-rules";
import { buildHeaders } from "./headers";
import { buildFontConfig } from "./font-config";
import { buildUnicodeMap } from "./unicode-map";

const buildAll = async () => {
  await buildCategoryOrder();
  await buildIconsOrder();
  await buildIconRules();
  await buildHeaders();
  await buildFontConfig();
  await buildUnicodeMap();
}

await buildAll();