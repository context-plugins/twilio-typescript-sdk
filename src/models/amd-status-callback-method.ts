import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use when calling the `amd_status_callback` URL. Can be: `GET` or `POST`
 * and the default is `POST`., The HTTP method we use to call `fallback_url`. Can be: `GET` or
 * `POST`., The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`., The HTTP
 * method we use to call `inbound_request_url`. Can be `GET` or `POST`., The HTTP method we should
 * use to call `inbound_request_url`. Can be `GET` or `POST` and the default is `POST`., The method
 * to be used when calling the webhook's URL., The HTTP method that should be used to request the
 * SmsFallbackUrl. Must be either `GET` or `POST`. This will be copied onto the IncomingPhoneNumber
 * resource., The HTTP method that should be used to request the SmsUrl. Must be either `GET` or
 * `POST`. This will be copied onto the IncomingPhoneNumber resource., Optional. The Status Callback
 * Method attached to the IncomingPhoneNumber resource., The HTTP method that should be used to
 * request the SmsFallbackUrl. Must be either `GET` or `POST`. This will be copied onto the
 * IncomingPhoneNumber resource., The HTTP method that should be used to request the SmsUrl. Must be
 * either `GET` or `POST`. This will be copied onto the IncomingPhoneNumber resource., Optional. The
 * Status Callback Method attached to the IncomingPhoneNumber resource., The HTTP method used to
 * call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`., The HTTP method we should
 * use to call `status_callback`. Can be `POST` or `GET` and defaults to `POST`., The HTTP method
 * Twilio uses to call `status_callback`. Can be `POST` or `GET` and defaults to `POST`., The HTTP
 * method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is
 * `POST`., The HTTP method Twilio should use to call `status_callback`. Can be `POST` or `GET`.,
 * The HTTP method to be used when sending a webhook request., The HTTP method to be used when
 * sending a webhook request., The HTTP method to be used when sending a webhook request. One of
 * `GET` or `POST`., HTTP method used to invoke the webhook URL., The HTTP method we should use to
 * call `conference_recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`., The
 * HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST` and
 * defaults to `POST`., The HTTP method we should use when we call `recording_status_callback`. Can
 * be: `GET` or `POST` and defaults to `POST`., The HTTP method we should use to call
 * `status_callback`. Can be: `POST` or `GET` and the default is `POST`., The HTTP method we should
 * use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static
 * audio file, this should be `GET` so that we can cache the file., The Webhook Method of Global
 * Webhook Configuration. One of `POST` or `GET`., HTTP method provided for status callback URL.
 */
export const AmdStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type AmdStatusCallbackMethod =
  | (typeof AmdStatusCallbackMethod)[keyof typeof AmdStatusCallbackMethod]
  | (string & {});

export const amdStatusCallbackMethodSchema: EnumSchema<AmdStatusCallbackMethod> =
  s.enumOf<AmdStatusCallbackMethod>(AmdStatusCallbackMethod);
