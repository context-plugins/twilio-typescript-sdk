import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carouselCardSchema, type CarouselCard } from "./carousel-card.js";

export type TwilioCarousel = {
  body: string;
  cards: CarouselCard[];
};

export const twilioCarouselSchema: Schema<TwilioCarousel> = s.object<TwilioCarousel>({
  body: s.string(),
  cards: s.array(s.lazy(() => carouselCardSchema)),
});
