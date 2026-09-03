import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV2OperationAccepted = {
  statusUrl: string;
  related?: Record<string, string> | null;
};

export const conversationsV2OperationAcceptedSchema: Schema<ConversationsV2OperationAccepted> =
  s.object<ConversationsV2OperationAccepted>({
    statusUrl: s.string(),
    related: s.optionalNullable(s.record(s.string(), s.string())),
  });
