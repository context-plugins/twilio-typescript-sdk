import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1DomainConfig = {
  /** The unique string that we created to identify the Domain resource. */
  domainSid?: string | null;
  /** The unique string that we created to identify the Domain config (prefix ZK). */
  configSid?: string | null;
  /**
   * Any requests we receive to this domain that do not match an existing shortened message will be
   * redirected to the fallback url. These will likely be either expired messages, random
   * misdirected traffic, or intentional scraping.
   */
  fallbackUrl?: string | null;
  /**
   * URL to receive click events to your webhook whenever the recipients click on the shortened
   * links.
   */
  callbackUrl?: string | null;
  /**
   * Boolean field to set customer delivery preference when there is a failure in linkShortening
   * service
   */
  continueOnFailure?: boolean | null;
  /** Date this Domain Config was created. */
  dateCreated?: Date | null;
  /** Date that this Domain Config was last updated. */
  dateUpdated?: Date | null;
  url?: string | null;
  /**
   * Customer's choice to send links with/without "https://" attached to shortened url. If true,
   * messages will not be sent with https:// at the beginning of the url. If false, messages will be
   * sent with https:// at the beginning of the url. False is the default behavior if it is not
   * specified.
   */
  disableHttps?: boolean | null;
};

export const messagingV1DomainConfigSchema: Schema<MessagingV1DomainConfig> =
  s.object<MessagingV1DomainConfig>({
    domainSid: s.optionalNullable(s.string()),
    configSid: s.optionalNullable(s.string()),
    fallbackUrl: s.optionalNullable(s.string()),
    callbackUrl: s.optionalNullable(s.string()),
    continueOnFailure: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    disableHttps: s.optionalNullable(s.boolean()),
    _keysMap: {
      domainSid: "domain_sid",
      configSid: "config_sid",
      fallbackUrl: "fallback_url",
      callbackUrl: "callback_url",
      continueOnFailure: "continue_on_failure",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      disableHttps: "disable_https",
    },
  });
