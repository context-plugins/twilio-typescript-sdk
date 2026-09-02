import { s, type Schema } from "../core/index.js";

export type Address = {
  street: string;
  street2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  street: s.string(),
  street2: s.optional(s.string()),
  city: s.string(),
  state: s.string(),
  zip: s.string(),
  country: s.string(),
  _keysMap: {
    street2: "street_2",
  },
});
