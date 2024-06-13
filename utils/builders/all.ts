import { buildCategoryOrder } from "./categories-order";
import { buildIconsOrder } from "./icons-order";
import { buildInfo } from "./info";
import { buildHeaders } from "./headers";
import { buildFontConfig } from "./font-config";
import { buildUnicodeMap } from "./unicode-map";

const buildAll = async () => {
  await buildCategoryOrder();
  await buildIconsOrder();
  await buildInfo();
  await buildHeaders();
  await buildFontConfig();
  await buildUnicodeMap();
}

await buildAll();