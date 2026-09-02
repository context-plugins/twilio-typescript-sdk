import { s, type Schema } from "../core/index.js";
import { emailSchema, type Email } from "./email.js";
import { phoneNumberSchema, type PhoneNumber } from "./phone-number.js";
import { useCaseSchema, type UseCase } from "./use-case.js";
import { websiteSchema, type Website } from "./website.js";

export type MessagingV2ChannelsSenderProfileGenericResponse = {
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
  websites?: Website[] | null;
  emails?: Email[] | null;
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
