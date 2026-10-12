import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1BulkEligibility = {
  /** The SID of the bulk eligibility check that you want to know about. */
  requestId?: string | null;
  /** This is the url of the request that you're trying to reach out to locate the resource. */
  url?: string | null;
  /**
   * The result set that contains the eligibility check response for each requested number, each
   * result has at least the following attributes: phone_number: The requested phone number
   * ,hosting_account_sid: The account sid where the phone number will be hosted, country: Phone
   * number’s country, eligibility_status: Indicates the eligibility status of the PN
   * (Eligible/Ineligible), eligibility_sub_status: Indicates the sub status of the eligibility ,
   * ineligibility_reason: Reason for number's ineligibility (if applicable), next_step: Suggested
   * next step in the hosting process based on the eligibility status.
   */
  results?: Record<string, unknown>[] | null;
  /**
   * This is the string that you assigned as a friendly name for describing the eligibility check
   * request.
   */
  friendlyName?: string | null;
  /** This is the status of the bulk eligibility check request. (Example: COMPLETE, IN_PROGRESS) */
  status?: string | null;
  dateCreated?: Date | null;
  dateCompleted?: Date | null;
};

export const numbersV1BulkEligibilitySchema: Schema<NumbersV1BulkEligibility> =
  s.object<NumbersV1BulkEligibility>({
    requestId: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    results: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    friendlyName: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateCompleted: s.optionalNullable(s.dateTime()),
    _keysMap: {
      requestId: "request_id",
      friendlyName: "friendly_name",
      dateCreated: "date_created",
      dateCompleted: "date_completed",
    },
  });
