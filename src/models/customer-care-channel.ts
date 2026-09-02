import { s, type EnumSchema } from "../core/index.js";

export const CustomerCareChannel = {
  TollFreeNumber: "TOLL_FREE_NUMBER",
  Email: "EMAIL",
} as const;
export type CustomerCareChannel =
  | (typeof CustomerCareChannel)[keyof typeof CustomerCareChannel]
  | (string & {});

export const customerCareChannelSchema: EnumSchema<CustomerCareChannel> =
  s.enumOf<CustomerCareChannel>(CustomerCareChannel);
