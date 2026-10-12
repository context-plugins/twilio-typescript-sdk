import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StudioV2FlowTestUser = {
  /** Unique identifier of the flow. */
  sid?: string | null;
  /** List of test user identities that can test draft versions of the flow. */
  testUsers?: string[] | null;
  /** The URL of this resource. */
  url?: string | null;
};

export const studioV2FlowTestUserSchema: Schema<StudioV2FlowTestUser> = s.object<StudioV2FlowTestUser>({
  sid: s.optionalNullable(s.string()),
  testUsers: s.optionalNullable(s.array(s.string())),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    testUsers: "test_users",
  },
});
