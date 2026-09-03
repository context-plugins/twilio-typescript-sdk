import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Response1 = {
  authenticatorData: string;
  clientDataJson: string;
  signature: string;
  userHandle?: string;
};

export const response1Schema: Schema<Response1> = s.object<Response1>({
  authenticatorData: s.string(),
  clientDataJson: s.string(),
  signature: s.string(),
  userHandle: s.optional(s.string()),
  _keysMap: {
    clientDataJson: "clientDataJSON",
  },
});
