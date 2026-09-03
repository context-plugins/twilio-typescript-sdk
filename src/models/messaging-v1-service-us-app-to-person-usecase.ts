import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceUsAppToPersonUsecase = {
  usAppToPersonUsecases?: Record<string, unknown>[] | null;
};

export const messagingV1ServiceUsAppToPersonUsecaseSchema: Schema<MessagingV1ServiceUsAppToPersonUsecase> =
  s.object<MessagingV1ServiceUsAppToPersonUsecase>({
    usAppToPersonUsecases: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      usAppToPersonUsecases: "us_app_to_person_usecases",
    },
  });
