import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1Usecase = {
  /**
   * Human readable use case details (usecase, description and purpose) of Messaging Service Use
   * Cases.
   */
  usecases?: Record<string, unknown>[] | null;
};

export const messagingV1UsecaseSchema: Schema<MessagingV1Usecase> = s.object<MessagingV1Usecase>({
  usecases: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
});
