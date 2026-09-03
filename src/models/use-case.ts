import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UseCase = {
  Promotional: "PROMOTIONAL",
  Transactional: "TRANSACTIONAL",
  Otp: "OTP",
  MultiUse: "MULTI_USE",
} as const;
export type UseCase = (typeof UseCase)[keyof typeof UseCase] | (string & {});

export const useCaseSchema: EnumSchema<UseCase> = s.enumOf<UseCase>(UseCase);
