import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1FlexTeamOwners = {
  flexUserSid?: string | null;
  friendlyName?: string | null;
  email?: string | null;
  workerSid?: string | null;
  teamSid?: string | null;
  instanceSid?: string | null;
  accountSid?: string | null;
  url?: string | null;
};

export const flexV1FlexTeamOwnersSchema: Schema<FlexV1FlexTeamOwners> = s.object<FlexV1FlexTeamOwners>({
  flexUserSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  workerSid: s.optionalNullable(s.string()),
  teamSid: s.optionalNullable(s.string()),
  instanceSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    flexUserSid: "flex_user_sid",
    friendlyName: "friendly_name",
    workerSid: "worker_sid",
    teamSid: "team_sid",
    instanceSid: "instance_sid",
    accountSid: "account_sid",
  },
});
