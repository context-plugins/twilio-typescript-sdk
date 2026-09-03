import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carouselActionSchema, type CarouselAction } from "./carousel-action.js";

export type CarouselCard = {
  title?: string;
  body: string;
  media: string;
  actions: CarouselAction[];
};

export const carouselCardSchema: Schema<CarouselCard> = s.object<CarouselCard>({
  title: s.optional(s.string()),
  body: s.string(),
  media: s.string(),
  actions: s.array(s.lazy(() => carouselActionSchema)),
});
