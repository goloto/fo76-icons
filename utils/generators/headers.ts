import type { IconInfo } from "../types";

const FILE_HEADER = `#Do Not Edit
[version=3]
[StartHeader]
 Tag_0=default
 Template_0=defaultTemplate,*
[EndHeader]`;
const RULE_TEMPLATE = `[StartRule]
 Header=$
 rSig=WEAP
 fSig=FULL
 enabled=-1
 tagID=default
 noKW=0
 anyKW=0
 hasCompo=0
 preProcess=0
 fullReplace=0
 includeOR=0
 isFallBack=0
 fallbackBank=0
 %
[EndRule]`;

export const generateHeaders = async () => {
  const file = Bun.file('./icons/weapons/rifles/info.json');
  const text = await file.text();
  const json = JSON.parse(text) as IconInfo[];

  const result = json.reduce((accumulator: string, item) => {
    const {header, include} = item;
    const ruleWithHeader = RULE_TEMPLATE.replace('$', formatHeader(header));
    const concatenatedInclude = concatenateInclude(include);
    const ruleWithInclude = ruleWithHeader.replace('%', concatenatedInclude);

    return `${accumulator}\r\n\r\n${ruleWithInclude}`;
  }, `${FILE_HEADER}`) as string;

  await Bun.write('./headers/rules.txt', createUtf8BomString(result));
}

const formatHeader = (str?: string): string => {
  if (!str) {
    return '';
  }

  return String.fromCharCode(Number.parseInt(str, 16));
}

const concatenateInclude = (array?: string[]): string => {
  if (!array) {
    return '';
  }

  return array.reduce((accumulator, includeItem, index) => {
    const newLine = index === 0 ? '' : '\r\n '

    return `${accumulator}${newLine}Include_${index}=${includeItem}`;
  }, '');
}

const createUtf8BomString = (str: string): Blob => {
  return new Blob([
    new Uint8Array([0xEF, 0xBB, 0xBF]),
    str
  ], { type: "text/plain;charset=utf-8" });
}

await generateHeaders();