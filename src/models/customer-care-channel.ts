import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerCareChannel = {
  TollFreeNumber: "TOLL_FREE_NUMBER",
  Email: "EMAIL",
} as const;
export type CustomerCareChannel =
  | (typeof CustomerCareChannel)[keyof typeof CustomerCareChannel]
  | (string & {});

export const customerCareChannelSchema: EnumSchema<CustomerCareChannel> =
  s.enumOf<CustomerCareChannel>(CustomerCareChannel);
