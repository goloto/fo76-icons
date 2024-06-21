import { getCharFromHexadecimal } from "../common";
import { writeUtf8BomString } from "../file-writing";
import type { IconRule } from "../types";

const HEADER_ANCHOR = '%header%';
const INCLUDE_ANCHOR = '%include%';
const EXCLUDE_ANCHOR = '%exclude%';
const RIGHT_SIGNATURE_ANCHOR = '%right-signature%';
const LEFT_SIGNATURE_ANCHOR = '%left-signature%';
const IS_ANY_KEYWORD_ANCHOR = '%any-keyword%';
const IS_INCLUSIVE_OR_ANCHOR = '%inclusive-or%';
const IS_FULL_REPLACED = '%full-replaced%';
const FILE_HEADER = `#Do Not Edit
[version=3]
[StartHeader]
 Tag_0=default
 Template_0=defaultTemplate,*
[EndHeader]`;
const RULE_TEMPLATE = `[StartRule]
 Header=${HEADER_ANCHOR}
 rSig=${LEFT_SIGNATURE_ANCHOR}
 fSig=${RIGHT_SIGNATURE_ANCHOR}
 enabled=-1
 tagID=default
 noKW=0
 anyKW=${IS_ANY_KEYWORD_ANCHOR}
 hasCompo=0
 preProcess=0
 fullReplace=${IS_FULL_REPLACED}
 includeOR=${IS_INCLUSIVE_OR_ANCHOR}
 isFallBack=0
 fallbackBank=0
 ${INCLUDE_ANCHOR}
 ${EXCLUDE_ANCHOR}
[EndRule]`;

export const buildHeaders = async (iconRules: IconRule[]) => {
  const result = Object.values(iconRules)
    .filter((item) => !item.isDeleted)
    .reduce((accumulator: string, item) => {
      const {
        header, 
        rightSignature, 
        leftSignature, 
        isAnyKeyword,
        isInclusiveOr,
        isFullReplaced,
        include, 
        exclude
      } = item;
      const rules = RULE_TEMPLATE
        .replace(HEADER_ANCHOR, getCharFromHexadecimal(header))
        .replace(RIGHT_SIGNATURE_ANCHOR, rightSignature)
        .replace(LEFT_SIGNATURE_ANCHOR, leftSignature)
        .replace(IS_ANY_KEYWORD_ANCHOR, replaceBoolean(isAnyKeyword))
        .replace(IS_INCLUSIVE_OR_ANCHOR, replaceBoolean(isInclusiveOr))
        .replace(IS_FULL_REPLACED, replaceBoolean(isFullReplaced))
        .replace(INCLUDE_ANCHOR, concatenateInclude(include))
        .replace(EXCLUDE_ANCHOR, concatenateExclude(exclude));

      return `${accumulator}\r\n\r\n${rules}`;
    }, `${FILE_HEADER}`);

  await writeUtf8BomString('./headers/Header_Rules.txt', result);
}

const concatenateExclude = (array?: string[]) => {
  return concatenateRules('Exclude', array);
}

const concatenateInclude = (array?: string[]): string => {
  return concatenateRules('Include', array);
}

const concatenateRules = (rule: string, array?: string[]): string => {
  if (!array || !array.length) {
    return `${rule}_0=`;
  }

  return array.reduce((accumulator, includeItem, index) => {
    const newLine = index === 0 ? '' : '\r\n '

    return `${accumulator}${newLine}${rule}_${index}=${includeItem}`;
  }, '');
}

const replaceBoolean = (flag: boolean) => flag ? '-1': '0';
