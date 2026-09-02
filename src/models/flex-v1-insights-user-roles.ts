import { s, type Schema } from "../core/index.js";

export type FlexV1InsightsUserRoles = {
  roles?: string[] | null;
  url?: string | null;
};

export const flexV1InsightsUserRolesSchema: Schema<FlexV1InsightsUserRoles> =
  s.object<FlexV1InsightsUserRoles>({
    roles: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
  });
