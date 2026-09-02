import { s, type Schema } from "../core/index.js";

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
