import { s, type EnumSchema } from "../core/index.js";

export const UseCase = {
  Promotional: "PROMOTIONAL",
  Transactional: "TRANSACTIONAL",
  Otp: "OTP",
  MultiUse: "MULTI_USE",
} as const;
export type UseCase = (typeof UseCase)[keyof typeof UseCase] | (string & {});

export const useCaseSchema: EnumSchema<UseCase> = s.enumOf<UseCase>(UseCase);
