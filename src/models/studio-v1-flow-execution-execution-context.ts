import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StudioV1FlowExecutionExecutionContext = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * ExecutionContext resource.
   */
  accountSid?: string | null;
  /**
   * The current state of the Flow's Execution. As a flow executes, we save its state in this
   * context. We save data that your widgets can access as variables in configuration fields or in
   * text areas as variable substitution.
   */
  context?: Record<string, unknown> | null;
  /** The SID of the Flow. */
  flowSid?: string | null;
  /** The SID of the context's Execution resource. */
  executionSid?: string | null;
  /** The absolute URL of the resource. */
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
