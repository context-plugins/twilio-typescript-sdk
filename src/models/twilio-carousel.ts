import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carouselCardSchema, type CarouselCard } from "./carousel-card.js";

/**
 * twilio/carousel templates allow you to send a single text message accompanied by a set of up to
 * 10 carousel cards in a horizontally scrollable view
 */
export type TwilioCarousel = {
  body: string;
  cards: CarouselCard[];
};

export const twilioCarouselSchema: Schema<TwilioCarousel> = s.object<TwilioCarousel>({
  body: s.string(),
  cards: s.array(s.lazy(() => carouselCardSchema)),
});
