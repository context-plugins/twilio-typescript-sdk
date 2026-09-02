import { s, type EnumSchema } from "../core/index.js";

export const TollfreeVerificationEnumUseCaseCategory = {
  TwoFactorAuthentication: "TWO_FACTOR_AUTHENTICATION",
  AccountNotifications: "ACCOUNT_NOTIFICATIONS",
  CustomerCare: "CUSTOMER_CARE",
  CharityNonprofit: "CHARITY_NONPROFIT",
  DeliveryNotifications: "DELIVERY_NOTIFICATIONS",
  FraudAlertMessaging: "FRAUD_ALERT_MESSAGING",
  Events: "EVENTS",
  HigherEducation: "HIGHER_EDUCATION",
  K12: "K12",
  Marketing: "MARKETING",
  PollingAndVotingNonPolitical: "POLLING_AND_VOTING_NON_POLITICAL",
  PoliticalElectionCampaigns: "POLITICAL_ELECTION_CAMPAIGNS",
  PublicServiceAnnouncement: "PUBLIC_SERVICE_ANNOUNCEMENT",
  SecurityAlert: "SECURITY_ALERT",
} as const;
export type TollfreeVerificationEnumUseCaseCategory =
  | (typeof TollfreeVerificationEnumUseCaseCategory)[keyof typeof TollfreeVerificationEnumUseCaseCategory]
  | (string & {});

export const tollfreeVerificationEnumUseCaseCategorySchema: EnumSchema<TollfreeVerificationEnumUseCaseCategory> =
  s.enumOf<TollfreeVerificationEnumUseCaseCategory>(TollfreeVerificationEnumUseCaseCategory);
