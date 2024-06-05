import type { IconInfo } from "./types";

export const isIconInfo = (input: any): input is IconInfo[] => Array.isArray(input);