import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the Flow. Can be: `draft` or `published`. */
export const FlowEnumStatus = {
  Draft: "draft",
  Published: "published",
} as const;
export type FlowEnumStatus = (typeof FlowEnumStatus)[keyof typeof FlowEnumStatus] | (string & {});

export const flowEnumStatusSchema: EnumSchema<FlowEnumStatus> = s.enumOf<FlowEnumStatus>(FlowEnumStatus);
