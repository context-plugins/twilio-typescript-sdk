import { s, type Schema } from "../core/index.js";
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
