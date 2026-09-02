import { s, type Schema } from "../core/index.js";

export type MessagingV1Usecase = {
  usecases?: Record<string, unknown>[] | null;
};

export const messagingV1UsecaseSchema: Schema<MessagingV1Usecase> = s.object<MessagingV1Usecase>({
  usecases: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
});
