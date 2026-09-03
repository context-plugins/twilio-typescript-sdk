import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsSession = {
  workspaceId?: string | null;
  sessionExpiry?: string | null;
  sessionId?: string | null;
  baseUrl?: string | null;
  url?: string | null;
};

export const flexV1InsightsSessionSchema: Schema<FlexV1InsightsSession> = s.object<FlexV1InsightsSession>({
  workspaceId: s.optionalNullable(s.string()),
  sessionExpiry: s.optionalNullable(s.string()),
  sessionId: s.optionalNullable(s.string()),
  baseUrl: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    workspaceId: "workspace_id",
    sessionExpiry: "session_expiry",
    sessionId: "session_id",
    baseUrl: "base_url",
  },
});
