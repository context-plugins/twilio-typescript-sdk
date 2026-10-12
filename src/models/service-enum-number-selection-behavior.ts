import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The preference for Proxy Number selection in the Service instance. Can be: `prefer-sticky` or
 * `avoid-sticky`. `prefer-sticky` means that we will try and select the same Proxy Number for a
 * given participant if they have previous
 * [Sessions](https://www.twilio.com/docs/proxy/api/session), but we will not fail if that Proxy
 * Number cannot be used. `avoid-sticky` means that we will try to use different Proxy Numbers as
 * long as that is possible within a given pool rather than try and use a previously assigned
 * number.
 */
export const ServiceEnumNumberSelectionBehavior = {
  AvoidSticky: "avoid-sticky",
  PreferSticky: "prefer-sticky",
} as const;
export type ServiceEnumNumberSelectionBehavior =
  | (typeof ServiceEnumNumberSelectionBehavior)[keyof typeof ServiceEnumNumberSelectionBehavior]
  | (string & {});

export const serviceEnumNumberSelectionBehaviorSchema: EnumSchema<ServiceEnumNumberSelectionBehavior> =
  s.enumOf<ServiceEnumNumberSelectionBehavior>(ServiceEnumNumberSelectionBehavior);
