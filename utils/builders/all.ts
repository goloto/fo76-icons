import { buildDirectoriesOrder } from "./dirs-order";
import { buildFontConfig } from "./font-config";
import { buildHeaders } from "./headers";
import { buildInfo } from "./info";
import { buildUnicodeMap } from "./unicode-map";

const buildAll = async () => {
  await buildDirectoriesOrder();
  await buildInfo();
  await buildHeaders();
  await buildFontConfig();
  await buildUnicodeMap();
}

await buildAll();