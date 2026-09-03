import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Transport = {
  Usb: "usb",
  Nfc: "nfc",
  Ble: "ble",
  SmartCard: "smart-card",
  Internal: "internal",
  Hybrid: "hybrid",
} as const;
export type Transport = (typeof Transport)[keyof typeof Transport] | (string & {});

export const transportSchema: EnumSchema<Transport> = s.enumOf<Transport>(Transport);
