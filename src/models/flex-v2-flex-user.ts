import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV2FlexUser = {
  accountSid?: string | null;
  instanceSid?: string | null;
  userSid?: string | null;
  flexUserSid?: string | null;
  workerSid?: string | null;
  workspaceSid?: string | null;
  flexTeamSid?: string | null;
  username?: string | null;
  email?: string | null;
  locale?: string | null;
  roles?: string[] | null;
  createdDate?: Date | null;
  updatedDate?: Date | null;
  version?: number;
  url?: string | null;
};

export const flexV2FlexUserSchema: Schema<FlexV2FlexUser> = s.object<FlexV2FlexUser>({
  accountSid: s.optionalNullable(s.string()),
  instanceSid: s.optionalNullable(s.string()),
  userSid: s.optionalNullable(s.string()),
  flexUserSid: s.optionalNullable(s.string()),
  workerSid: s.optionalNullable(s.string()),
  workspaceSid: s.optionalNullable(s.string()),
  flexTeamSid: s.optionalNullable(s.string()),
  username: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  locale: s.optionalNullable(s.string()),
  roles: s.optionalNullable(s.array(s.string())),
  createdDate: s.optionalNullable(s.dateTime()),
  updatedDate: s.optionalNullable(s.dateTime()),
  version: s.optional(s.number()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    instanceSid: "instance_sid",
    userSid: "user_sid",
    flexUserSid: "flex_user_sid",
    workerSid: "worker_sid",
    workspaceSid: "workspace_sid",
    flexTeamSid: "flex_team_sid",
    createdDate: "created_date",
    updatedDate: "updated_date",
  },
});
