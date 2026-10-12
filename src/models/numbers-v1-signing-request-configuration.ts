import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1SigningRequestConfiguration = {
  /**
   * The SID of the document that includes the logo that will appear in the LOA. To upload documents
   * follow the following guide:
   * https://www.twilio.com/docs/phone-numbers/regulatory/getting-started/create-new-bundle-public-rest-apis#supporting-document-create
   */
  logoSid?: string | null;
  /**
   * This is the string that you assigned as a friendly name for describing the creation of the
   * configuration.
   */
  friendlyName?: string | null;
  /** The product or service for which is requesting the signature. */
  product?: string | null;
  /** The country ISO code to apply the configuration. */
  country?: string | null;
  /**
   * Subject of the email that the end client will receive ex: “Twilio Hosting Request”, maximum
   * length of 255 characters.
   */
  emailSubject?: string | null;
  /**
   * Content of the email that the end client will receive ex: “This is a Hosting request from
   * Twilio, please check the document and sign it”, maximum length of 5,000 characters.
   */
  emailMessage?: string | null;
  /** Url the end client will be redirected after signing a document. */
  urlRedirection?: string | null;
  url?: string | null;
};

export const numbersV1SigningRequestConfigurationSchema: Schema<NumbersV1SigningRequestConfiguration> =
  s.object<NumbersV1SigningRequestConfiguration>({
    logoSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    product: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    emailSubject: s.optionalNullable(s.string()),
    emailMessage: s.optionalNullable(s.string()),
    urlRedirection: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      logoSid: "logo_sid",
      friendlyName: "friendly_name",
      emailSubject: "email_subject",
      emailMessage: "email_message",
      urlRedirection: "url_redirection",
    },
  });
