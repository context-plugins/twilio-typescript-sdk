import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";
import { identityMatchParametersSchema, type IdentityMatchParameters } from "./identity-match-parameters.js";
import {
  reassignedNumberParametersSchema,
  type ReassignedNumberParameters,
} from "./reassigned-number-parameters.js";
import { riskParametersSchema, type RiskParameters } from "./risk-parameters.js";

export type LookupRequestWithCorId = {
  /** Unique identifier used to match request with response */
  correlationId?: string;
  phoneNumber: string;
  fields?: Field[];
  countryCode?: string;
  identityMatch?: IdentityMatchParameters;
  reassignedNumber?: ReassignedNumberParameters;
  smsPumpingRisk?: RiskParameters;
};

export const lookupRequestWithCorIdSchema: Schema<LookupRequestWithCorId> = s.object<LookupRequestWithCorId>({
  correlationId: s.optional(s.string()),
  phoneNumber: s.string(),
  fields: s.optional(s.array(s.lazy(() => fieldSchema))),
  countryCode: s.optional(s.string()),
  identityMatch: s.optional(s.lazy(() => identityMatchParametersSchema)),
  reassignedNumber: s.optional(s.lazy(() => reassignedNumberParametersSchema)),
  smsPumpingRisk: s.optional(s.lazy(() => riskParametersSchema)),
  _keysMap: {
    correlationId: "correlation_id",
    phoneNumber: "phone_number",
    countryCode: "country_code",
    identityMatch: "identity_match",
    reassignedNumber: "reassigned_number",
    smsPumpingRisk: "sms_pumping_risk",
  },
});
