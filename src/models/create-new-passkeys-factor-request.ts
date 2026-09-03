import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configSchema, type Config } from "./config.js";

export type CreateNewPasskeysFactorRequest = {
  friendlyName: string;
  identity: string;
  config?: Config;
};

export const createNewPasskeysFactorRequestSchema: Schema<CreateNewPasskeysFactorRequest> =
  s.object<CreateNewPasskeysFactorRequest>({
    friendlyName: s.string(),
    identity: s.string(),
    config: s.optional(s.lazy(() => configSchema)),
    _keysMap: {
      friendlyName: "friendly_name",
    },
  });
