import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceEvent = {
  accountSid?: string | null;
  actorSid?: string | null;
  actorType?: string | null;
  actorUrl?: string | null;
  description?: string | null;
  eventData?: Record<string, unknown> | null;
  eventDate?: Date | null;
  eventDateMs?: number | null;
  eventType?: string | null;
  resourceSid?: string | null;
  resourceType?: string | null;
  resourceUrl?: string | null;
  sid?: string | null;
  source?: string | null;
  sourceIpAddress?: string | null;
  url?: string | null;
  workspaceSid?: string | null;
};

export const taskrouterV1WorkspaceEventSchema: Schema<TaskrouterV1WorkspaceEvent> =
  s.object<TaskrouterV1WorkspaceEvent>({
    accountSid: s.optionalNullable(s.string()),
    actorSid: s.optionalNullable(s.string()),
    actorType: s.optionalNullable(s.string()),
    actorUrl: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    eventData: s.optionalNullable(s.record(s.string(), s.unknown())),
    eventDate: s.optionalNullable(s.dateTime()),
    eventDateMs: s.optionalNullable(s.number()),
    eventType: s.optionalNullable(s.string()),
    resourceSid: s.optionalNullable(s.string()),
    resourceType: s.optionalNullable(s.string()),
    resourceUrl: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    source: s.optionalNullable(s.string()),
    sourceIpAddress: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      actorSid: "actor_sid",
      actorType: "actor_type",
      actorUrl: "actor_url",
      eventData: "event_data",
      eventDate: "event_date",
      eventDateMs: "event_date_ms",
      eventType: "event_type",
      resourceSid: "resource_sid",
      resourceType: "resource_type",
      resourceUrl: "resource_url",
      sourceIpAddress: "source_ip_address",
      workspaceSid: "workspace_sid",
    },
  });
