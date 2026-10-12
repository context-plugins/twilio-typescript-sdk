import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsSession = {
  /** Unique ID to identify the user's workspace */
  workspaceId?: string | null;
  /** The session expiry date and time, given in ISO 8601 format. */
  sessionExpiry?: string | null;
  /** The unique ID for the session */
  sessionId?: string | null;
  /** The base URL to fetch reports and dashboards */
  baseUrl?: string | null;
  /** The URL of this resource. */
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
