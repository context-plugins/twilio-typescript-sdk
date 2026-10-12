import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Category of this WhatsApp Template. One of `ACCOUNT_UPDATE`, `ALERT_UPDATE`,
 * `APPOINTMENT_UPDATE`, `AUTO_REPLY`, `ISSUE_RESOLUTION`, `PAYMENT_UPDATE`,
 * `PERSONAL_FINANCE_UPDATE`, `RESERVATION_UPDATE`, `SHIPPING_UPDATE`, `TICKET_UPDATE`,
 * `TRANSPORTATION_UPDATE`, `MARKETING`, `AUTHENTICATION`, `UTILITY`, `OTP` or `TRANSACTIONAL`.
 */
export const WhatsappTemplateEnumCategory = {
  AccountUpdate: "ACCOUNT_UPDATE",
  AlertUpdate: "ALERT_UPDATE",
  AutoReply: "AUTO_REPLY",
  AppointmentUpdate: "APPOINTMENT_UPDATE",
  IssueResolution: "ISSUE_RESOLUTION",
  PaymentUpdate: "PAYMENT_UPDATE",
  PersonalFinanceUpdate: "PERSONAL_FINANCE_UPDATE",
  ReservationUpdate: "RESERVATION_UPDATE",
  ShippingUpdate: "SHIPPING_UPDATE",
  TicketUpdate: "TICKET_UPDATE",
  TransportationUpdate: "TRANSPORTATION_UPDATE",
  Marketing: "MARKETING",
  Otp: "OTP",
  Transactional: "TRANSACTIONAL",
  Authentication: "AUTHENTICATION",
  Utility: "UTILITY",
} as const;
export type WhatsappTemplateEnumCategory =
  | (typeof WhatsappTemplateEnumCategory)[keyof typeof WhatsappTemplateEnumCategory]
  | (string & {});

export const whatsappTemplateEnumCategorySchema: EnumSchema<WhatsappTemplateEnumCategory> =
  s.enumOf<WhatsappTemplateEnumCategory>(WhatsappTemplateEnumCategory);
