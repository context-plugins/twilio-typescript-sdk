import { s, type Schema } from "../core/index.js";

export type Configuration3 = {
  intelligenceConfigurationIds?: string[];
};

export const configuration3Schema: Schema<Configuration3> = s.object<Configuration3>({
  intelligenceConfigurationIds: s.optional(s.array(s.string())),
});
