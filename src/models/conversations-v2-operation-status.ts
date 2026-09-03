import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { status21Schema, type Status21 } from "./status21.js";

export type ConversationsV2OperationStatus = {
  operationId: string;
  status: Status21;
  createdAt: Date;
  completedAt?: Date | null;
  statusUrl: string;
  error?: Error | null;
  related?: Record<string, string> | null;
};

export const conversationsV2OperationStatusSchema: Schema<ConversationsV2OperationStatus> =
  s.object<ConversationsV2OperationStatus>({
    operationId: s.string(),
    status: status21Schema,
    createdAt: s.dateTime(),
    completedAt: s.optionalNullable(s.dateTime()),
    statusUrl: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    related: s.optionalNullable(s.record(s.string(), s.string())),
  });
