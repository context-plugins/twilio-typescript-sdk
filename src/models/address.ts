import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address = {
  /** The street address, ex: 101 Spear St */
  street: string;
  /** The building information, ex : 5th floor. */
  street2?: string;
  /** The city name, ex: San Francisco. */
  city: string;
  /**
   * The state name, ex: CA or California. Note this should match the losing carrier’s information
   * exactly. So if they spell out the entire state’s name instead of abbreviating it, please do so.
   */
  state: string;
  /** The zip code, ex: 94105. */
  zip: string;
  /** The country, ex: USA. */
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
