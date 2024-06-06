import { buildFontConfig } from "./font-config";
import { buildHeaders } from "./headers";
import { buildInfo } from "./info";

const buildAll = async () => {
  await buildInfo();
  await buildHeaders();
  await buildFontConfig();
}

await buildAll();