import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Include this parameter with a value of `disable` to skip any kind of risk check on the respective
 * message request., Risk_check overrides Fraud Prevention measures like Fraud Guard, Geo
 * Permissions etc per verification attempt basis, allowing Verify to block traffic considered
 * fraudulent if enabled or bypass active protections if disabled. Can be: `enable`(default) or
 * `disable`. For SMS channel only.
 */
export const MessageEnumRiskCheck = {
  Enable: "enable",
  Disable: "disable",
} as const;
export type MessageEnumRiskCheck =
  | (typeof MessageEnumRiskCheck)[keyof typeof MessageEnumRiskCheck]
  | (string & {});

export const messageEnumRiskCheckSchema: EnumSchema<MessageEnumRiskCheck> =
  s.enumOf<MessageEnumRiskCheck>(MessageEnumRiskCheck);
