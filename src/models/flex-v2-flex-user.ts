import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV2FlexUser = {
  /** The unique SID of the account that created the resource. */
  accountSid?: string | null;
  /** The unique ID created by Twilio to identify a Flex instance. */
  instanceSid?: string | null;
  /** The unique SID identifier of the Twilio Unified User. */
  userSid?: string | null;
  /** The unique SID identifier of the Flex User. */
  flexUserSid?: string | null;
  /** The unique SID identifier of the worker. */
  workerSid?: string | null;
  /** The unique SID identifier of the workspace. */
  workspaceSid?: string | null;
  /** The unique SID identifier of the Flex Team. */
  flexTeamSid?: string | null;
  /** Username of the User. */
  username?: string | null;
  /** Email of the User. */
  email?: string | null;
  /** The locale preference of the user. */
  locale?: string | null;
  /** The roles of the user. */
  roles?: string[] | null;
  /** The date that this user was created, given in ISO 8601 format. */
  createdDate?: Date | null;
  /** The date that this user was updated, given in ISO 8601 format. */
  updatedDate?: Date | null;
  /** The current version of the user. @default 0 */
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
  version: s.defaulted(s.int(), 0),
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
