import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  fetchAccountSettings(
    request: InsightsV1Setting.FetchAccountSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1AccountSettings, ResponseError> {
    return this.#rawClient.execute<InsightsV1AccountSettings, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Voice/Settings"),
        auth: this.#auth.accountSidAuthToken,
        query: [{ name: "SubaccountSid", value: request.subaccountSid, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1AccountSettingsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateAccountSettings(
    request: InsightsV1Setting.UpdateAccountSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1AccountSettings, ResponseError> {
    return this.#rawClient.execute<InsightsV1AccountSettings, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default14("/v1/Voice/Settings"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1Setting {
  export type FetchAccountSettingsRequest = {
    subaccountSid?: string;
  };

  export type UpdateAccountSettingsRequest = {
    advancedFeatures?: boolean;
    voiceTrace?: boolean;
    subaccountSid?: string;
  };
}
