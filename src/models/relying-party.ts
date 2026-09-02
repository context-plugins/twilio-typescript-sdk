import { s, type Schema } from "../core/index.js";

export type RelyingParty = {
  id?: string;
  name?: string;
  origins?: string[];
};

export const relyingPartySchema: Schema<RelyingParty> = s.object<RelyingParty>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  origins: s.optional(s.array(s.string())),
});
