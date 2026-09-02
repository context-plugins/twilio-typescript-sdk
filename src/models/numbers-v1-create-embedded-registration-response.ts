import { s, type Schema } from "../core/index.js";
import {
  numbersV1EmbeddedSessionSchema,
  type NumbersV1EmbeddedSession,
} from "./numbers-v1-embedded-session.js";

export type NumbersV1CreateEmbeddedRegistrationResponse = {
  id: string;
  regulationId: string;
  regulationVersion: number;
  friendlyName: string;
  status: string;
  statusNotificationEmail?: string | null;
  statusCallbackUrl?: string | null;
  comments?: string | null;
  embeddedSession: NumbersV1EmbeddedSession;
  data: Record<string, unknown>;
  dateCreated: Date;
  dateUpdated: Date;
};

export const numbersV1CreateEmbeddedRegistrationResponseSchema: Schema<NumbersV1CreateEmbeddedRegistrationResponse> =
  s.object<NumbersV1CreateEmbeddedRegistrationResponse>({
    id: s.string(),
    regulationId: s.string(),
    regulationVersion: s.number(),
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
