import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the Flex onboarding. Can be: `ok`, `inprogress`,`notstarted`. */
export const ConfigurationEnumStatus = {
  Ok: "ok",
  Inprogress: "inprogress",
  Notstarted: "notstarted",
} as const;
export type ConfigurationEnumStatus =
  | (typeof ConfigurationEnumStatus)[keyof typeof ConfigurationEnumStatus]
  | (string & {});

export const configurationEnumStatusSchema: EnumSchema<ConfigurationEnumStatus> =
  s.enumOf<ConfigurationEnumStatus>(ConfigurationEnumStatus);
