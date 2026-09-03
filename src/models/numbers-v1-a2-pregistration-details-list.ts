import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  numbersV1A2PRegistrationDetailsSchema,
  type NumbersV1A2PRegistrationDetails,
} from "./numbers-v1-a2-pregistration-details.js";

export type NumbersV1A2PRegistrationDetailsList = {
  data: NumbersV1A2PRegistrationDetails[];
};

export const numbersV1A2PRegistrationDetailsListSchema: Schema<NumbersV1A2PRegistrationDetailsList> =
  s.object<NumbersV1A2PRegistrationDetailsList>({
    data: s.array(s.lazy(() => numbersV1A2PRegistrationDetailsSchema)),
  });
