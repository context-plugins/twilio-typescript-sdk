import { s, type EnumSchema } from "../core/index.js";

export const CarouselActionType = {
  Url: "URL",
  PhoneNumber: "PHONE_NUMBER",
  QuickReply: "QUICK_REPLY",
} as const;
export type CarouselActionType = (typeof CarouselActionType)[keyof typeof CarouselActionType] | (string & {});

export const carouselActionTypeSchema: EnumSchema<CarouselActionType> =
  s.enumOf<CarouselActionType>(CarouselActionType);
