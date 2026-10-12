import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  numbersV1EmbeddedSessionSchema,
  type NumbersV1EmbeddedSession,
} from "./numbers-v1-embedded-session.js";

export type NumbersV1CreateEmbeddedRegistrationResponse = {
  /** Registration identifier (BU-prefixed). */
  id: string;
  /** The regulation ID for this registration. */
  regulationId: string;
  /** The regulation version. */
  regulationVersion: number;
  /** The friendly name provided in the request. */
  friendlyName: string;
  /** Registration status. Always DRAFT on creation. */
  status: string;
  /** Email address for status notifications. */
  statusNotificationEmail?: string | null;
  /** Callback URL for status webhooks. */
  statusCallbackUrl?: string | null;
  /** Additional comments. */
  comments?: string | null;
  embeddedSession: NumbersV1EmbeddedSession;
  /** Registration data echoed from the request. */
  data: Record<string, unknown>;
  /** Timestamp of creation. */
  dateCreated: Date;
  /** Timestamp of last update. */
  dateUpdated: Date;
};

export const numbersV1CreateEmbeddedRegistrationResponseSchema: Schema<NumbersV1CreateEmbeddedRegistrationResponse> =
  s.object<NumbersV1CreateEmbeddedRegistrationResponse>({
    id: s.string(),
    regulationId: s.string(),
    regulationVersion: s.int(),
    friendlyName: s.string(),
    status: s.string(),
    statusNotificationEmail: s.optionalNullable(s.string()),
    statusCallbackUrl: s.optionalNullable(s.string()),
    comments: s.optionalNullable(s.string()),
    embeddedSession: numbersV1EmbeddedSessionSchema,
    data: s.record(s.string(), s.unknown()),
    dateCreated: s.dateTime(),
    dateUpdated: s.dateTime(),
  });
