import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SyncListItemEnumQueryFromBoundType = {
  Inclusive: "inclusive",
  Exclusive: "exclusive",
} as const;
export type SyncListItemEnumQueryFromBoundType =
  | (typeof SyncListItemEnumQueryFromBoundType)[keyof typeof SyncListItemEnumQueryFromBoundType]
  | (string & {});

export const syncListItemEnumQueryFromBoundTypeSchema: EnumSchema<SyncListItemEnumQueryFromBoundType> =
  s.enumOf<SyncListItemEnumQueryFromBoundType>(SyncListItemEnumQueryFromBoundType);
