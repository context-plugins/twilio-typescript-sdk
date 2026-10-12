import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StudioV1FlowEngagementStep = {
  /** The unique string that we created to identify the Step resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Step
   * resource.
   */
  accountSid?: string | null;
  /** The SID of the Flow. */
  flowSid?: string | null;
  /** The SID of the Engagement. */
  engagementSid?: string | null;
  /** The event that caused the Flow to transition to the Step. */
  name?: string | null;
  /**
   * The current state of the Flow's Execution. As a flow executes, we save its state in this
   * context. We save data that your widgets can access as variables in configuration fields or in
   * text areas as variable substitution.
   */
  context?: Record<string, unknown> | null;
  /** The SID of the parent Step. */
  parentStepSid?: string | null;
  /** The Widget that preceded the Widget for the Step. */
  transitionedFrom?: string | null;
  /** The Widget that will follow the Widget for the Step. */
  transitionedTo?: string | null;
  /** The type of the widget that was executed. */
  type?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URLs of related resources. */
  links?: Record<string, unknown> | null;
};

export const studioV1FlowEngagementStepSchema: Schema<StudioV1FlowEngagementStep> =
  s.object<StudioV1FlowEngagementStep>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    flowSid: s.optionalNullable(s.string()),
    engagementSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    context: s.optionalNullable(s.record(s.string(), s.unknown())),
    parentStepSid: s.optionalNullable(s.string()),
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
      engagementSid: "engagement_sid",
      parentStepSid: "parent_step_sid",
      transitionedFrom: "transitioned_from",
      transitionedTo: "transitioned_to",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
