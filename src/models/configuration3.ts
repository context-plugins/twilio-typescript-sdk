import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Configuration3 = {
  intelligenceConfigurationIds?: string[];
};

export const configuration3Schema: Schema<Configuration3> = s.object<Configuration3>({
  intelligenceConfigurationIds: s.optional(s.array(s.string())),
});
