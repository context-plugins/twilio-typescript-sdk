import { s, type Schema } from "../core/index.js";

export type TrusthubV1Policies = {
  sid?: string | null;
  friendlyName?: string | null;
  requirements?: Record<string, unknown> | null;
  url?: string | null;
};

export const trusthubV1PoliciesSchema: Schema<TrusthubV1Policies> = s.object<TrusthubV1Policies>({
  sid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  requirements: s.optionalNullable(s.record(s.string(), s.unknown())),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    friendlyName: "friendly_name",
  },
});
