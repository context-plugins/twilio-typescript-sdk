import { s, type Schema } from "../core/index.js";

export type StudioV1FlowExecutionExecutionStep = {
  sid?: string | null;
  accountSid?: string | null;
  flowSid?: string | null;
  executionSid?: string | null;
  parentStepSid?: string | null;
  name?: string | null;
  context?: Record<string, unknown> | null;
  transitionedFrom?: string | null;
  transitionedTo?: string | null;
  type?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const studioV1FlowExecutionExecutionStepSchema: Schema<StudioV1FlowExecutionExecutionStep> =
  s.object<StudioV1FlowExecutionExecutionStep>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    flowSid: s.optionalNullable(s.string()),
    executionSid: s.optionalNullable(s.string()),
    parentStepSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    context: s.optionalNullable(s.record(s.string(), s.unknown())),
    transitionedFrom: s.optionalNullable(s.string()),
    transitionedTo: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      flowSid: "flow_sid",
      executionSid: "execution_sid",
      parentStepSid: "parent_step_sid",
      transitionedFrom: "transitioned_from",
      transitionedTo: "transitioned_to",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
