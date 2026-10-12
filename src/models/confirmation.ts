import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to prompt the caller to confirm their payment information before submitting to the
 * payment gateway. If `true`, the caller will hear the last 4 digits of their card or account
 * number and must press 1 to confirm or 2 to cancel. Default is `false`.
 */
export const Confirmation = {
  True: "true",
  False: "false",
} as const;
export type Confirmation = (typeof Confirmation)[keyof typeof Confirmation] | (string & {});

export const confirmationSchema: EnumSchema<Confirmation> = s.enumOf<Confirmation>(Confirmation);
