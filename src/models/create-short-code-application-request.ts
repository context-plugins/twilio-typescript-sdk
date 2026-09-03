import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessInformationSchema, type BusinessInformation } from "./business-information.js";
import { setupSchema, type Setup } from "./setup.js";

export type CreateShortCodeApplicationRequest = {
  friendlyName: string;
  isoCountry: string;
  businessInformation: BusinessInformation;
  setup: Setup;
};

export const createShortCodeApplicationRequestSchema: Schema<CreateShortCodeApplicationRequest> =
  s.object<CreateShortCodeApplicationRequest>({
    friendlyName: s.string(),
    isoCountry: s.string(),
    businessInformation: businessInformationSchema,
    setup: setupSchema,
    _keysMap: {
      friendlyName: "friendly_name",
      isoCountry: "iso_country",
      businessInformation: "business_information",
    },
  });
