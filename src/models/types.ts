import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { twilioCallToActionSchema, type TwilioCallToAction } from "./twilio-call-to-action.js";
import { twilioCardSchema, type TwilioCard } from "./twilio-card.js";
import { twilioCarouselSchema, type TwilioCarousel } from "./twilio-carousel.js";
import { twilioCatalogSchema, type TwilioCatalog } from "./twilio-catalog.js";
import { twilioFlowsSchema, type TwilioFlows } from "./twilio-flows.js";
import { twilioListPickerSchema, type TwilioListPicker } from "./twilio-list-picker.js";
import { twilioLocationSchema, type TwilioLocation } from "./twilio-location.js";
import { twilioMediaSchema, type TwilioMedia } from "./twilio-media.js";
import { twilioQuickReplySchema, type TwilioQuickReply } from "./twilio-quick-reply.js";
import { twilioScheduleSchema, type TwilioSchedule } from "./twilio-schedule.js";
import { twilioTextSchema, type TwilioText } from "./twilio-text.js";
import { whatsappAuthenticationSchema, type WhatsappAuthentication } from "./whatsapp-authentication.js";
import { whatsappCardSchema, type WhatsappCard } from "./whatsapp-card.js";
import { whatsappFlowsSchema, type WhatsappFlows } from "./whatsapp-flows.js";

export type Types = {
  twilioText?: TwilioText | null;
  twilioMedia?: TwilioMedia | null;
  twilioLocation?: TwilioLocation | null;
  twilioListPicker?: TwilioListPicker | null;
  twilioCallToAction?: TwilioCallToAction | null;
  twilioQuickReply?: TwilioQuickReply | null;
  twilioCard?: TwilioCard | null;
  twilioCatalog?: TwilioCatalog | null;
  twilioCarousel?: TwilioCarousel | null;
  twilioFlows?: TwilioFlows | null;
  twilioSchedule?: TwilioSchedule | null;
  whatsappCard?: WhatsappCard | null;
  whatsappAuthentication?: WhatsappAuthentication | null;
  whatsappFlows?: WhatsappFlows | null;
};

export const typesSchema: Schema<Types> = s.object<Types>({
  twilioText: s.optionalNullable(s.lazy(() => twilioTextSchema)),
  twilioMedia: s.optionalNullable(s.lazy(() => twilioMediaSchema)),
  twilioLocation: s.optionalNullable(s.lazy(() => twilioLocationSchema)),
  twilioListPicker: s.optionalNullable(s.lazy(() => twilioListPickerSchema)),
  twilioCallToAction: s.optionalNullable(s.lazy(() => twilioCallToActionSchema)),
  twilioQuickReply: s.optionalNullable(s.lazy(() => twilioQuickReplySchema)),
  twilioCard: s.optionalNullable(s.lazy(() => twilioCardSchema)),
  twilioCatalog: s.optionalNullable(s.lazy(() => twilioCatalogSchema)),
  twilioCarousel: s.optionalNullable(s.lazy(() => twilioCarouselSchema)),
  twilioFlows: s.optionalNullable(s.lazy(() => twilioFlowsSchema)),
  twilioSchedule: s.optionalNullable(s.lazy(() => twilioScheduleSchema)),
  whatsappCard: s.optionalNullable(s.lazy(() => whatsappCardSchema)),
  whatsappAuthentication: s.optionalNullable(s.lazy(() => whatsappAuthenticationSchema)),
  whatsappFlows: s.optionalNullable(s.lazy(() => whatsappFlowsSchema)),
  _keysMap: {
    twilioText: "twilio/text",
    twilioMedia: "twilio/media",
    twilioLocation: "twilio/location",
    twilioListPicker: "twilio/list-picker",
    twilioCallToAction: "twilio/call-to-action",
    twilioQuickReply: "twilio/quick-reply",
    twilioCard: "twilio/card",
    twilioCatalog: "twilio/catalog",
    twilioCarousel: "twilio/carousel",
    twilioFlows: "twilio/flows",
    twilioSchedule: "twilio/schedule",
    whatsappCard: "whatsapp/card",
    whatsappAuthentication: "whatsapp/authentication",
    whatsappFlows: "whatsapp/flows",
  },
});
