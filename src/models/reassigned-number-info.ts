import { s, type Schema } from "../core/index.js";

export type ReassignedNumberInfo = {
  lastVerifiedDate?: string;
  isNumberReassigned?: string;
  errorCode?: string;
};

export const reassignedNumberInfoSchema: Schema<ReassignedNumberInfo> = s.object<ReassignedNumberInfo>({
  lastVerifiedDate: s.optional(s.string()),
  isNumberReassigned: s.optional(s.string()),
  errorCode: s.optional(s.string()),
  _keysMap: {
    lastVerifiedDate: "last_verified_date",
    isNumberReassigned: "is_number_reassigned",
    errorCode: "error_code",
  },
});
