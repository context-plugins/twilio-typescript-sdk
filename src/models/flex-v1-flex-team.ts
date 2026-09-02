import { s, type Schema } from "../core/index.js";

export type FlexV1FlexTeam = {
  teamSid?: string | null;
  friendlyName?: string | null;
  memberCount?: number;
  description?: string | null;
  level?: number;
  parentTeamSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  version?: number;
  accountSid?: string | null;
  instanceSid?: string | null;
  url?: string | null;
};

export const flexV1FlexTeamSchema: Schema<FlexV1FlexTeam> = s.object<FlexV1FlexTeam>({
  teamSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  memberCount: s.optional(s.number()),
  description: s.optionalNullable(s.string()),
  level: s.optional(s.number()),
  parentTeamSid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  version: s.optional(s.number()),
  accountSid: s.optionalNullable(s.string()),
  instanceSid: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    teamSid: "team_sid",
    friendlyName: "friendly_name",
    memberCount: "member_count",
    parentTeamSid: "parent_team_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    accountSid: "account_sid",
    instanceSid: "instance_sid",
  },
});
