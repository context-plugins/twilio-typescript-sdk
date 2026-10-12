import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The messaging use case type for the RCS sender. Allowed values are `PROMOTIONAL`,
 * `TRANSACTIONAL`, `OTP`, `MULTI_USE`. Defaults to `MULTI_USE` if not provided. Cannot be modified
 * after launch.
 */
export const UseCase = {
  Promotional: "PROMOTIONAL",
  Transactional: "TRANSACTIONAL",
  Otp: "OTP",
  MultiUse: "MULTI_USE",
} as const;
export type UseCase = (typeof UseCase)[keyof typeof UseCase] | (string & {});

export const useCaseSchema: EnumSchema<UseCase> = s.enumOf<UseCase>(UseCase);
