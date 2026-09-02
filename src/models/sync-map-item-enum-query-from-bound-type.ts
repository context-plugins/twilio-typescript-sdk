import { s, type EnumSchema } from "../core/index.js";

export const SyncMapItemEnumQueryFromBoundType = {
  Inclusive: "inclusive",
  Exclusive: "exclusive",
} as const;
export type SyncMapItemEnumQueryFromBoundType =
  | (typeof SyncMapItemEnumQueryFromBoundType)[keyof typeof SyncMapItemEnumQueryFromBoundType]
  | (string & {});

export const syncMapItemEnumQueryFromBoundTypeSchema: EnumSchema<SyncMapItemEnumQueryFromBoundType> =
  s.enumOf<SyncMapItemEnumQueryFromBoundType>(SyncMapItemEnumQueryFromBoundType);
