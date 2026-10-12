import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1Policies = {
  /** The unique string that identifies the Policy resource. */
  sid?: string | null;
  /**
   * A human-readable description that is assigned to describe the Policy resource. Examples can
   * include Primary Customer profile policy
   */
  friendlyName?: string | null;
  /** The SID of an object that holds the policy information */
  requirements?: Record<string, unknown> | null;
  /** The absolute URL of the Policy resource. */
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
