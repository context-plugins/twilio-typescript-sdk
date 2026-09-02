import { s, type EnumSchema } from "../core/index.js";

export const EventEnumLevel = {
  Unknown: "UNKNOWN",
  Debug: "DEBUG",
  Info: "INFO",
  Warning: "WARNING",
  Error: "ERROR",
} as const;
export type EventEnumLevel = (typeof EventEnumLevel)[keyof typeof EventEnumLevel] | (string & {});

export const eventEnumLevelSchema: EnumSchema<EventEnumLevel> = s.enumOf<EventEnumLevel>(EventEnumLevel);
