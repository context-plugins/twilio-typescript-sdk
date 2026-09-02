import { s, type EnumSchema } from "../core/index.js";

export const FlowEnumStatus = {
  Draft: "draft",
  Published: "published",
} as const;
export type FlowEnumStatus = (typeof FlowEnumStatus)[keyof typeof FlowEnumStatus] | (string & {});

export const flowEnumStatusSchema: EnumSchema<FlowEnumStatus> = s.enumOf<FlowEnumStatus>(FlowEnumStatus);
