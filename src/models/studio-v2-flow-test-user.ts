import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StudioV2FlowTestUser = {
  sid?: string | null;
  testUsers?: string[] | null;
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
