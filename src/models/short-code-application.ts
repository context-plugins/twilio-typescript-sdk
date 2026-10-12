import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessInformation1Schema, type BusinessInformation1 } from "./business-information1.js";
import { complianceKeywordsSchema, type ComplianceKeywords } from "./compliance-keywords.js";
import { contentExamplesSchema, type ContentExamples } from "./content-examples.js";
import { setup1Schema, type Setup1 } from "./setup1.js";
import { smsCampaignDetailsSchema, type SmsCampaignDetails } from "./sms-campaign-details.js";
import { stateSchema, type State } from "./state.js";
import { userSignUpSchema, type UserSignUp } from "./user-sign-up.js";

export type ShortCodeApplication = {
  /** The unique identifier of the Short Code Application. */
  sid?: string;
  /** The Application Requirements SID. */
  applicationRequirementsSid?: string;
  /** The version of the application requirements. */
  applicationRequirementsVersion?: number;
  /** The Account SID associated with the application. */
  accountSid?: string;
  /** The Bundle SID for regulatory compliance. */
  bundleSid?: string;
  /** The reviewer of the application. */
  reviewer?: string;
  /** The Zendesk ticket ID associated with the application. */
  zendeskTicketId?: string;
  /** The friendly name of the application. */
  friendlyName?: string;
  /** The notification emails for the application. */
  notificationEmails?: string[];
  /** The ISO country code. */
  isoCountry?: string;
  /** The state of the application. */
  state?: State;
  /** Setup configuration for the application. */
  setup?: Setup1;
  /** Business information associated with the application. */
  businessInformation?: BusinessInformation1;
  /** User sign-up configuration for the application. */
  userSignUp?: UserSignUp;
  /** Compliance keywords for the application. */
  complianceKeywords?: ComplianceKeywords;
  /** Content examples for the application. */
  contentExamples?: ContentExamples;
  /** SMS campaign details for the application. */
  smsCampaignDetails?: SmsCampaignDetails;
  /** The date and time the application was created. */
  dateCreated?: Date;
  /** The date and time the application was last updated. */
  dateUpdated?: Date;
  /** The identity of the user who created the application. */
  createdBy?: string;
  /** The identity of the user who last updated the application. */
  updatedBy?: string;
};

export const shortCodeApplicationSchema: Schema<ShortCodeApplication> = s.object<ShortCodeApplication>({
  sid: s.optional(s.string()),
  applicationRequirementsSid: s.optional(s.string()),
  applicationRequirementsVersion: s.optional(s.int()),
  accountSid: s.optional(s.string()),
  bundleSid: s.optional(s.string()),
  reviewer: s.optional(s.string()),
  zendeskTicketId: s.optional(s.string()),
  friendlyName: s.optional(s.string()),
  notificationEmails: s.optional(s.array(s.string())),
  isoCountry: s.optional(s.string()),
  state: s.optional(s.lazy(() => stateSchema)),
  setup: s.optional(s.lazy(() => setup1Schema)),
  businessInformation: s.optional(s.lazy(() => businessInformation1Schema)),
  userSignUp: s.optional(s.lazy(() => userSignUpSchema)),
  complianceKeywords: s.optional(s.lazy(() => complianceKeywordsSchema)),
  contentExamples: s.optional(s.lazy(() => contentExamplesSchema)),
  smsCampaignDetails: s.optional(s.lazy(() => smsCampaignDetailsSchema)),
  dateCreated: s.optional(s.dateTime()),
  dateUpdated: s.optional(s.dateTime()),
  createdBy: s.optional(s.string()),
  updatedBy: s.optional(s.string()),
  _keysMap: {
    applicationRequirementsSid: "application_requirements_sid",
    applicationRequirementsVersion: "application_requirements_version",
    accountSid: "account_sid",
    bundleSid: "bundle_sid",
    zendeskTicketId: "zendesk_ticket_id",
    friendlyName: "friendly_name",
    notificationEmails: "notification_emails",
    isoCountry: "iso_country",
    businessInformation: "business_information",
    userSignUp: "user_sign_up",
    complianceKeywords: "compliance_keywords",
    contentExamples: "content_examples",
    smsCampaignDetails: "sms_campaign_details",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    createdBy: "created_by",
    updatedBy: "updated_by",
  },
});
