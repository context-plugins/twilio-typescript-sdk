import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Conversation configuration settings. */
export type Configuration3 = {
  /** A list of Conversational Intelligence configuration IDs. */
  intelligenceConfigurationIds?: string[];
};

export const configuration3Schema: Schema<Configuration3> = s.object<Configuration3>({
  intelligenceConfigurationIds: s.optional(s.array(s.string())),
});
