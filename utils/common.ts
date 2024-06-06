import type { IconInfo } from "./types";

export const isIconInfoArray = (input: any): input is IconInfo[] => Array.isArray(input);