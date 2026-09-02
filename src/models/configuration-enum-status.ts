import { s, type EnumSchema } from "../core/index.js";

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
