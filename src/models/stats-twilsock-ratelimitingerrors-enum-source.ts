import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatsTwilsockRatelimitingerrorsEnumSource = {
  Twilsock: "TWILSOCK",
} as const;
export type StatsTwilsockRatelimitingerrorsEnumSource =
  | (typeof StatsTwilsockRatelimitingerrorsEnumSource)[keyof typeof StatsTwilsockRatelimitingerrorsEnumSource]
  | (string & {});

export const statsTwilsockRatelimitingerrorsEnumSourceSchema: EnumSchema<StatsTwilsockRatelimitingerrorsEnumSource> =
  s.enumOf<StatsTwilsockRatelimitingerrorsEnumSource>(StatsTwilsockRatelimitingerrorsEnumSource);
