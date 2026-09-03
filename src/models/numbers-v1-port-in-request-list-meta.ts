import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortInRequestListMeta = {
  previousToken?: string | null;
  nextToken?: string | null;
};

export const numbersV1PortInRequestListMetaSchema: Schema<NumbersV1PortInRequestListMeta> =
  s.object<NumbersV1PortInRequestListMeta>({
    previousToken: s.optionalNullable(s.string()),
    nextToken: s.optionalNullable(s.string()),
    _keysMap: {
      previousToken: "previous_token",
      nextToken: "next_token",
    },
  });
