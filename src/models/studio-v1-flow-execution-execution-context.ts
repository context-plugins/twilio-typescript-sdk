import { s, type Schema } from "../core/index.js";

export type StudioV1FlowExecutionExecutionContext = {
  accountSid?: string | null;
  context?: Record<string, unknown> | null;
  flowSid?: string | null;
  executionSid?: string | null;
  url?: string | null;
};

export const studioV1FlowExecutionExecutionContextSchema: Schema<StudioV1FlowExecutionExecutionContext> =
  s.object<StudioV1FlowExecutionExecutionContext>({
    accountSid: s.optionalNullable(s.string()),
    context: s.optionalNullable(s.record(s.string(), s.unknown())),
    flowSid: s.optionalNullable(s.string()),
    executionSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      flowSid: "flow_sid",
      executionSid: "execution_sid",
    },
  });
