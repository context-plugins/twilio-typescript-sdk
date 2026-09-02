import { s, type Schema } from "../core/index.js";
import { carouselCardSchema, type CarouselCard } from "./carousel-card.js";

export type TwilioCarousel = {
  body: string;
  cards: CarouselCard[];
};

export const twilioCarouselSchema: Schema<TwilioCarousel> = s.object<TwilioCarousel>({
  body: s.string(),
  cards: s.array(s.lazy(() => carouselCardSchema)),
});
