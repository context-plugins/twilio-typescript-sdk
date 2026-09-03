import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StudioV1FlowExecutionExecutionStepExecutionStepContext = {
  accountSid?: string | null;
  context?: Record<string, unknown> | null;
  executionSid?: string | null;
  flowSid?: string | null;
  stepSid?: string | null;
  url?: string | null;
};

export const studioV1FlowExecutionExecutionStepExecutionStepContextSchema: Schema<StudioV1FlowExecutionExecutionStepExecutionStepContext> =
  s.object<StudioV1FlowExecutionExecutionStepExecutionStepContext>({
    accountSid: s.optionalNullable(s.string()),
    context: s.optionalNullable(s.record(s.string(), s.unknown())),
    executionSid: s.optionalNullable(s.string()),
    flowSid: s.optionalNullable(s.string()),
    stepSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      executionSid: "execution_sid",
      flowSid: "flow_sid",
      stepSid: "step_sid",
    },
  });
