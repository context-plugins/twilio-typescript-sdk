import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keywordConfigurationSchema, type KeywordConfiguration } from "./keyword-configuration.js";

export type KeywordsResponse = {
  /** The SID of the account that owns this opt-out configuration */
  accountSid: string;
  /** The SID of the opt-out configuration */
  optOutSid: string;
  /** List of keyword configurations for different keyword types */
  config: KeywordConfiguration[];
};

export const keywordsResponseSchema: Schema<KeywordsResponse> = s.object<KeywordsResponse>({
  accountSid: s.string(),
  optOutSid: s.string(),
  config: s.array(s.lazy(() => keywordConfigurationSchema)),
  _keysMap: {
    accountSid: "account_sid",
    optOutSid: "opt_out_sid",
  },
});
