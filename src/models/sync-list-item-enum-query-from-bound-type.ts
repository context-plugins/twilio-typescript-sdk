import { s, type EnumSchema } from "../core/index.js";

export const SyncListItemEnumQueryFromBoundType = {
  Inclusive: "inclusive",
  Exclusive: "exclusive",
} as const;
export type SyncListItemEnumQueryFromBoundType =
  | (typeof SyncListItemEnumQueryFromBoundType)[keyof typeof SyncListItemEnumQueryFromBoundType]
  | (string & {});

export const syncListItemEnumQueryFromBoundTypeSchema: EnumSchema<SyncListItemEnumQueryFromBoundType> =
  s.enumOf<SyncListItemEnumQueryFromBoundType>(SyncListItemEnumQueryFromBoundType);
