import { s, type Schema } from "../core/index.js";
import {
  numbersV1A2PRegistrationDetailsSchema,
  type NumbersV1A2PRegistrationDetails,
} from "./numbers-v1-a2-pregistration-details.js";

export type NumbersV1A2PRegistrationDetailsCampaignList = {
  data: NumbersV1A2PRegistrationDetails[];
  nextToken?: string | null;
};

export const numbersV1A2PRegistrationDetailsCampaignListSchema: Schema<NumbersV1A2PRegistrationDetailsCampaignList> =
  s.object<NumbersV1A2PRegistrationDetailsCampaignList>({
    data: s.array(s.lazy(() => numbersV1A2PRegistrationDetailsSchema)),
    nextToken: s.optionalNullable(s.string()),
  });
