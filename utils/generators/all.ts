import { generateFontConfig } from "./font-config";
import { generateHeaders } from "./headers";
import { generateInfo } from "./info";

const generateAll = async () => {
  await generateInfo();
  await generateHeaders();
  await generateFontConfig();
}

await generateAll();