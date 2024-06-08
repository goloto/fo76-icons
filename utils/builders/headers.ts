import { ICONS_DIRECTORY, getCharFromHexadecimal, readInfoFile } from "../common";
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

export const buildHeaders = async () => {
  const info = await readInfoFile();
  const result = Object.entries(info).reduce((accumulator: string, [key, item]) => {
    const {header, include} = item;
    const ruleWithHeader = RULE_TEMPLATE.replace('$', getCharFromHexadecimal(header));
    const concatenatedInclude = concatenateInclude(include);
    const ruleWithInclude = ruleWithHeader.replace('%', concatenatedInclude);

    return `${accumulator}\r\n\r\n${ruleWithInclude}`;
  }, `${FILE_HEADER}`) as string;

  await Bun.write('./headers/rules.txt', createUtf8BomString(result));
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

await buildHeaders();