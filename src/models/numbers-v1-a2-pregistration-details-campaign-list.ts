import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  numbersV1A2PRegistrationDetailsSchema,
  type NumbersV1A2PRegistrationDetails,
} from "./numbers-v1-a2-pregistration-details.js";

export type NumbersV1A2PRegistrationDetailsCampaignList = {
  /** List of A2P registration details for numbers in the campaign */
  data: NumbersV1A2PRegistrationDetails[];
  /** Token for pagination to retrieve the next page of results */
  nextToken?: string | null;
};

export const numbersV1A2PRegistrationDetailsCampaignListSchema: Schema<NumbersV1A2PRegistrationDetailsCampaignList> =
  s.object<NumbersV1A2PRegistrationDetailsCampaignList>({
    data: s.array(s.lazy(() => numbersV1A2PRegistrationDetailsSchema)),
    nextToken: s.optionalNullable(s.string()),
  });
