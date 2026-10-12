import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error details if the operation failed. Follows RFC 9457 Problem Details. */
export type Error = {
  /** A URI reference that identifies the problem type. */
  type?: string;
  /** A short, human-readable summary of the problem type. */
  title?: string;
  /** The HTTP status code for this occurrence of the problem. */
  status?: number;
  /** A human-readable explanation specific to this occurrence. */
  detail?: string;
  /** A URI reference that identifies the specific occurrence of the problem. */
  instance?: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  type: s.optional(s.string()),
  title: s.optional(s.string()),
  status: s.optional(s.int()),
  detail: s.optional(s.string()),
  instance: s.optional(s.string()),
});
