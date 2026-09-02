import { s, type Schema } from "../core/index.js";

export type FlexV1FlexTeamContext = {
  teamSetupComplete?: boolean | null;
  conversationalInsightsEnabled?: boolean | null;
  historicalReportingEnabled?: boolean | null;
};

export const flexV1FlexTeamContextSchema: Schema<FlexV1FlexTeamContext> = s.object<FlexV1FlexTeamContext>({
  teamSetupComplete: s.optionalNullable(s.boolean()),
  conversationalInsightsEnabled: s.optionalNullable(s.boolean()),
  historicalReportingEnabled: s.optionalNullable(s.boolean()),
  _keysMap: {
    teamSetupComplete: "team_setup_complete",
    conversationalInsightsEnabled: "conversational_insights_enabled",
    historicalReportingEnabled: "historical_reporting_enabled",
  },
});
