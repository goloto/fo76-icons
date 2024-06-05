import type { IconInfo } from "../types";

const generate = async () => {
  const file = Bun.file('./icons/weapons/rifles/info.json');
  const text = await file.text();
  const json = JSON.parse(text) as IconInfo[];

  json.forEach(item => console.log(item?.header + ' ' + item?.name.replace('-', '_') +'\r'));
}

await generate();