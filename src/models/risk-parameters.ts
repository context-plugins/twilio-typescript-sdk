import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RiskParameters = {
  partnerSubId?: string;
};

export const riskParametersSchema: Schema<RiskParameters> = s.object<RiskParameters>({
  partnerSubId: s.optional(s.string()),
  _keysMap: {
    partnerSubId: "partner_sub_id",
  },
});
