import type { IconInfo } from "./types";

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
  regex=
  %
[EndRule]`;

const generate = async () => {
  const file = Bun.file('./icons/weapons/rifles/info.json');
  const text = await file.text();
  const json = JSON.parse(text) as IconInfo[];

  const result = json.reduce((accumulator: string, item) => {
    const {header, include} = item;
    const ruleWithHeader = RULE_TEMPLATE.replace('$', replaceHeader(header));
    const concatenatedInclude = concatenateInclude(include);
    const ruleWithInclude = ruleWithHeader.replace('%', concatenatedInclude);

    return `${accumulator}\r\r${ruleWithInclude}`;
  }, `${FILE_HEADER}`) as string;

  await Bun.write('./headers/rules.txt', result);
}

const replaceHeader = (str?: string): string => {
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
    const newLine = index === 0 ? '' : '\r  '

    return `${accumulator}${newLine}Include_${index}=${includeItem}`;
  }, '');
}

await generate();