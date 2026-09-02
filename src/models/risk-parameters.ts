import { s, type Schema } from "../core/index.js";

export type RiskParameters = {
  partnerSubId?: string;
};

export const riskParametersSchema: Schema<RiskParameters> = s.object<RiskParameters>({
  partnerSubId: s.optional(s.string()),
  _keysMap: {
    partnerSubId: "partner_sub_id",
  },
});
