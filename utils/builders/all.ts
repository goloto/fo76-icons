import { buildCategoryOrder } from "./categories-order";
import { buildIconsOrder } from "./icons-order";
import { buildIconRules } from "./icons-rules";
import { buildHeaders } from "./icons-headers";
import { buildFontConfig } from "./font-config";
import { buildUnicodeMap } from "./unicode-map";

const build = async () => {
  const categoryOrder = await buildCategoryOrder();
  const iconsOrder = await buildIconsOrder(categoryOrder);
  const iconRules = await buildIconRules(iconsOrder);

  await buildHeaders(iconRules);
  await buildFontConfig(iconRules);
  await buildUnicodeMap(iconRules);
}

await build();