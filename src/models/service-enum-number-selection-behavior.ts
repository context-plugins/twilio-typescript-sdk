import { s, type EnumSchema } from "../core/index.js";

export const ServiceEnumNumberSelectionBehavior = {
  AvoidSticky: "avoid-sticky",
  PreferSticky: "prefer-sticky",
} as const;
export type ServiceEnumNumberSelectionBehavior =
  | (typeof ServiceEnumNumberSelectionBehavior)[keyof typeof ServiceEnumNumberSelectionBehavior]
  | (string & {});

export const serviceEnumNumberSelectionBehaviorSchema: EnumSchema<ServiceEnumNumberSelectionBehavior> =
  s.enumOf<ServiceEnumNumberSelectionBehavior>(ServiceEnumNumberSelectionBehavior);
