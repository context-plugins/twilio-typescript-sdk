import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { useCaseSchema, type UseCase } from "./use-case.js";

export type MessagingV2ChannelsSenderProfile = {
  name?: string | null;
  about?: string | null;
  address?: string | null;
  description?: string | null;
  logoUrl?: string | null;
  bannerUrl?: string | null;
  privacyUrl?: string | null;
  termsOfServiceUrl?: string | null;
  accentColor?: string | null;
  useCase?: UseCase | null;
  vertical?: string | null;
  websites?: Record<string, unknown>;
  emails?: Record<string, unknown>;
  phoneNumbers?: Record<string, unknown>;
};

export const messagingV2ChannelsSenderProfileSchema: Schema<MessagingV2ChannelsSenderProfile> =
  s.object<MessagingV2ChannelsSenderProfile>({
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
    websites: s.optional(s.record(s.string(), s.unknown())),
    emails: s.optional(s.record(s.string(), s.unknown())),
    phoneNumbers: s.optional(s.record(s.string(), s.unknown())),
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
