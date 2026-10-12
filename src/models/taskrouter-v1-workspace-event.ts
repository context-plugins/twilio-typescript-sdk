import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceEvent = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Event
   * resource.
   */
  accountSid?: string | null;
  /** The SID of the resource that triggered the event. */
  actorSid?: string | null;
  /** The type of resource that triggered the event. */
  actorType?: string | null;
  /** The absolute URL of the resource that triggered the event. */
  actorUrl?: string | null;
  /** A description of the event. */
  description?: string | null;
  /**
   * Data about the event. For more information, see [Event
   * types](https://www.twilio.com/docs/taskrouter/api/event#event-types).
   */
  eventData?: Record<string, unknown> | null;
  /**
   * The time the event was sent, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  eventDate?: Date | null;
  /** The time the event was sent in milliseconds. */
  eventDateMs?: number | null;
  /** The identifier for the event. */
  eventType?: string | null;
  /**
   * The SID of the object the event is most relevant to, such as a TaskSid, ReservationSid, or a
   * WorkerSid.
   */
  resourceSid?: string | null;
  /**
   * The type of object the event is most relevant to, such as a Task, Reservation, or a Worker).
   */
  resourceType?: string | null;
  /** The URL of the resource the event is most relevant to. */
  resourceUrl?: string | null;
  /** The unique string that we created to identify the Event resource. */
  sid?: string | null;
  /** Where the Event originated. */
  source?: string | null;
  /** The IP from which the Event originated. */
  sourceIpAddress?: string | null;
  /** The absolute URL of the Event resource. */
  url?: string | null;
  /** The SID of the Workspace that contains the Event. */
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
    eventDateMs: s.optionalNullable(s.int()),
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
