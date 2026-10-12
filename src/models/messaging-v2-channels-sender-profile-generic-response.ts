import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { emailSchema, type Email } from "./email.js";
import { phoneNumberSchema, type PhoneNumber } from "./phone-number.js";
import { useCaseSchema, type UseCase } from "./use-case.js";
import { websiteSchema, type Website } from "./website.js";

/** The profile information for the sender. */
export type MessagingV2ChannelsSenderProfileGenericResponse = {
  /** The name of the sender. */
  name?: string | null;
  /** The profile about text for the sender. */
  about?: string | null;
  /** The address of the sender. */
  address?: string | null;
  /** The description of the sender. */
  description?: string | null;
  /** The logo URL of the sender. */
  logoUrl?: string | null;
  /** The banner URL of the sender. */
  bannerUrl?: string | null;
  /**
   * The privacy URL of the sender. Must be a publicly accessible HTTP or HTTPS URI associated with
   * the sender.
   */
  privacyUrl?: string | null;
  /** The terms of service URL of the sender. */
  termsOfServiceUrl?: string | null;
  /**
   * The color theme of the sender. Must be in hex format and have at least a 4:5:1 contrast ratio
   * against white.
   */
  accentColor?: string | null;
  /**
   * The messaging use case type for the RCS sender. Allowed values are `PROMOTIONAL`,
   * `TRANSACTIONAL`, `OTP`, `MULTI_USE`. Defaults to `MULTI_USE` if not provided. Cannot be
   * modified after launch.
   */
  useCase?: UseCase | null;
  /**
   * The vertical of the sender. Allowed values are:
   * - `Alcohol`
   * - `Automotive`
   * - `Beauty, Spa and Salon`
   * - `Clothing and Apparel`
   * - `Education`
   * - `Entertainment`
   * - `Event Planning and Service`
   * - `Finance and Banking`
   * - `Food and Grocery`
   * - `Hotel and Lodging`
   * - `Matrimony Service`
   * - `Medical and Health`
   * - `Non-profit`
   * - `Online Gambling`
   * - `OTC Drugs`
   * - `Other`
   * - `Physical Gambling`
   * - `Professional Services`
   * - `Public Service`
   * - `Restaurant`
   * - `Shopping and Retail`
   * - `Travel and Transportation`
   */
  vertical?: string | null;
  /** The websites of the sender. */
  websites?: Website[] | null;
  /** The emails of the sender. */
  emails?: Email[] | null;
  /** The phone numbers of the sender. */
  phoneNumbers?: PhoneNumber[] | null;
};

export const messagingV2ChannelsSenderProfileGenericResponseSchema: Schema<MessagingV2ChannelsSenderProfileGenericResponse> =
  s.object<MessagingV2ChannelsSenderProfileGenericResponse>({
    name: s.optionalNullable(s.string()),
    about: s.optionalNullable(s.string()),
    address: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    logoUrl: s.optionalNullable(s.string()),
    bannerUrl: s.optionalNullable(s.string()),
    privacyUrl: s.optionalNullable(s.string()),
    termsOfServiceUrl: s.optionalNullable(s.string()),
    accentColor: s.optionalNullable(s.string()),
    useCase: s.optionalNullable(s.lazy(() => useCaseSchema)),
    vertical: s.optionalNullable(s.string()),
    websites: s.optionalNullable(s.array(s.lazy(() => websiteSchema))),
    emails: s.optionalNullable(s.array(s.lazy(() => emailSchema))),
    phoneNumbers: s.optionalNullable(s.array(s.lazy(() => phoneNumberSchema))),
    _keysMap: {
      logoUrl: "logo_url",
      bannerUrl: "banner_url",
      privacyUrl: "privacy_url",
      termsOfServiceUrl: "terms_of_service_url",
      accentColor: "accent_color",
      useCase: "use_case",
      phoneNumbers: "phone_numbers",
    },
  });
