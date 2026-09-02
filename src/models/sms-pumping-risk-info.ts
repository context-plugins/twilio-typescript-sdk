import { s, type Schema } from "../core/index.js";

export type SmsPumpingRiskInfo = {
  carrierRiskCategory?: string;
  numberBlocked?: boolean;
  numberBlockedDate?: Date;
  numberBlockedLast3Months?: boolean;
  smsPumpingRiskScore?: number;
  errorCode?: number;
};

export const smsPumpingRiskInfoSchema: Schema<SmsPumpingRiskInfo> = s.object<SmsPumpingRiskInfo>({
  carrierRiskCategory: s.optional(s.string()),
  numberBlocked: s.optional(s.boolean()),
  numberBlockedDate: s.optional(s.dateTime()),
  numberBlockedLast3Months: s.optional(s.boolean()),
  smsPumpingRiskScore: s.optional(s.number()),
  errorCode: s.optional(s.number()),
  _keysMap: {
    carrierRiskCategory: "carrier_risk_category",
    numberBlocked: "number_blocked",
    numberBlockedDate: "number_blocked_date",
    numberBlockedLast3Months: "number_blocked_last_3_months",
    smsPumpingRiskScore: "sms_pumping_risk_score",
    errorCode: "error_code",
  },
});
