import { s, type Schema } from "../core/index.js";

export type ConversationsV2OperationAccepted = {
  statusUrl: string;
  related?: Record<string, string> | null;
};

export const conversationsV2OperationAcceptedSchema: Schema<ConversationsV2OperationAccepted> =
  s.object<ConversationsV2OperationAccepted>({
    statusUrl: s.string(),
    related: s.optionalNullable(s.record(s.string(), s.string())),
  });
