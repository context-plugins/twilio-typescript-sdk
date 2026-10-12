import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  insightsV1AccountSettingsSchema,
  type InsightsV1AccountSettings,
} from "../models/insights-v1-account-settings.js";
import type { Servers } from "../servers.js";

export class InsightsV1Setting {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the Voice Insights Settings.
   *
   * @remarks
   * Get the Voice Insights Settings.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAccountSettings(
    request: InsightsV1Setting.FetchAccountSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1AccountSettings, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Voice/Settings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [{ name: "SubaccountSid", value: request.subaccountSid, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1AccountSettingsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Voice Insights Setting.
   *
   * @remarks
   * Update a specific Voice Insights Setting.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAccountSettings(
    request: InsightsV1Setting.UpdateAccountSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1AccountSettings, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/v1/Voice/Settings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AdvancedFeatures", value: request.advancedFeatures, schema: s.optional(s.boolean()) },
            { name: "VoiceTrace", value: request.voiceTrace, schema: s.optional(s.boolean()) },
            { name: "SubaccountSid", value: request.subaccountSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: insightsV1AccountSettingsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1Setting {
  export type FetchAccountSettingsRequest = {
    /** The unique SID identifier of the Subaccount. */
    subaccountSid?: string;
  };

  export type UpdateAccountSettingsRequest = {
    /** A boolean flag to enable Advanced Features for Voice Insights. */
    advancedFeatures?: boolean;
    /** A boolean flag to enable Voice Trace. */
    voiceTrace?: boolean;
    /** The unique SID identifier of the Subaccount. */
    subaccountSid?: string;
  };
}
