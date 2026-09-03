import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carouselActionTypeSchema, type CarouselActionType } from "./carousel-action-type.js";

export type CarouselAction = {
  type: CarouselActionType;
  title: string;
  url?: string;
  phone?: string;
  id?: string;
};

export const carouselActionSchema: Schema<CarouselAction> = s.object<CarouselAction>({
  type: carouselActionTypeSchema,
  title: s.string(),
  url: s.optional(s.string()),
  phone: s.optional(s.string()),
  id: s.optional(s.string()),
});
