import { s, type EnumSchema } from "../core/index.js";

export const StatsTwilsockRatelimitingerrorsEnumSource = {
  Twilsock: "TWILSOCK",
} as const;
export type StatsTwilsockRatelimitingerrorsEnumSource =
  | (typeof StatsTwilsockRatelimitingerrorsEnumSource)[keyof typeof StatsTwilsockRatelimitingerrorsEnumSource]
  | (string & {});

export const statsTwilsockRatelimitingerrorsEnumSourceSchema: EnumSchema<StatsTwilsockRatelimitingerrorsEnumSource> =
  s.enumOf<StatsTwilsockRatelimitingerrorsEnumSource>(StatsTwilsockRatelimitingerrorsEnumSource);
