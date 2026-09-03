import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1BulkEligibility = {
  requestId?: string | null;
  url?: string | null;
  results?: Record<string, unknown>[] | null;
  friendlyName?: string | null;
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
