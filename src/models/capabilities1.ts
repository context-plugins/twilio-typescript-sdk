import { s, type Schema } from "../core/index.js";

export type Capabilities1 = {
  voice?: boolean;
  restrictedVoice?: boolean;
  sms?: boolean;
  restrictedSms?: boolean;
  mms?: boolean;
  restrictedMms?: boolean;
  fax?: boolean;
  restrictedFax?: boolean;
  sip?: boolean;
};

export const capabilities1Schema: Schema<Capabilities1> = s.object<Capabilities1>({
  voice: s.optional(s.boolean()),
  restrictedVoice: s.optional(s.boolean()),
  sms: s.optional(s.boolean()),
  restrictedSms: s.optional(s.boolean()),
  mms: s.optional(s.boolean()),
  restrictedMms: s.optional(s.boolean()),
  fax: s.optional(s.boolean()),
  restrictedFax: s.optional(s.boolean()),
  sip: s.optional(s.boolean()),
  _keysMap: {
    voice: "Voice",
    restrictedVoice: "RestrictedVoice",
    sms: "Sms",
    restrictedSms: "RestrictedSms",
    mms: "Mms",
    restrictedMms: "RestrictedMms",
    fax: "Fax",
    restrictedFax: "RestrictedFax",
    sip: "Sip",
  },
});
