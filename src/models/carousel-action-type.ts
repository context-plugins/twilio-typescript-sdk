import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CarouselActionType = {
  Url: "URL",
  PhoneNumber: "PHONE_NUMBER",
  QuickReply: "QUICK_REPLY",
} as const;
export type CarouselActionType = (typeof CarouselActionType)[keyof typeof CarouselActionType] | (string & {});

export const carouselActionTypeSchema: EnumSchema<CarouselActionType> =
  s.enumOf<CarouselActionType>(CarouselActionType);
