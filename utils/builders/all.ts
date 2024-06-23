import { buildCategoryOrder } from "./category-order";
import { buildIconRules } from "./icons-rules";
import { buildHeaders } from "./icons-headers";
import { buildFontConfig } from "./font-config";
import { buildUnicodeMap } from "./unicode-map";
import { readIcons } from "./read-icons";

const build = async () => {
  const categoryOrder = await buildCategoryOrder();
  const iconNames = await readIcons(categoryOrder);
  const iconRules = await buildIconRules(categoryOrder, iconNames);

  await buildHeaders(iconRules);
  await buildFontConfig(iconRules);
  await buildUnicodeMap(iconRules);
}

await build();