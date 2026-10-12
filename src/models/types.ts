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

/** Content types */
export type Types = {
  /** Type containing only plain text-based content */
  twilioText?: TwilioText | null;
  /**
   * twilio/media is used to send file attachments, or to send long text via MMS in the US and
   * Canada. As such, the twilio/media type must contain at least ONE of text or media content.
   */
  twilioMedia?: TwilioMedia | null;
  /**
   * twilio/location type contains a location pin and an optional label, which can be used to
   * enhance delivery notifications or connect recipients to physical experiences you offer.
   */
  twilioLocation?: TwilioLocation | null;
  /**
   * twilio/list-picker includes a menu of up to 10 options, which offers a simple way for users to
   * make a selection.
   */
  twilioListPicker?: TwilioListPicker | null;
  /**
   * twilio/call-to-action buttons let recipients tap to trigger actions such as launching a website
   * or making a phone call.
   */
  twilioCallToAction?: TwilioCallToAction | null;
  /**
   * twilio/quick-reply templates let recipients tap, rather than type, to respond to the message.
   */
  twilioQuickReply?: TwilioQuickReply | null;
  /**
   * twilio/card is a structured template which can be used to send a series of related information.
   * It must include a title and at least one additional field.
   */
  twilioCard?: TwilioCard | null;
  /**
   * twilio/catalog type lets recipients view list of catalog products, ask questions about
   * products, order products.
   */
  twilioCatalog?: TwilioCatalog | null;
  /**
   * twilio/carousel templates allow you to send a single text message accompanied by a set of up to
   * 10 carousel cards in a horizontally scrollable view
   */
  twilioCarousel?: TwilioCarousel | null;
  /**
   * twilio/flows templates allow you to send multiple messages in a set order with text or select
   * options
   */
  twilioFlows?: TwilioFlows | null;
  /**
   * twilio/schedule templates allow us to send a message with a schedule with different time slots
   */
  twilioSchedule?: TwilioSchedule | null;
  /**
   * whatsapp/card is a structured template which can be used to send a series of related
   * information. It must include a body and at least one additional field.
   */
  whatsappCard?: WhatsappCard | null;
  /**
   * whatsApp/authentication templates let companies deliver WA approved one-time-password button.
   */
  whatsappAuthentication?: WhatsappAuthentication | null;
  /**
   * whatsapp/flows templates allow you to send multiple messages in a set order with text or select
   * options
   */
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
