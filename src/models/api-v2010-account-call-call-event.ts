import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountCallCallEvent = {
  /** Contains a dictionary representing the request of the call. */
  request?: Record<string, unknown> | null;
  /** Contains a dictionary representing the call response, including a list of the call events. */
  response?: Record<string, unknown> | null;
};

export const apiV2010AccountCallCallEventSchema: Schema<ApiV2010AccountCallCallEvent> =
  s.object<ApiV2010AccountCallCallEvent>({
    request: s.optionalNullable(s.record(s.string(), s.unknown())),
    response: s.optionalNullable(s.record(s.string(), s.unknown())),
  });
