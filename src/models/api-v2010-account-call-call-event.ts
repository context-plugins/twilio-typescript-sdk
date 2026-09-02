import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountCallCallEvent = {
  request?: Record<string, unknown> | null;
  response?: Record<string, unknown> | null;
};

export const apiV2010AccountCallCallEventSchema: Schema<ApiV2010AccountCallCallEvent> =
  s.object<ApiV2010AccountCallCallEvent>({
    request: s.optionalNullable(s.record(s.string(), s.unknown())),
    response: s.optionalNullable(s.record(s.string(), s.unknown())),
  });
