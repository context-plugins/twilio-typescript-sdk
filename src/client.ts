import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { RawClient } from "./core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "./core/response-error.js";
import * as s from "./core/validation/index.js";
import {
  accountsCallsRecordingsSidJson201041408Error1Schema,
  type AccountsCallsRecordingsSidJson201041408Error1,
} from "./models/accounts-calls-recordings-sid-json201041408-error1.js";
import {
  approvePasskeysChallengeRequestSchema,
  type ApprovePasskeysChallengeRequest,
} from "./models/approve-passkeys-challenge-request.js";
import { lookupRequestSchema, type LookupRequest } from "./models/lookup-request.js";
import { lookupResponse1Schema, type LookupResponse1 } from "./models/lookup-response1.js";
import { overridesRequestSchema, type OverridesRequest } from "./models/overrides-request.js";
import { overridesResponseSchema, type OverridesResponse } from "./models/overrides-response.js";
import {
  rateLimitListResponseSchema,
  type RateLimitListResponse,
} from "./models/rate-limit-list-response.js";
import { rateLimitRequestSchema, type RateLimitRequest } from "./models/rate-limit-request.js";
import { rateLimitResponseSchema, type RateLimitResponse } from "./models/rate-limit-response.js";
import {
  v2ServicesPasskeysApproveChallengeResponseSchema,
  type V2ServicesPasskeysApproveChallengeResponse,
} from "./models/v2-services-passkeys-approve-challenge-response.js";
import {
  v2ServicesPasskeysVerifyFactorResponseSchema,
  type V2ServicesPasskeysVerifyFactorResponse,
} from "./models/v2-services-passkeys-verify-factor-response.js";
import {
  verifyPasskeysFactorRequestSchema,
  type VerifyPasskeysFactorRequest,
} from "./models/verify-passkeys-factor-request.js";
import { Api20100401Account } from "./resources/api20100401-account.js";
import { Api20100401AddOnResult } from "./resources/api20100401-add-on-result.js";
import { Api20100401Address } from "./resources/api20100401-address.js";
import { Api20100401AllTime } from "./resources/api20100401-all-time.js";
import { Api20100401Application } from "./resources/api20100401-application.js";
import { Api20100401AssignedAddOnExtension } from "./resources/api20100401-assigned-add-on-extension.js";
import { Api20100401AssignedAddOn } from "./resources/api20100401-assigned-add-on.js";
import { Api20100401AuthCallsCredentialListMapping } from "./resources/api20100401-auth-calls-credential-list-mapping.js";
import { Api20100401AuthCallsIpAccessControlListMapping } from "./resources/api20100401-auth-calls-ip-access-control-list-mapping.js";
import { Api20100401AuthRegistrationsCredentialListMapping } from "./resources/api20100401-auth-registrations-credential-list-mapping.js";
import { Api20100401AuthorizedConnectApp } from "./resources/api20100401-authorized-connect-app.js";
import { Api20100401AvailablePhoneNumberCountry } from "./resources/api20100401-available-phone-number-country.js";
import { Api20100401Balance } from "./resources/api20100401-balance.js";
import { Api20100401CallNotification } from "./resources/api20100401-call-notification.js";
import { Api20100401CallRecording } from "./resources/api20100401-call-recording.js";
import { Api20100401CallTranscription } from "./resources/api20100401-call-transcription.js";
import { Api20100401Call } from "./resources/api20100401-call.js";
import { Api20100401ConferenceRecording } from "./resources/api20100401-conference-recording.js";
import { Api20100401Conference } from "./resources/api20100401-conference.js";
import { Api20100401ConnectApp } from "./resources/api20100401-connect-app.js";
import { Api20100401CredentialListMapping } from "./resources/api20100401-credential-list-mapping.js";
import { Api20100401CredentialList } from "./resources/api20100401-credential-list.js";
import { Api20100401Credential } from "./resources/api20100401-credential.js";
import { Api20100401Daily } from "./resources/api20100401-daily.js";
import { Api20100401Data } from "./resources/api20100401-data.js";
import { Api20100401DependentPhoneNumber } from "./resources/api20100401-dependent-phone-number.js";
import { Api20100401Domain } from "./resources/api20100401-domain.js";
import { Api20100401Event } from "./resources/api20100401-event.js";
import { Api20100401Feedback } from "./resources/api20100401-feedback.js";
import { Api20100401IncomingPhoneNumberLocal } from "./resources/api20100401-incoming-phone-number-local.js";
import { Api20100401IncomingPhoneNumberMobile } from "./resources/api20100401-incoming-phone-number-mobile.js";
import { Api20100401IncomingPhoneNumberTollFree } from "./resources/api20100401-incoming-phone-number-toll-free.js";
import { Api20100401IncomingPhoneNumber } from "./resources/api20100401-incoming-phone-number.js";
import { Api20100401IpAccessControlListMapping } from "./resources/api20100401-ip-access-control-list-mapping.js";
import { Api20100401IpAccessControlList } from "./resources/api20100401-ip-access-control-list.js";
import { Api20100401Key } from "./resources/api20100401-key.js";
import { Api20100401LastMonth } from "./resources/api20100401-last-month.js";
import { Api20100401Local } from "./resources/api20100401-local.js";
import { Api20100401MachineToMachine } from "./resources/api20100401-machine-to-machine.js";
import { Api20100401MediaInstance } from "./resources/api20100401-media-instance.js";
import { Api20100401Media } from "./resources/api20100401-media.js";
import { Api20100401Member } from "./resources/api20100401-member.js";
import { Api20100401Message } from "./resources/api20100401-message.js";
import { Api20100401Mobile } from "./resources/api20100401-mobile.js";
import { Api20100401Monthly } from "./resources/api20100401-monthly.js";
import { Api20100401National } from "./resources/api20100401-national.js";
import { Api20100401NewKey } from "./resources/api20100401-new-key.js";
import { Api20100401NewSigningKey } from "./resources/api20100401-new-signing-key.js";
import { Api20100401Notification } from "./resources/api20100401-notification.js";
import { Api20100401OutgoingCallerId } from "./resources/api20100401-outgoing-caller-id.js";
import { Api20100401Participant } from "./resources/api20100401-participant.js";
import { Api20100401Payload } from "./resources/api20100401-payload.js";
import { Api20100401Payment } from "./resources/api20100401-payment.js";
import { Api20100401Queue } from "./resources/api20100401-queue.js";
import { Api20100401Record } from "./resources/api20100401-record.js";
import { Api20100401RecordingTranscription } from "./resources/api20100401-recording-transcription.js";
import { Api20100401Recording } from "./resources/api20100401-recording.js";
import { Api20100401SharedCost } from "./resources/api20100401-shared-cost.js";
import { Api20100401ShortCode } from "./resources/api20100401-short-code.js";
import { Api20100401SigningKey } from "./resources/api20100401-signing-key.js";
import { Api20100401SipIpAddress } from "./resources/api20100401-sip-ip-address.js";
import { Api20100401Siprec } from "./resources/api20100401-siprec.js";
import { Api20100401Stream } from "./resources/api20100401-stream.js";
import { Api20100401ThisMonth } from "./resources/api20100401-this-month.js";
import { Api20100401Today } from "./resources/api20100401-today.js";
import { Api20100401Token } from "./resources/api20100401-token.js";
import { Api20100401TollFree } from "./resources/api20100401-toll-free.js";
import { Api20100401Transcription } from "./resources/api20100401-transcription.js";
import { Api20100401Trigger } from "./resources/api20100401-trigger.js";
import { Api20100401UserDefinedMessageSubscription } from "./resources/api20100401-user-defined-message-subscription.js";
import { Api20100401UserDefinedMessage } from "./resources/api20100401-user-defined-message.js";
import { Api20100401ValidationRequest } from "./resources/api20100401-validation-request.js";
import { Api20100401Voip } from "./resources/api20100401-voip.js";
import { Api20100401Yearly } from "./resources/api20100401-yearly.js";
import { Api20100401Yesterday } from "./resources/api20100401-yesterday.js";
import { ContentV2ContentAndApprovals } from "./resources/content-v2-content-and-approvals.js";
import { ContentV2Content } from "./resources/content-v2-content.js";
import { Contentv1ApprovalCreate } from "./resources/contentv1-approval-create.js";
import { Contentv1ApprovalFetch } from "./resources/contentv1-approval-fetch.js";
import { Contentv1ContentAndApprovalsApi } from "./resources/contentv1-content-and-approvals-api.js";
import { Contentv1ContentApi } from "./resources/contentv1-content-api.js";
import { Contentv1LegacyContentApi } from "./resources/contentv1-legacy-content-api.js";
import { ConversationsV1AddressConfiguration } from "./resources/conversations-v1-address-configuration.js";
import { ConversationsV1Binding } from "./resources/conversations-v1-binding.js";
import { ConversationsV1ConfigurationApi } from "./resources/conversations-v1-configuration-api.js";
import { ConversationsV1ConversationApi } from "./resources/conversations-v1-conversation-api.js";
import { ConversationsV1ConversationWithParticipantsApi } from "./resources/conversations-v1-conversation-with-participants-api.js";
import { ConversationsV1CredentialApi } from "./resources/conversations-v1-credential-api.js";
import { ConversationsV1DeliveryReceipt } from "./resources/conversations-v1-delivery-receipt.js";
import { ConversationsV1Message } from "./resources/conversations-v1-message.js";
import { ConversationsV1Notification } from "./resources/conversations-v1-notification.js";
import { ConversationsV1ParticipantConversationApi } from "./resources/conversations-v1-participant-conversation-api.js";
import { ConversationsV1Participant } from "./resources/conversations-v1-participant.js";
import { ConversationsV1RoleApi } from "./resources/conversations-v1-role-api.js";
import { ConversationsV1ServiceApi } from "./resources/conversations-v1-service-api.js";
import { ConversationsV1UserApi } from "./resources/conversations-v1-user-api.js";
import { ConversationsV1UserConversation } from "./resources/conversations-v1-user-conversation.js";
import { ConversationsV1Webhook } from "./resources/conversations-v1-webhook.js";
import { ConversationsV2ActionApi } from "./resources/conversations-v2-action-api.js";
import { ConversationsV2CommunicationApi } from "./resources/conversations-v2-communication-api.js";
import { ConversationsV2ConfigurationApi } from "./resources/conversations-v2-configuration-api.js";
import { ConversationsV2ConversationApi } from "./resources/conversations-v2-conversation-api.js";
import { ConversationsV2Operation } from "./resources/conversations-v2-operation.js";
import { ConversationsV2ParticipantApi } from "./resources/conversations-v2-participant-api.js";
import { FlexV1Assessments } from "./resources/flex-v1-assessments.js";
import { FlexV1ChannelApi } from "./resources/flex-v1-channel-api.js";
import { FlexV1ConfigurationApi } from "./resources/flex-v1-configuration-api.js";
import { FlexV1ConfiguredPlugin } from "./resources/flex-v1-configured-plugin.js";
import { FlexV1FlexFlowApi } from "./resources/flex-v1-flex-flow-api.js";
import { FlexV1InsightsAssessmentsCommentApi } from "./resources/flex-v1-insights-assessments-comment-api.js";
import { FlexV1InsightsConversationsApi } from "./resources/flex-v1-insights-conversations-api.js";
import { FlexV1InsightsQuestionnairesApi } from "./resources/flex-v1-insights-questionnaires-api.js";
import { FlexV1InsightsQuestionnairesCategoryApi } from "./resources/flex-v1-insights-questionnaires-category-api.js";
import { FlexV1InsightsQuestionnairesQuestionApi } from "./resources/flex-v1-insights-questionnaires-question-api.js";
import { FlexV1InsightsSegmentsApi } from "./resources/flex-v1-insights-segments-api.js";
import { FlexV1InsightsSessionApi } from "./resources/flex-v1-insights-session-api.js";
import { FlexV1InsightsSettingsAnswerSetsApi } from "./resources/flex-v1-insights-settings-answer-sets-api.js";
import { FlexV1InsightsSettingsCommentApi } from "./resources/flex-v1-insights-settings-comment-api.js";
import { FlexV1InsightsUserRolesApi } from "./resources/flex-v1-insights-user-roles-api.js";
import { FlexV1InteractionApi } from "./resources/flex-v1-interaction-api.js";
import { FlexV1InteractionChannelInvite } from "./resources/flex-v1-interaction-channel-invite.js";
import { FlexV1InteractionChannelParticipant } from "./resources/flex-v1-interaction-channel-participant.js";
import { FlexV1InteractionChannel } from "./resources/flex-v1-interaction-channel.js";
import { FlexV1InteractionTransfer } from "./resources/flex-v1-interaction-transfer.js";
import { FlexV1PluginApi } from "./resources/flex-v1-plugin-api.js";
import { FlexV1PluginArchiveApi } from "./resources/flex-v1-plugin-archive-api.js";
import { FlexV1PluginConfigurationApi } from "./resources/flex-v1-plugin-configuration-api.js";
import { FlexV1PluginConfigurationArchiveApi } from "./resources/flex-v1-plugin-configuration-archive-api.js";
import { FlexV1PluginReleaseApi } from "./resources/flex-v1-plugin-release-api.js";
import { FlexV1PluginVersionArchiveApi } from "./resources/flex-v1-plugin-version-archive-api.js";
import { FlexV1PluginVersions } from "./resources/flex-v1-plugin-versions.js";
import { FlexV1ProvisioningStatusApi } from "./resources/flex-v1-provisioning-status-api.js";
import { FlexV1WebChannelApi } from "./resources/flex-v1-web-channel-api.js";
import { FlexV2FlexUserApi } from "./resources/flex-v2-flex-user-api.js";
import { FlexV2WebChannels } from "./resources/flex-v2-web-channels.js";
import { InsightsV1Annotation } from "./resources/insights-v1-annotation.js";
import { InsightsV1CallApi } from "./resources/insights-v1-call-api.js";
import { InsightsV1CallSummariesApi } from "./resources/insights-v1-call-summaries-api.js";
import { InsightsV1CallSummaryApi } from "./resources/insights-v1-call-summary-api.js";
import { InsightsV1ConferenceApi } from "./resources/insights-v1-conference-api.js";
import { InsightsV1ConferenceParticipant } from "./resources/insights-v1-conference-participant.js";
import { InsightsV1CreateAccountReport } from "./resources/insights-v1-create-account-report.js";
import { InsightsV1CreateInboundPhoneNumbersReport } from "./resources/insights-v1-create-inbound-phone-numbers-report.js";
import { InsightsV1CreateOutboundPhoneNumbersReport } from "./resources/insights-v1-create-outbound-phone-numbers-report.js";
import { InsightsV1Event } from "./resources/insights-v1-event.js";
import { InsightsV1GetAccountReport } from "./resources/insights-v1-get-account-report.js";
import { InsightsV1GetInboundPhoneNumbersReport } from "./resources/insights-v1-get-inbound-phone-numbers-report.js";
import { InsightsV1GetOutboundPhoneNumbersReport } from "./resources/insights-v1-get-outbound-phone-numbers-report.js";
import { InsightsV1Metric } from "./resources/insights-v1-metric.js";
import { InsightsV1Participant } from "./resources/insights-v1-participant.js";
import { InsightsV1Room } from "./resources/insights-v1-room.js";
import { InsightsV1Setting } from "./resources/insights-v1-setting.js";
import { LookupsV1PhoneNumberApi } from "./resources/lookups-v1-phone-number-api.js";
import { LookupsV2PhoneNumber } from "./resources/lookups-v2-phone-number.js";
import { MessagingV1AlphaSender } from "./resources/messaging-v1-alpha-sender.js";
import { MessagingV1BrandRegistrationOtp } from "./resources/messaging-v1-brand-registration-otp.js";
import { MessagingV1BrandRegistration } from "./resources/messaging-v1-brand-registration.js";
import { MessagingV1BrandVetting } from "./resources/messaging-v1-brand-vetting.js";
import { MessagingV1ChannelSender } from "./resources/messaging-v1-channel-sender.js";
import { MessagingV1Deactivations } from "./resources/messaging-v1-deactivations.js";
import { MessagingV1DestinationAlphaSender } from "./resources/messaging-v1-destination-alpha-sender.js";
import { MessagingV1DomainCerts } from "./resources/messaging-v1-domain-certs.js";
import { MessagingV1DomainConfigApi } from "./resources/messaging-v1-domain-config-api.js";
import { MessagingV1DomainConfigMessagingServiceApi } from "./resources/messaging-v1-domain-config-messaging-service-api.js";
import { MessagingV1DomainValidateDns } from "./resources/messaging-v1-domain-validate-dns.js";
import { MessagingV1ExternalCampaignApi } from "./resources/messaging-v1-external-campaign-api.js";
import { MessagingV1LinkshorteningMessagingServiceApi } from "./resources/messaging-v1-linkshortening-messaging-service-api.js";
import { MessagingV1LinkshorteningMessagingServiceDomainAssociationApi } from "./resources/messaging-v1-linkshortening-messaging-service-domain-association-api.js";
import { MessagingV1PhoneNumber } from "./resources/messaging-v1-phone-number.js";
import { MessagingV1RequestManagedCertApi } from "./resources/messaging-v1-request-managed-cert-api.js";
import { MessagingV1ServiceApi } from "./resources/messaging-v1-service-api.js";
import { MessagingV1ShortCode } from "./resources/messaging-v1-short-code.js";
import { MessagingV1TollfreeVerificationApi } from "./resources/messaging-v1-tollfree-verification-api.js";
import { MessagingV1UsAppToPersonUsecase } from "./resources/messaging-v1-us-app-to-person-usecase.js";
import { MessagingV1UsAppToPerson } from "./resources/messaging-v1-us-app-to-person.js";
import { MessagingV1UsecaseApi } from "./resources/messaging-v1-usecase-api.js";
import { MessagingV2ChannelsSender } from "./resources/messaging-v2-channels-sender.js";
import { MessagingV2DomainCerts } from "./resources/messaging-v2-domain-certs.js";
import { MessagingV2TypingIndicator } from "./resources/messaging-v2-typing-indicator.js";
import { MessagingV3TypingIndicator } from "./resources/messaging-v3-typing-indicator.js";
import { NumbersV1BulkEligibilityApi } from "./resources/numbers-v1-bulk-eligibility-api.js";
import { NumbersV1EligibilityApi } from "./resources/numbers-v1-eligibility-api.js";
import { NumbersV1PortingPortInApi } from "./resources/numbers-v1-porting-port-in-api.js";
import { NumbersV1PortingPortInPhoneNumberApi } from "./resources/numbers-v1-porting-port-in-phone-number-api.js";
import { NumbersV1PortingPortabilityApi } from "./resources/numbers-v1-porting-portability-api.js";
import { NumbersV1PortingWebhookConfigurationApi } from "./resources/numbers-v1-porting-webhook-configuration-api.js";
import { NumbersV1PortingWebhookConfigurationDeleteApi } from "./resources/numbers-v1-porting-webhook-configuration-delete-api.js";
import { NumbersV1PortingWebhookConfigurationFetchApi } from "./resources/numbers-v1-porting-webhook-configuration-fetch-api.js";
import { NumbersV1SenderIdRegistrationEmbeddedSession } from "./resources/numbers-v1-sender-id-registration-embedded-session.js";
import { NumbersV1SenderIdRegistration } from "./resources/numbers-v1-sender-id-registration.js";
import { NumbersV1SigningRequestConfigurationApi } from "./resources/numbers-v1-signing-request-configuration-api.js";
import { NumbersV2AuthorizationDocumentApi } from "./resources/numbers-v2-authorization-document-api.js";
import { NumbersV2BulkHostedNumberOrderApi } from "./resources/numbers-v2-bulk-hosted-number-order-api.js";
import { NumbersV2BundleCloneApi } from "./resources/numbers-v2-bundle-clone-api.js";
import { NumbersV2BundleCopy } from "./resources/numbers-v2-bundle-copy.js";
import { NumbersV2Bundle } from "./resources/numbers-v2-bundle.js";
import { NumbersV2DependentHostedNumberOrder } from "./resources/numbers-v2-dependent-hosted-number-order.js";
import { NumbersV2EndUserType } from "./resources/numbers-v2-end-user-type.js";
import { NumbersV2EndUser } from "./resources/numbers-v2-end-user.js";
import { NumbersV2Evaluation } from "./resources/numbers-v2-evaluation.js";
import { NumbersV2HostedNumberOrderApi } from "./resources/numbers-v2-hosted-number-order-api.js";
import { NumbersV2ItemAssignment } from "./resources/numbers-v2-item-assignment.js";
import { NumbersV2Regulation } from "./resources/numbers-v2-regulation.js";
import { NumbersV2ReplaceItems } from "./resources/numbers-v2-replace-items.js";
import { NumbersV2SupportingDocumentType } from "./resources/numbers-v2-supporting-document-type.js";
import { NumbersV2SupportingDocument } from "./resources/numbers-v2-supporting-document.js";
import { NumbersV3HostedNumbersHostedNumberOrderApi } from "./resources/numbers-v3-hosted-numbers-hosted-number-order-api.js";
import { ProxyV1Interaction } from "./resources/proxy-v1-interaction.js";
import { ProxyV1MessageInteraction } from "./resources/proxy-v1-message-interaction.js";
import { ProxyV1Participant } from "./resources/proxy-v1-participant.js";
import { ProxyV1PhoneNumber } from "./resources/proxy-v1-phone-number.js";
import { ProxyV1ServiceApi } from "./resources/proxy-v1-service-api.js";
import { ProxyV1Session } from "./resources/proxy-v1-session.js";
import { StudioV1EngagementContext } from "./resources/studio-v1-engagement-context.js";
import { StudioV1Engagement } from "./resources/studio-v1-engagement.js";
import { StudioV1ExecutionContext } from "./resources/studio-v1-execution-context.js";
import { StudioV1ExecutionStepContext } from "./resources/studio-v1-execution-step-context.js";
import { StudioV1ExecutionStep } from "./resources/studio-v1-execution-step.js";
import { StudioV1Execution } from "./resources/studio-v1-execution.js";
import { StudioV1FlowApi } from "./resources/studio-v1-flow-api.js";
import { StudioV1StepContext } from "./resources/studio-v1-step-context.js";
import { StudioV1Step } from "./resources/studio-v1-step.js";
import { StudioV2ExecutionContext } from "./resources/studio-v2-execution-context.js";
import { StudioV2ExecutionStepContext } from "./resources/studio-v2-execution-step-context.js";
import { StudioV2ExecutionStep } from "./resources/studio-v2-execution-step.js";
import { StudioV2Execution } from "./resources/studio-v2-execution.js";
import { StudioV2FlowApi } from "./resources/studio-v2-flow-api.js";
import { StudioV2FlowRevision } from "./resources/studio-v2-flow-revision.js";
import { StudioV2FlowTestUserApi } from "./resources/studio-v2-flow-test-user-api.js";
import { StudioV2FlowValidateApi } from "./resources/studio-v2-flow-validate-api.js";
import { SyncV1DocumentPermission } from "./resources/sync-v1-document-permission.js";
import { SyncV1Document } from "./resources/sync-v1-document.js";
import { SyncV1ServiceApi } from "./resources/sync-v1-service-api.js";
import { SyncV1StreamMessage } from "./resources/sync-v1-stream-message.js";
import { SyncV1SyncListItem } from "./resources/sync-v1-sync-list-item.js";
import { SyncV1SyncListPermission } from "./resources/sync-v1-sync-list-permission.js";
import { SyncV1SyncList } from "./resources/sync-v1-sync-list.js";
import { SyncV1SyncMapItem } from "./resources/sync-v1-sync-map-item.js";
import { SyncV1SyncMapPermission } from "./resources/sync-v1-sync-map-permission.js";
import { SyncV1SyncMap } from "./resources/sync-v1-sync-map.js";
import { SyncV1SyncStream } from "./resources/sync-v1-sync-stream.js";
import { TaskrouterV1Activity } from "./resources/taskrouter-v1-activity.js";
import { TaskrouterV1Event } from "./resources/taskrouter-v1-event.js";
import { TaskrouterV1TaskChannel } from "./resources/taskrouter-v1-task-channel.js";
import { TaskrouterV1TaskQueueBulkRealTimeStatistics } from "./resources/taskrouter-v1-task-queue-bulk-real-time-statistics.js";
import { TaskrouterV1TaskQueueCumulativeStatistics } from "./resources/taskrouter-v1-task-queue-cumulative-statistics.js";
import { TaskrouterV1TaskQueueRealTimeStatistics } from "./resources/taskrouter-v1-task-queue-real-time-statistics.js";
import { TaskrouterV1TaskQueueStatistics } from "./resources/taskrouter-v1-task-queue-statistics.js";
import { TaskrouterV1TaskQueue } from "./resources/taskrouter-v1-task-queue.js";
import { TaskrouterV1TaskQueuesStatistics } from "./resources/taskrouter-v1-task-queues-statistics.js";
import { TaskrouterV1TaskReservation } from "./resources/taskrouter-v1-task-reservation.js";
import { TaskrouterV1Task } from "./resources/taskrouter-v1-task.js";
import { TaskrouterV1WorkerChannel } from "./resources/taskrouter-v1-worker-channel.js";
import { TaskrouterV1WorkerReservation } from "./resources/taskrouter-v1-worker-reservation.js";
import { TaskrouterV1WorkerStatistics } from "./resources/taskrouter-v1-worker-statistics.js";
import { TaskrouterV1Worker } from "./resources/taskrouter-v1-worker.js";
import { TaskrouterV1WorkersCumulativeStatistics } from "./resources/taskrouter-v1-workers-cumulative-statistics.js";
import { TaskrouterV1WorkersRealTimeStatistics } from "./resources/taskrouter-v1-workers-real-time-statistics.js";
import { TaskrouterV1WorkersStatistics } from "./resources/taskrouter-v1-workers-statistics.js";
import { TaskrouterV1WorkflowCumulativeStatistics } from "./resources/taskrouter-v1-workflow-cumulative-statistics.js";
import { TaskrouterV1WorkflowRealTimeStatistics } from "./resources/taskrouter-v1-workflow-real-time-statistics.js";
import { TaskrouterV1WorkflowStatistics } from "./resources/taskrouter-v1-workflow-statistics.js";
import { TaskrouterV1Workflow } from "./resources/taskrouter-v1-workflow.js";
import { TaskrouterV1WorkspaceApi } from "./resources/taskrouter-v1-workspace-api.js";
import { TaskrouterV1WorkspaceCumulativeStatistics } from "./resources/taskrouter-v1-workspace-cumulative-statistics.js";
import { TaskrouterV1WorkspaceRealTimeStatistics } from "./resources/taskrouter-v1-workspace-real-time-statistics.js";
import { TaskrouterV1WorkspaceStatistics } from "./resources/taskrouter-v1-workspace-statistics.js";
import { TrusthubV1ComplianceInquiries } from "./resources/trusthub-v1-compliance-inquiries.js";
import { TrusthubV1ComplianceRegistrationInquiries } from "./resources/trusthub-v1-compliance-registration-inquiries.js";
import { TrusthubV1ComplianceTollfreeInquiries } from "./resources/trusthub-v1-compliance-tollfree-inquiries.js";
import { TrusthubV1CustomerProfilesChannelEndpointAssignment } from "./resources/trusthub-v1-customer-profiles-channel-endpoint-assignment.js";
import { TrusthubV1CustomerProfilesEntityAssignments } from "./resources/trusthub-v1-customer-profiles-entity-assignments.js";
import { TrusthubV1CustomerProfilesEvaluations } from "./resources/trusthub-v1-customer-profiles-evaluations.js";
import { TrusthubV1CustomerProfiles } from "./resources/trusthub-v1-customer-profiles.js";
import { TrusthubV1EndUserApi } from "./resources/trusthub-v1-end-user-api.js";
import { TrusthubV1EndUserType } from "./resources/trusthub-v1-end-user-type.js";
import { TrusthubV1PoliciesApi } from "./resources/trusthub-v1-policies-api.js";
import { TrusthubV1SupportingDocumentApi } from "./resources/trusthub-v1-supporting-document-api.js";
import { TrusthubV1SupportingDocumentType } from "./resources/trusthub-v1-supporting-document-type.js";
import { TrusthubV1TrustProductsChannelEndpointAssignment } from "./resources/trusthub-v1-trust-products-channel-endpoint-assignment.js";
import { TrusthubV1TrustProductsEntityAssignments } from "./resources/trusthub-v1-trust-products-entity-assignments.js";
import { TrusthubV1TrustProductsEvaluations } from "./resources/trusthub-v1-trust-products-evaluations.js";
import { TrusthubV1TrustProducts } from "./resources/trusthub-v1-trust-products.js";
import { TwilioInsights } from "./resources/twilio-insights.js";
import { V2ShortCodeApplications } from "./resources/v2-short-code-applications.js";
import { VerifyV2AccessToken } from "./resources/verify-v2-access-token.js";
import { VerifyV2Bucket } from "./resources/verify-v2-bucket.js";
import { VerifyV2Challenge } from "./resources/verify-v2-challenge.js";
import { VerifyV2Entity } from "./resources/verify-v2-entity.js";
import { VerifyV2Factor } from "./resources/verify-v2-factor.js";
import { VerifyV2FormApi } from "./resources/verify-v2-form-api.js";
import { VerifyV2MessagingConfiguration } from "./resources/verify-v2-messaging-configuration.js";
import { VerifyV2NewChallenge } from "./resources/verify-v2-new-challenge.js";
import { VerifyV2NewFactor } from "./resources/verify-v2-new-factor.js";
import { VerifyV2Notification } from "./resources/verify-v2-notification.js";
import { VerifyV2RateLimit } from "./resources/verify-v2-rate-limit.js";
import { VerifyV2SafelistApi } from "./resources/verify-v2-safelist-api.js";
import { VerifyV2ServiceApi } from "./resources/verify-v2-service-api.js";
import { VerifyV2Template } from "./resources/verify-v2-template.js";
import { VerifyV2VerificationAttemptApi } from "./resources/verify-v2-verification-attempt-api.js";
import { VerifyV2VerificationAttemptsSummaryApi } from "./resources/verify-v2-verification-attempts-summary-api.js";
import { VerifyV2VerificationCheck } from "./resources/verify-v2-verification-check.js";
import { VerifyV2Verification } from "./resources/verify-v2-verification.js";
import { VerifyV2Webhook } from "./resources/verify-v2-webhook.js";
import { VideoV1Anonymize } from "./resources/video-v1-anonymize.js";
import { VideoV1CompositionApi } from "./resources/video-v1-composition-api.js";
import { VideoV1CompositionHookApi } from "./resources/video-v1-composition-hook-api.js";
import { VideoV1CompositionSettingsApi } from "./resources/video-v1-composition-settings-api.js";
import { VideoV1Participant } from "./resources/video-v1-participant.js";
import { VideoV1PublishedTrack } from "./resources/video-v1-published-track.js";
import { VideoV1RecordingApi } from "./resources/video-v1-recording-api.js";
import { VideoV1RecordingRules } from "./resources/video-v1-recording-rules.js";
import { VideoV1RecordingSettingsApi } from "./resources/video-v1-recording-settings-api.js";
import { VideoV1RoomApi } from "./resources/video-v1-room-api.js";
import { VideoV1RoomRecording } from "./resources/video-v1-room-recording.js";
import { VideoV1SubscribeRules } from "./resources/video-v1-subscribe-rules.js";
import { VideoV1SubscribedTrack } from "./resources/video-v1-subscribed-track.js";
import { VideoV1Transcriptions } from "./resources/video-v1-transcriptions.js";
import { buildServers, type Servers } from "./servers.js";

export class TwilioSdkClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #api20100401Account?: Api20100401Account;
  #api20100401AddOnResult?: Api20100401AddOnResult;
  #api20100401Address?: Api20100401Address;
  #api20100401AllTime?: Api20100401AllTime;
  #api20100401Application?: Api20100401Application;
  #api20100401AssignedAddOn?: Api20100401AssignedAddOn;
  #api20100401AssignedAddOnExtension?: Api20100401AssignedAddOnExtension;
  #api20100401AuthCallsCredentialListMapping?: Api20100401AuthCallsCredentialListMapping;
  #api20100401AuthCallsIpAccessControlListMapping?: Api20100401AuthCallsIpAccessControlListMapping;
  #api20100401AuthRegistrationsCredentialListMapping?: Api20100401AuthRegistrationsCredentialListMapping;
  #api20100401AuthorizedConnectApp?: Api20100401AuthorizedConnectApp;
  #api20100401AvailablePhoneNumberCountry?: Api20100401AvailablePhoneNumberCountry;
  #api20100401Balance?: Api20100401Balance;
  #api20100401Call?: Api20100401Call;
  #api20100401CallNotification?: Api20100401CallNotification;
  #api20100401CallRecording?: Api20100401CallRecording;
  #api20100401CallTranscription?: Api20100401CallTranscription;
  #api20100401Conference?: Api20100401Conference;
  #api20100401ConferenceRecording?: Api20100401ConferenceRecording;
  #api20100401ConnectApp?: Api20100401ConnectApp;
  #api20100401Credential?: Api20100401Credential;
  #api20100401CredentialList?: Api20100401CredentialList;
  #api20100401CredentialListMapping?: Api20100401CredentialListMapping;
  #api20100401Daily?: Api20100401Daily;
  #api20100401Data?: Api20100401Data;
  #api20100401DependentPhoneNumber?: Api20100401DependentPhoneNumber;
  #api20100401Domain?: Api20100401Domain;
  #api20100401Event?: Api20100401Event;
  #api20100401Feedback?: Api20100401Feedback;
  #api20100401IncomingPhoneNumber?: Api20100401IncomingPhoneNumber;
  #api20100401IncomingPhoneNumberLocal?: Api20100401IncomingPhoneNumberLocal;
  #api20100401IncomingPhoneNumberMobile?: Api20100401IncomingPhoneNumberMobile;
  #api20100401IncomingPhoneNumberTollFree?: Api20100401IncomingPhoneNumberTollFree;
  #api20100401IpAccessControlList?: Api20100401IpAccessControlList;
  #api20100401IpAccessControlListMapping?: Api20100401IpAccessControlListMapping;
  #api20100401Key?: Api20100401Key;
  #api20100401LastMonth?: Api20100401LastMonth;
  #api20100401Local?: Api20100401Local;
  #api20100401MachineToMachine?: Api20100401MachineToMachine;
  #api20100401Media?: Api20100401Media;
  #api20100401MediaInstance?: Api20100401MediaInstance;
  #api20100401Member?: Api20100401Member;
  #api20100401Message?: Api20100401Message;
  #api20100401Mobile?: Api20100401Mobile;
  #api20100401Monthly?: Api20100401Monthly;
  #api20100401National?: Api20100401National;
  #api20100401NewKey?: Api20100401NewKey;
  #api20100401NewSigningKey?: Api20100401NewSigningKey;
  #api20100401Notification?: Api20100401Notification;
  #api20100401OutgoingCallerId?: Api20100401OutgoingCallerId;
  #api20100401Participant?: Api20100401Participant;
  #api20100401Payload?: Api20100401Payload;
  #api20100401Payment?: Api20100401Payment;
  #api20100401Queue?: Api20100401Queue;
  #api20100401Record?: Api20100401Record;
  #api20100401Recording?: Api20100401Recording;
  #api20100401RecordingTranscription?: Api20100401RecordingTranscription;
  #api20100401SharedCost?: Api20100401SharedCost;
  #api20100401ShortCode?: Api20100401ShortCode;
  #api20100401SigningKey?: Api20100401SigningKey;
  #api20100401SipIpAddress?: Api20100401SipIpAddress;
  #api20100401Siprec?: Api20100401Siprec;
  #api20100401Stream?: Api20100401Stream;
  #api20100401ThisMonth?: Api20100401ThisMonth;
  #api20100401Today?: Api20100401Today;
  #api20100401Token?: Api20100401Token;
  #api20100401TollFree?: Api20100401TollFree;
  #api20100401Transcription?: Api20100401Transcription;
  #api20100401Trigger?: Api20100401Trigger;
  #api20100401UserDefinedMessage?: Api20100401UserDefinedMessage;
  #api20100401UserDefinedMessageSubscription?: Api20100401UserDefinedMessageSubscription;
  #api20100401ValidationRequest?: Api20100401ValidationRequest;
  #api20100401Voip?: Api20100401Voip;
  #api20100401Yearly?: Api20100401Yearly;
  #api20100401Yesterday?: Api20100401Yesterday;
  #messagingV1AlphaSender?: MessagingV1AlphaSender;
  #messagingV1BrandRegistration?: MessagingV1BrandRegistration;
  #messagingV1BrandRegistrationOtp?: MessagingV1BrandRegistrationOtp;
  #messagingV1BrandVetting?: MessagingV1BrandVetting;
  #messagingV1ChannelSender?: MessagingV1ChannelSender;
  #messagingV1Deactivations?: MessagingV1Deactivations;
  #messagingV1DestinationAlphaSender?: MessagingV1DestinationAlphaSender;
  #messagingV1DomainCerts?: MessagingV1DomainCerts;
  #messagingV1DomainConfigApi?: MessagingV1DomainConfigApi;
  #messagingV1DomainConfigMessagingServiceApi?: MessagingV1DomainConfigMessagingServiceApi;
  #messagingV1ExternalCampaignApi?: MessagingV1ExternalCampaignApi;
  #messagingV1LinkshorteningMessagingServiceApi?: MessagingV1LinkshorteningMessagingServiceApi;
  #messagingV1LinkshorteningMessagingServiceDomainAssociationApi?: MessagingV1LinkshorteningMessagingServiceDomainAssociationApi;
  #messagingV1PhoneNumber?: MessagingV1PhoneNumber;
  #messagingV1RequestManagedCertApi?: MessagingV1RequestManagedCertApi;
  #messagingV1ServiceApi?: MessagingV1ServiceApi;
  #messagingV1ShortCode?: MessagingV1ShortCode;
  #messagingV1TollfreeVerificationApi?: MessagingV1TollfreeVerificationApi;
  #messagingV1UsAppToPerson?: MessagingV1UsAppToPerson;
  #messagingV1UsAppToPersonUsecase?: MessagingV1UsAppToPersonUsecase;
  #messagingV1UsecaseApi?: MessagingV1UsecaseApi;
  #messagingV1DomainValidateDns?: MessagingV1DomainValidateDns;
  #messagingV2ChannelsSender?: MessagingV2ChannelsSender;
  #messagingV2TypingIndicator?: MessagingV2TypingIndicator;
  #messagingV2DomainCerts?: MessagingV2DomainCerts;
  #messagingV3TypingIndicator?: MessagingV3TypingIndicator;
  #contentv1ApprovalCreate?: Contentv1ApprovalCreate;
  #contentv1ApprovalFetch?: Contentv1ApprovalFetch;
  #contentv1ContentApi?: Contentv1ContentApi;
  #contentv1ContentAndApprovalsApi?: Contentv1ContentAndApprovalsApi;
  #contentv1LegacyContentApi?: Contentv1LegacyContentApi;
  #contentV2Content?: ContentV2Content;
  #contentV2ContentAndApprovals?: ContentV2ContentAndApprovals;
  #verifyV2AccessToken?: VerifyV2AccessToken;
  #verifyV2Bucket?: VerifyV2Bucket;
  #verifyV2Challenge?: VerifyV2Challenge;
  #verifyV2Entity?: VerifyV2Entity;
  #verifyV2Factor?: VerifyV2Factor;
  #verifyV2FormApi?: VerifyV2FormApi;
  #verifyV2MessagingConfiguration?: VerifyV2MessagingConfiguration;
  #verifyV2NewFactor?: VerifyV2NewFactor;
  #verifyV2Notification?: VerifyV2Notification;
  #verifyV2RateLimit?: VerifyV2RateLimit;
  #verifyV2SafelistApi?: VerifyV2SafelistApi;
  #verifyV2ServiceApi?: VerifyV2ServiceApi;
  #verifyV2Template?: VerifyV2Template;
  #verifyV2Verification?: VerifyV2Verification;
  #verifyV2VerificationAttemptApi?: VerifyV2VerificationAttemptApi;
  #verifyV2VerificationAttemptsSummaryApi?: VerifyV2VerificationAttemptsSummaryApi;
  #verifyV2VerificationCheck?: VerifyV2VerificationCheck;
  #verifyV2Webhook?: VerifyV2Webhook;
  #verifyV2NewChallenge?: VerifyV2NewChallenge;
  #lookupsV1PhoneNumberApi?: LookupsV1PhoneNumberApi;
  #lookupsV2PhoneNumber?: LookupsV2PhoneNumber;
  #numbersV1BulkEligibilityApi?: NumbersV1BulkEligibilityApi;
  #numbersV1EligibilityApi?: NumbersV1EligibilityApi;
  #numbersV1PortingPortInApi?: NumbersV1PortingPortInApi;
  #numbersV1PortingPortInPhoneNumberApi?: NumbersV1PortingPortInPhoneNumberApi;
  #numbersV1PortingPortabilityApi?: NumbersV1PortingPortabilityApi;
  #numbersV1PortingWebhookConfigurationApi?: NumbersV1PortingWebhookConfigurationApi;
  #numbersV1PortingWebhookConfigurationDeleteApi?: NumbersV1PortingWebhookConfigurationDeleteApi;
  #numbersV1PortingWebhookConfigurationFetchApi?: NumbersV1PortingWebhookConfigurationFetchApi;
  #numbersV1SigningRequestConfigurationApi?: NumbersV1SigningRequestConfigurationApi;
  #numbersV1SenderIdRegistration?: NumbersV1SenderIdRegistration;
  #numbersV1SenderIdRegistrationEmbeddedSession?: NumbersV1SenderIdRegistrationEmbeddedSession;
  #numbersV2AuthorizationDocumentApi?: NumbersV2AuthorizationDocumentApi;
  #numbersV2BulkHostedNumberOrderApi?: NumbersV2BulkHostedNumberOrderApi;
  #numbersV2Bundle?: NumbersV2Bundle;
  #numbersV2BundleCloneApi?: NumbersV2BundleCloneApi;
  #numbersV2BundleCopy?: NumbersV2BundleCopy;
  #numbersV2DependentHostedNumberOrder?: NumbersV2DependentHostedNumberOrder;
  #numbersV2EndUser?: NumbersV2EndUser;
  #numbersV2EndUserType?: NumbersV2EndUserType;
  #numbersV2Evaluation?: NumbersV2Evaluation;
  #numbersV2HostedNumberOrderApi?: NumbersV2HostedNumberOrderApi;
  #numbersV2ItemAssignment?: NumbersV2ItemAssignment;
  #numbersV2Regulation?: NumbersV2Regulation;
  #numbersV2ReplaceItems?: NumbersV2ReplaceItems;
  #numbersV2SupportingDocument?: NumbersV2SupportingDocument;
  #numbersV2SupportingDocumentType?: NumbersV2SupportingDocumentType;
  #v2ShortCodeApplications?: V2ShortCodeApplications;
  #numbersV3HostedNumbersHostedNumberOrderApi?: NumbersV3HostedNumbersHostedNumberOrderApi;
  #videoV1Anonymize?: VideoV1Anonymize;
  #videoV1CompositionApi?: VideoV1CompositionApi;
  #videoV1CompositionHookApi?: VideoV1CompositionHookApi;
  #videoV1CompositionSettingsApi?: VideoV1CompositionSettingsApi;
  #videoV1Participant?: VideoV1Participant;
  #videoV1PublishedTrack?: VideoV1PublishedTrack;
  #videoV1RecordingApi?: VideoV1RecordingApi;
  #videoV1RecordingRules?: VideoV1RecordingRules;
  #videoV1RecordingSettingsApi?: VideoV1RecordingSettingsApi;
  #videoV1RoomApi?: VideoV1RoomApi;
  #videoV1RoomRecording?: VideoV1RoomRecording;
  #videoV1SubscribeRules?: VideoV1SubscribeRules;
  #videoV1SubscribedTrack?: VideoV1SubscribedTrack;
  #videoV1Transcriptions?: VideoV1Transcriptions;
  #conversationsV1AddressConfiguration?: ConversationsV1AddressConfiguration;
  #conversationsV1Binding?: ConversationsV1Binding;
  #conversationsV1ConfigurationApi?: ConversationsV1ConfigurationApi;
  #conversationsV1ConversationApi?: ConversationsV1ConversationApi;
  #conversationsV1ConversationWithParticipantsApi?: ConversationsV1ConversationWithParticipantsApi;
  #conversationsV1CredentialApi?: ConversationsV1CredentialApi;
  #conversationsV1DeliveryReceipt?: ConversationsV1DeliveryReceipt;
  #conversationsV1Message?: ConversationsV1Message;
  #conversationsV1Notification?: ConversationsV1Notification;
  #conversationsV1Participant?: ConversationsV1Participant;
  #conversationsV1ParticipantConversationApi?: ConversationsV1ParticipantConversationApi;
  #conversationsV1RoleApi?: ConversationsV1RoleApi;
  #conversationsV1ServiceApi?: ConversationsV1ServiceApi;
  #conversationsV1UserApi?: ConversationsV1UserApi;
  #conversationsV1UserConversation?: ConversationsV1UserConversation;
  #conversationsV1Webhook?: ConversationsV1Webhook;
  #conversationsV2ConfigurationApi?: ConversationsV2ConfigurationApi;
  #conversationsV2ConversationApi?: ConversationsV2ConversationApi;
  #conversationsV2ParticipantApi?: ConversationsV2ParticipantApi;
  #conversationsV2CommunicationApi?: ConversationsV2CommunicationApi;
  #conversationsV2ActionApi?: ConversationsV2ActionApi;
  #conversationsV2Operation?: ConversationsV2Operation;
  #taskrouterV1Activity?: TaskrouterV1Activity;
  #taskrouterV1Event?: TaskrouterV1Event;
  #taskrouterV1Task?: TaskrouterV1Task;
  #taskrouterV1TaskChannel?: TaskrouterV1TaskChannel;
  #taskrouterV1TaskQueue?: TaskrouterV1TaskQueue;
  #taskrouterV1TaskQueueBulkRealTimeStatistics?: TaskrouterV1TaskQueueBulkRealTimeStatistics;
  #taskrouterV1TaskQueueCumulativeStatistics?: TaskrouterV1TaskQueueCumulativeStatistics;
  #taskrouterV1TaskQueueRealTimeStatistics?: TaskrouterV1TaskQueueRealTimeStatistics;
  #taskrouterV1TaskQueueStatistics?: TaskrouterV1TaskQueueStatistics;
  #taskrouterV1TaskQueuesStatistics?: TaskrouterV1TaskQueuesStatistics;
  #taskrouterV1TaskReservation?: TaskrouterV1TaskReservation;
  #taskrouterV1Worker?: TaskrouterV1Worker;
  #taskrouterV1WorkerChannel?: TaskrouterV1WorkerChannel;
  #taskrouterV1WorkerReservation?: TaskrouterV1WorkerReservation;
  #taskrouterV1WorkerStatistics?: TaskrouterV1WorkerStatistics;
  #taskrouterV1WorkersCumulativeStatistics?: TaskrouterV1WorkersCumulativeStatistics;
  #taskrouterV1WorkersRealTimeStatistics?: TaskrouterV1WorkersRealTimeStatistics;
  #taskrouterV1WorkersStatistics?: TaskrouterV1WorkersStatistics;
  #taskrouterV1Workflow?: TaskrouterV1Workflow;
  #taskrouterV1WorkflowCumulativeStatistics?: TaskrouterV1WorkflowCumulativeStatistics;
  #taskrouterV1WorkflowRealTimeStatistics?: TaskrouterV1WorkflowRealTimeStatistics;
  #taskrouterV1WorkflowStatistics?: TaskrouterV1WorkflowStatistics;
  #taskrouterV1WorkspaceApi?: TaskrouterV1WorkspaceApi;
  #taskrouterV1WorkspaceCumulativeStatistics?: TaskrouterV1WorkspaceCumulativeStatistics;
  #taskrouterV1WorkspaceRealTimeStatistics?: TaskrouterV1WorkspaceRealTimeStatistics;
  #taskrouterV1WorkspaceStatistics?: TaskrouterV1WorkspaceStatistics;
  #trusthubV1ComplianceInquiries?: TrusthubV1ComplianceInquiries;
  #trusthubV1ComplianceRegistrationInquiries?: TrusthubV1ComplianceRegistrationInquiries;
  #trusthubV1ComplianceTollfreeInquiries?: TrusthubV1ComplianceTollfreeInquiries;
  #trusthubV1CustomerProfiles?: TrusthubV1CustomerProfiles;
  #trusthubV1CustomerProfilesChannelEndpointAssignment?: TrusthubV1CustomerProfilesChannelEndpointAssignment;
  #trusthubV1CustomerProfilesEntityAssignments?: TrusthubV1CustomerProfilesEntityAssignments;
  #trusthubV1CustomerProfilesEvaluations?: TrusthubV1CustomerProfilesEvaluations;
  #trusthubV1EndUserApi?: TrusthubV1EndUserApi;
  #trusthubV1EndUserType?: TrusthubV1EndUserType;
  #trusthubV1PoliciesApi?: TrusthubV1PoliciesApi;
  #trusthubV1SupportingDocumentApi?: TrusthubV1SupportingDocumentApi;
  #trusthubV1SupportingDocumentType?: TrusthubV1SupportingDocumentType;
  #trusthubV1TrustProducts?: TrusthubV1TrustProducts;
  #trusthubV1TrustProductsChannelEndpointAssignment?: TrusthubV1TrustProductsChannelEndpointAssignment;
  #trusthubV1TrustProductsEntityAssignments?: TrusthubV1TrustProductsEntityAssignments;
  #trusthubV1TrustProductsEvaluations?: TrusthubV1TrustProductsEvaluations;
  #proxyV1Interaction?: ProxyV1Interaction;
  #proxyV1MessageInteraction?: ProxyV1MessageInteraction;
  #proxyV1Participant?: ProxyV1Participant;
  #proxyV1PhoneNumber?: ProxyV1PhoneNumber;
  #proxyV1ServiceApi?: ProxyV1ServiceApi;
  #proxyV1Session?: ProxyV1Session;
  #studioV1Engagement?: StudioV1Engagement;
  #studioV1EngagementContext?: StudioV1EngagementContext;
  #studioV1Execution?: StudioV1Execution;
  #studioV1ExecutionContext?: StudioV1ExecutionContext;
  #studioV1ExecutionStep?: StudioV1ExecutionStep;
  #studioV1ExecutionStepContext?: StudioV1ExecutionStepContext;
  #studioV1FlowApi?: StudioV1FlowApi;
  #studioV1Step?: StudioV1Step;
  #studioV1StepContext?: StudioV1StepContext;
  #studioV2Execution?: StudioV2Execution;
  #studioV2ExecutionContext?: StudioV2ExecutionContext;
  #studioV2ExecutionStep?: StudioV2ExecutionStep;
  #studioV2ExecutionStepContext?: StudioV2ExecutionStepContext;
  #studioV2FlowApi?: StudioV2FlowApi;
  #studioV2FlowRevision?: StudioV2FlowRevision;
  #studioV2FlowTestUserApi?: StudioV2FlowTestUserApi;
  #studioV2FlowValidateApi?: StudioV2FlowValidateApi;
  #syncV1Document?: SyncV1Document;
  #syncV1DocumentPermission?: SyncV1DocumentPermission;
  #syncV1ServiceApi?: SyncV1ServiceApi;
  #syncV1StreamMessage?: SyncV1StreamMessage;
  #syncV1SyncList?: SyncV1SyncList;
  #syncV1SyncListItem?: SyncV1SyncListItem;
  #syncV1SyncListPermission?: SyncV1SyncListPermission;
  #syncV1SyncMap?: SyncV1SyncMap;
  #syncV1SyncMapItem?: SyncV1SyncMapItem;
  #syncV1SyncMapPermission?: SyncV1SyncMapPermission;
  #syncV1SyncStream?: SyncV1SyncStream;
  #flexV1Assessments?: FlexV1Assessments;
  #flexV1ChannelApi?: FlexV1ChannelApi;
  #flexV1ConfigurationApi?: FlexV1ConfigurationApi;
  #flexV1ConfiguredPlugin?: FlexV1ConfiguredPlugin;
  #flexV1FlexFlowApi?: FlexV1FlexFlowApi;
  #flexV1InsightsAssessmentsCommentApi?: FlexV1InsightsAssessmentsCommentApi;
  #flexV1InsightsConversationsApi?: FlexV1InsightsConversationsApi;
  #flexV1InsightsQuestionnairesApi?: FlexV1InsightsQuestionnairesApi;
  #flexV1InsightsQuestionnairesCategoryApi?: FlexV1InsightsQuestionnairesCategoryApi;
  #flexV1InsightsQuestionnairesQuestionApi?: FlexV1InsightsQuestionnairesQuestionApi;
  #flexV1InsightsSegmentsApi?: FlexV1InsightsSegmentsApi;
  #flexV1InsightsSessionApi?: FlexV1InsightsSessionApi;
  #flexV1InsightsSettingsAnswerSetsApi?: FlexV1InsightsSettingsAnswerSetsApi;
  #flexV1InsightsSettingsCommentApi?: FlexV1InsightsSettingsCommentApi;
  #flexV1InsightsUserRolesApi?: FlexV1InsightsUserRolesApi;
  #flexV1InteractionApi?: FlexV1InteractionApi;
  #flexV1InteractionChannel?: FlexV1InteractionChannel;
  #flexV1InteractionChannelInvite?: FlexV1InteractionChannelInvite;
  #flexV1InteractionChannelParticipant?: FlexV1InteractionChannelParticipant;
  #flexV1InteractionTransfer?: FlexV1InteractionTransfer;
  #flexV1PluginApi?: FlexV1PluginApi;
  #flexV1PluginArchiveApi?: FlexV1PluginArchiveApi;
  #flexV1PluginConfigurationApi?: FlexV1PluginConfigurationApi;
  #flexV1PluginConfigurationArchiveApi?: FlexV1PluginConfigurationArchiveApi;
  #flexV1PluginReleaseApi?: FlexV1PluginReleaseApi;
  #flexV1PluginVersionArchiveApi?: FlexV1PluginVersionArchiveApi;
  #flexV1PluginVersions?: FlexV1PluginVersions;
  #flexV1ProvisioningStatusApi?: FlexV1ProvisioningStatusApi;
  #flexV1WebChannelApi?: FlexV1WebChannelApi;
  #flexV2FlexUserApi?: FlexV2FlexUserApi;
  #flexV2WebChannels?: FlexV2WebChannels;
  #insightsV1Annotation?: InsightsV1Annotation;
  #insightsV1CallApi?: InsightsV1CallApi;
  #insightsV1CallSummariesApi?: InsightsV1CallSummariesApi;
  #insightsV1CallSummaryApi?: InsightsV1CallSummaryApi;
  #insightsV1ConferenceApi?: InsightsV1ConferenceApi;
  #insightsV1ConferenceParticipant?: InsightsV1ConferenceParticipant;
  #insightsV1Event?: InsightsV1Event;
  #insightsV1Metric?: InsightsV1Metric;
  #insightsV1Participant?: InsightsV1Participant;
  #insightsV1Room?: InsightsV1Room;
  #insightsV1Setting?: InsightsV1Setting;
  #insightsV1CreateAccountReport?: InsightsV1CreateAccountReport;
  #insightsV1GetAccountReport?: InsightsV1GetAccountReport;
  #insightsV1CreateInboundPhoneNumbersReport?: InsightsV1CreateInboundPhoneNumbersReport;
  #insightsV1GetInboundPhoneNumbersReport?: InsightsV1GetInboundPhoneNumbersReport;
  #insightsV1CreateOutboundPhoneNumbersReport?: InsightsV1CreateOutboundPhoneNumbersReport;
  #insightsV1GetOutboundPhoneNumbersReport?: InsightsV1GetOutboundPhoneNumbersReport;
  #twilioInsights?: TwilioInsights;

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options);
  }

  get api20100401Account(): Api20100401Account {
    return (this.#api20100401Account ??= new Api20100401Account(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401AddOnResult(): Api20100401AddOnResult {
    return (this.#api20100401AddOnResult ??= new Api20100401AddOnResult(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Address(): Api20100401Address {
    return (this.#api20100401Address ??= new Api20100401Address(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401AllTime(): Api20100401AllTime {
    return (this.#api20100401AllTime ??= new Api20100401AllTime(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Application(): Api20100401Application {
    return (this.#api20100401Application ??= new Api20100401Application(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401AssignedAddOn(): Api20100401AssignedAddOn {
    return (this.#api20100401AssignedAddOn ??= new Api20100401AssignedAddOn(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401AssignedAddOnExtension(): Api20100401AssignedAddOnExtension {
    return (this.#api20100401AssignedAddOnExtension ??= new Api20100401AssignedAddOnExtension(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401AuthCallsCredentialListMapping(): Api20100401AuthCallsCredentialListMapping {
    return (this.#api20100401AuthCallsCredentialListMapping ??= new Api20100401AuthCallsCredentialListMapping(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401AuthCallsIpAccessControlListMapping(): Api20100401AuthCallsIpAccessControlListMapping {
    return (this.#api20100401AuthCallsIpAccessControlListMapping ??=
      new Api20100401AuthCallsIpAccessControlListMapping(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401AuthRegistrationsCredentialListMapping(): Api20100401AuthRegistrationsCredentialListMapping {
    return (this.#api20100401AuthRegistrationsCredentialListMapping ??=
      new Api20100401AuthRegistrationsCredentialListMapping(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401AuthorizedConnectApp(): Api20100401AuthorizedConnectApp {
    return (this.#api20100401AuthorizedConnectApp ??= new Api20100401AuthorizedConnectApp(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401AvailablePhoneNumberCountry(): Api20100401AvailablePhoneNumberCountry {
    return (this.#api20100401AvailablePhoneNumberCountry ??= new Api20100401AvailablePhoneNumberCountry(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Balance(): Api20100401Balance {
    return (this.#api20100401Balance ??= new Api20100401Balance(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Call(): Api20100401Call {
    return (this.#api20100401Call ??= new Api20100401Call(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401CallNotification(): Api20100401CallNotification {
    return (this.#api20100401CallNotification ??= new Api20100401CallNotification(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401CallRecording(): Api20100401CallRecording {
    return (this.#api20100401CallRecording ??= new Api20100401CallRecording(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401CallTranscription(): Api20100401CallTranscription {
    return (this.#api20100401CallTranscription ??= new Api20100401CallTranscription(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Conference(): Api20100401Conference {
    return (this.#api20100401Conference ??= new Api20100401Conference(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401ConferenceRecording(): Api20100401ConferenceRecording {
    return (this.#api20100401ConferenceRecording ??= new Api20100401ConferenceRecording(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401ConnectApp(): Api20100401ConnectApp {
    return (this.#api20100401ConnectApp ??= new Api20100401ConnectApp(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Credential(): Api20100401Credential {
    return (this.#api20100401Credential ??= new Api20100401Credential(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401CredentialList(): Api20100401CredentialList {
    return (this.#api20100401CredentialList ??= new Api20100401CredentialList(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401CredentialListMapping(): Api20100401CredentialListMapping {
    return (this.#api20100401CredentialListMapping ??= new Api20100401CredentialListMapping(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Daily(): Api20100401Daily {
    return (this.#api20100401Daily ??= new Api20100401Daily(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Data(): Api20100401Data {
    return (this.#api20100401Data ??= new Api20100401Data(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401DependentPhoneNumber(): Api20100401DependentPhoneNumber {
    return (this.#api20100401DependentPhoneNumber ??= new Api20100401DependentPhoneNumber(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Domain(): Api20100401Domain {
    return (this.#api20100401Domain ??= new Api20100401Domain(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Event(): Api20100401Event {
    return (this.#api20100401Event ??= new Api20100401Event(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Feedback(): Api20100401Feedback {
    return (this.#api20100401Feedback ??= new Api20100401Feedback(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401IncomingPhoneNumber(): Api20100401IncomingPhoneNumber {
    return (this.#api20100401IncomingPhoneNumber ??= new Api20100401IncomingPhoneNumber(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401IncomingPhoneNumberLocal(): Api20100401IncomingPhoneNumberLocal {
    return (this.#api20100401IncomingPhoneNumberLocal ??= new Api20100401IncomingPhoneNumberLocal(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401IncomingPhoneNumberMobile(): Api20100401IncomingPhoneNumberMobile {
    return (this.#api20100401IncomingPhoneNumberMobile ??= new Api20100401IncomingPhoneNumberMobile(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401IncomingPhoneNumberTollFree(): Api20100401IncomingPhoneNumberTollFree {
    return (this.#api20100401IncomingPhoneNumberTollFree ??= new Api20100401IncomingPhoneNumberTollFree(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401IpAccessControlList(): Api20100401IpAccessControlList {
    return (this.#api20100401IpAccessControlList ??= new Api20100401IpAccessControlList(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401IpAccessControlListMapping(): Api20100401IpAccessControlListMapping {
    return (this.#api20100401IpAccessControlListMapping ??= new Api20100401IpAccessControlListMapping(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Key(): Api20100401Key {
    return (this.#api20100401Key ??= new Api20100401Key(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401LastMonth(): Api20100401LastMonth {
    return (this.#api20100401LastMonth ??= new Api20100401LastMonth(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Local(): Api20100401Local {
    return (this.#api20100401Local ??= new Api20100401Local(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401MachineToMachine(): Api20100401MachineToMachine {
    return (this.#api20100401MachineToMachine ??= new Api20100401MachineToMachine(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Media(): Api20100401Media {
    return (this.#api20100401Media ??= new Api20100401Media(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401MediaInstance(): Api20100401MediaInstance {
    return (this.#api20100401MediaInstance ??= new Api20100401MediaInstance(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Member(): Api20100401Member {
    return (this.#api20100401Member ??= new Api20100401Member(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Message(): Api20100401Message {
    return (this.#api20100401Message ??= new Api20100401Message(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Mobile(): Api20100401Mobile {
    return (this.#api20100401Mobile ??= new Api20100401Mobile(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Monthly(): Api20100401Monthly {
    return (this.#api20100401Monthly ??= new Api20100401Monthly(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401National(): Api20100401National {
    return (this.#api20100401National ??= new Api20100401National(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401NewKey(): Api20100401NewKey {
    return (this.#api20100401NewKey ??= new Api20100401NewKey(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401NewSigningKey(): Api20100401NewSigningKey {
    return (this.#api20100401NewSigningKey ??= new Api20100401NewSigningKey(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Notification(): Api20100401Notification {
    return (this.#api20100401Notification ??= new Api20100401Notification(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401OutgoingCallerId(): Api20100401OutgoingCallerId {
    return (this.#api20100401OutgoingCallerId ??= new Api20100401OutgoingCallerId(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Participant(): Api20100401Participant {
    return (this.#api20100401Participant ??= new Api20100401Participant(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Payload(): Api20100401Payload {
    return (this.#api20100401Payload ??= new Api20100401Payload(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Payment(): Api20100401Payment {
    return (this.#api20100401Payment ??= new Api20100401Payment(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Queue(): Api20100401Queue {
    return (this.#api20100401Queue ??= new Api20100401Queue(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Record(): Api20100401Record {
    return (this.#api20100401Record ??= new Api20100401Record(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Recording(): Api20100401Recording {
    return (this.#api20100401Recording ??= new Api20100401Recording(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401RecordingTranscription(): Api20100401RecordingTranscription {
    return (this.#api20100401RecordingTranscription ??= new Api20100401RecordingTranscription(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401SharedCost(): Api20100401SharedCost {
    return (this.#api20100401SharedCost ??= new Api20100401SharedCost(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401ShortCode(): Api20100401ShortCode {
    return (this.#api20100401ShortCode ??= new Api20100401ShortCode(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401SigningKey(): Api20100401SigningKey {
    return (this.#api20100401SigningKey ??= new Api20100401SigningKey(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401SipIpAddress(): Api20100401SipIpAddress {
    return (this.#api20100401SipIpAddress ??= new Api20100401SipIpAddress(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Siprec(): Api20100401Siprec {
    return (this.#api20100401Siprec ??= new Api20100401Siprec(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Stream(): Api20100401Stream {
    return (this.#api20100401Stream ??= new Api20100401Stream(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401ThisMonth(): Api20100401ThisMonth {
    return (this.#api20100401ThisMonth ??= new Api20100401ThisMonth(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Today(): Api20100401Today {
    return (this.#api20100401Today ??= new Api20100401Today(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Token(): Api20100401Token {
    return (this.#api20100401Token ??= new Api20100401Token(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401TollFree(): Api20100401TollFree {
    return (this.#api20100401TollFree ??= new Api20100401TollFree(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Transcription(): Api20100401Transcription {
    return (this.#api20100401Transcription ??= new Api20100401Transcription(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Trigger(): Api20100401Trigger {
    return (this.#api20100401Trigger ??= new Api20100401Trigger(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401UserDefinedMessage(): Api20100401UserDefinedMessage {
    return (this.#api20100401UserDefinedMessage ??= new Api20100401UserDefinedMessage(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401UserDefinedMessageSubscription(): Api20100401UserDefinedMessageSubscription {
    return (this.#api20100401UserDefinedMessageSubscription ??= new Api20100401UserDefinedMessageSubscription(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401ValidationRequest(): Api20100401ValidationRequest {
    return (this.#api20100401ValidationRequest ??= new Api20100401ValidationRequest(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get api20100401Voip(): Api20100401Voip {
    return (this.#api20100401Voip ??= new Api20100401Voip(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Yearly(): Api20100401Yearly {
    return (this.#api20100401Yearly ??= new Api20100401Yearly(this.#rawClient, this.#servers, this.#auth));
  }

  get api20100401Yesterday(): Api20100401Yesterday {
    return (this.#api20100401Yesterday ??= new Api20100401Yesterday(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1AlphaSender(): MessagingV1AlphaSender {
    return (this.#messagingV1AlphaSender ??= new MessagingV1AlphaSender(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1BrandRegistration(): MessagingV1BrandRegistration {
    return (this.#messagingV1BrandRegistration ??= new MessagingV1BrandRegistration(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1BrandRegistrationOtp(): MessagingV1BrandRegistrationOtp {
    return (this.#messagingV1BrandRegistrationOtp ??= new MessagingV1BrandRegistrationOtp(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1BrandVetting(): MessagingV1BrandVetting {
    return (this.#messagingV1BrandVetting ??= new MessagingV1BrandVetting(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1ChannelSender(): MessagingV1ChannelSender {
    return (this.#messagingV1ChannelSender ??= new MessagingV1ChannelSender(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1Deactivations(): MessagingV1Deactivations {
    return (this.#messagingV1Deactivations ??= new MessagingV1Deactivations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1DestinationAlphaSender(): MessagingV1DestinationAlphaSender {
    return (this.#messagingV1DestinationAlphaSender ??= new MessagingV1DestinationAlphaSender(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1DomainCerts(): MessagingV1DomainCerts {
    return (this.#messagingV1DomainCerts ??= new MessagingV1DomainCerts(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1DomainConfigApi(): MessagingV1DomainConfigApi {
    return (this.#messagingV1DomainConfigApi ??= new MessagingV1DomainConfigApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1DomainConfigMessagingServiceApi(): MessagingV1DomainConfigMessagingServiceApi {
    return (this.#messagingV1DomainConfigMessagingServiceApi ??=
      new MessagingV1DomainConfigMessagingServiceApi(this.#rawClient, this.#servers, this.#auth));
  }

  get messagingV1ExternalCampaignApi(): MessagingV1ExternalCampaignApi {
    return (this.#messagingV1ExternalCampaignApi ??= new MessagingV1ExternalCampaignApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1LinkshorteningMessagingServiceApi(): MessagingV1LinkshorteningMessagingServiceApi {
    return (this.#messagingV1LinkshorteningMessagingServiceApi ??=
      new MessagingV1LinkshorteningMessagingServiceApi(this.#rawClient, this.#servers, this.#auth));
  }

  get messagingV1LinkshorteningMessagingServiceDomainAssociationApi(): MessagingV1LinkshorteningMessagingServiceDomainAssociationApi {
    return (this.#messagingV1LinkshorteningMessagingServiceDomainAssociationApi ??=
      new MessagingV1LinkshorteningMessagingServiceDomainAssociationApi(
        this.#rawClient,
        this.#servers,
        this.#auth,
      ));
  }

  get messagingV1PhoneNumber(): MessagingV1PhoneNumber {
    return (this.#messagingV1PhoneNumber ??= new MessagingV1PhoneNumber(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1RequestManagedCertApi(): MessagingV1RequestManagedCertApi {
    return (this.#messagingV1RequestManagedCertApi ??= new MessagingV1RequestManagedCertApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1ServiceApi(): MessagingV1ServiceApi {
    return (this.#messagingV1ServiceApi ??= new MessagingV1ServiceApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1ShortCode(): MessagingV1ShortCode {
    return (this.#messagingV1ShortCode ??= new MessagingV1ShortCode(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1TollfreeVerificationApi(): MessagingV1TollfreeVerificationApi {
    return (this.#messagingV1TollfreeVerificationApi ??= new MessagingV1TollfreeVerificationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1UsAppToPerson(): MessagingV1UsAppToPerson {
    return (this.#messagingV1UsAppToPerson ??= new MessagingV1UsAppToPerson(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1UsAppToPersonUsecase(): MessagingV1UsAppToPersonUsecase {
    return (this.#messagingV1UsAppToPersonUsecase ??= new MessagingV1UsAppToPersonUsecase(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1UsecaseApi(): MessagingV1UsecaseApi {
    return (this.#messagingV1UsecaseApi ??= new MessagingV1UsecaseApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV1DomainValidateDns(): MessagingV1DomainValidateDns {
    return (this.#messagingV1DomainValidateDns ??= new MessagingV1DomainValidateDns(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV2ChannelsSender(): MessagingV2ChannelsSender {
    return (this.#messagingV2ChannelsSender ??= new MessagingV2ChannelsSender(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV2TypingIndicator(): MessagingV2TypingIndicator {
    return (this.#messagingV2TypingIndicator ??= new MessagingV2TypingIndicator(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV2DomainCerts(): MessagingV2DomainCerts {
    return (this.#messagingV2DomainCerts ??= new MessagingV2DomainCerts(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get messagingV3TypingIndicator(): MessagingV3TypingIndicator {
    return (this.#messagingV3TypingIndicator ??= new MessagingV3TypingIndicator(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get contentv1ApprovalCreate(): Contentv1ApprovalCreate {
    return (this.#contentv1ApprovalCreate ??= new Contentv1ApprovalCreate(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get contentv1ApprovalFetch(): Contentv1ApprovalFetch {
    return (this.#contentv1ApprovalFetch ??= new Contentv1ApprovalFetch(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get contentv1ContentApi(): Contentv1ContentApi {
    return (this.#contentv1ContentApi ??= new Contentv1ContentApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get contentv1ContentAndApprovalsApi(): Contentv1ContentAndApprovalsApi {
    return (this.#contentv1ContentAndApprovalsApi ??= new Contentv1ContentAndApprovalsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get contentv1LegacyContentApi(): Contentv1LegacyContentApi {
    return (this.#contentv1LegacyContentApi ??= new Contentv1LegacyContentApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get contentV2Content(): ContentV2Content {
    return (this.#contentV2Content ??= new ContentV2Content(this.#rawClient, this.#servers, this.#auth));
  }

  get contentV2ContentAndApprovals(): ContentV2ContentAndApprovals {
    return (this.#contentV2ContentAndApprovals ??= new ContentV2ContentAndApprovals(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get verifyV2AccessToken(): VerifyV2AccessToken {
    return (this.#verifyV2AccessToken ??= new VerifyV2AccessToken(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get verifyV2Bucket(): VerifyV2Bucket {
    return (this.#verifyV2Bucket ??= new VerifyV2Bucket(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2Challenge(): VerifyV2Challenge {
    return (this.#verifyV2Challenge ??= new VerifyV2Challenge(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2Entity(): VerifyV2Entity {
    return (this.#verifyV2Entity ??= new VerifyV2Entity(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2Factor(): VerifyV2Factor {
    return (this.#verifyV2Factor ??= new VerifyV2Factor(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2FormApi(): VerifyV2FormApi {
    return (this.#verifyV2FormApi ??= new VerifyV2FormApi(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2MessagingConfiguration(): VerifyV2MessagingConfiguration {
    return (this.#verifyV2MessagingConfiguration ??= new VerifyV2MessagingConfiguration(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get verifyV2NewFactor(): VerifyV2NewFactor {
    return (this.#verifyV2NewFactor ??= new VerifyV2NewFactor(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2Notification(): VerifyV2Notification {
    return (this.#verifyV2Notification ??= new VerifyV2Notification(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get verifyV2RateLimit(): VerifyV2RateLimit {
    return (this.#verifyV2RateLimit ??= new VerifyV2RateLimit(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2SafelistApi(): VerifyV2SafelistApi {
    return (this.#verifyV2SafelistApi ??= new VerifyV2SafelistApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get verifyV2ServiceApi(): VerifyV2ServiceApi {
    return (this.#verifyV2ServiceApi ??= new VerifyV2ServiceApi(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2Template(): VerifyV2Template {
    return (this.#verifyV2Template ??= new VerifyV2Template(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2Verification(): VerifyV2Verification {
    return (this.#verifyV2Verification ??= new VerifyV2Verification(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get verifyV2VerificationAttemptApi(): VerifyV2VerificationAttemptApi {
    return (this.#verifyV2VerificationAttemptApi ??= new VerifyV2VerificationAttemptApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get verifyV2VerificationAttemptsSummaryApi(): VerifyV2VerificationAttemptsSummaryApi {
    return (this.#verifyV2VerificationAttemptsSummaryApi ??= new VerifyV2VerificationAttemptsSummaryApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get verifyV2VerificationCheck(): VerifyV2VerificationCheck {
    return (this.#verifyV2VerificationCheck ??= new VerifyV2VerificationCheck(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get verifyV2Webhook(): VerifyV2Webhook {
    return (this.#verifyV2Webhook ??= new VerifyV2Webhook(this.#rawClient, this.#servers, this.#auth));
  }

  get verifyV2NewChallenge(): VerifyV2NewChallenge {
    return (this.#verifyV2NewChallenge ??= new VerifyV2NewChallenge(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get lookupsV1PhoneNumberApi(): LookupsV1PhoneNumberApi {
    return (this.#lookupsV1PhoneNumberApi ??= new LookupsV1PhoneNumberApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get lookupsV2PhoneNumber(): LookupsV2PhoneNumber {
    return (this.#lookupsV2PhoneNumber ??= new LookupsV2PhoneNumber(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV1BulkEligibilityApi(): NumbersV1BulkEligibilityApi {
    return (this.#numbersV1BulkEligibilityApi ??= new NumbersV1BulkEligibilityApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV1EligibilityApi(): NumbersV1EligibilityApi {
    return (this.#numbersV1EligibilityApi ??= new NumbersV1EligibilityApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV1PortingPortInApi(): NumbersV1PortingPortInApi {
    return (this.#numbersV1PortingPortInApi ??= new NumbersV1PortingPortInApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV1PortingPortInPhoneNumberApi(): NumbersV1PortingPortInPhoneNumberApi {
    return (this.#numbersV1PortingPortInPhoneNumberApi ??= new NumbersV1PortingPortInPhoneNumberApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV1PortingPortabilityApi(): NumbersV1PortingPortabilityApi {
    return (this.#numbersV1PortingPortabilityApi ??= new NumbersV1PortingPortabilityApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV1PortingWebhookConfigurationApi(): NumbersV1PortingWebhookConfigurationApi {
    return (this.#numbersV1PortingWebhookConfigurationApi ??= new NumbersV1PortingWebhookConfigurationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV1PortingWebhookConfigurationDeleteApi(): NumbersV1PortingWebhookConfigurationDeleteApi {
    return (this.#numbersV1PortingWebhookConfigurationDeleteApi ??=
      new NumbersV1PortingWebhookConfigurationDeleteApi(this.#rawClient, this.#servers, this.#auth));
  }

  get numbersV1PortingWebhookConfigurationFetchApi(): NumbersV1PortingWebhookConfigurationFetchApi {
    return (this.#numbersV1PortingWebhookConfigurationFetchApi ??=
      new NumbersV1PortingWebhookConfigurationFetchApi(this.#rawClient, this.#servers, this.#auth));
  }

  get numbersV1SigningRequestConfigurationApi(): NumbersV1SigningRequestConfigurationApi {
    return (this.#numbersV1SigningRequestConfigurationApi ??= new NumbersV1SigningRequestConfigurationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV1SenderIdRegistration(): NumbersV1SenderIdRegistration {
    return (this.#numbersV1SenderIdRegistration ??= new NumbersV1SenderIdRegistration(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV1SenderIdRegistrationEmbeddedSession(): NumbersV1SenderIdRegistrationEmbeddedSession {
    return (this.#numbersV1SenderIdRegistrationEmbeddedSession ??=
      new NumbersV1SenderIdRegistrationEmbeddedSession(this.#rawClient, this.#servers, this.#auth));
  }

  get numbersV2AuthorizationDocumentApi(): NumbersV2AuthorizationDocumentApi {
    return (this.#numbersV2AuthorizationDocumentApi ??= new NumbersV2AuthorizationDocumentApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2BulkHostedNumberOrderApi(): NumbersV2BulkHostedNumberOrderApi {
    return (this.#numbersV2BulkHostedNumberOrderApi ??= new NumbersV2BulkHostedNumberOrderApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2Bundle(): NumbersV2Bundle {
    return (this.#numbersV2Bundle ??= new NumbersV2Bundle(this.#rawClient, this.#servers, this.#auth));
  }

  get numbersV2BundleCloneApi(): NumbersV2BundleCloneApi {
    return (this.#numbersV2BundleCloneApi ??= new NumbersV2BundleCloneApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2BundleCopy(): NumbersV2BundleCopy {
    return (this.#numbersV2BundleCopy ??= new NumbersV2BundleCopy(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2DependentHostedNumberOrder(): NumbersV2DependentHostedNumberOrder {
    return (this.#numbersV2DependentHostedNumberOrder ??= new NumbersV2DependentHostedNumberOrder(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2EndUser(): NumbersV2EndUser {
    return (this.#numbersV2EndUser ??= new NumbersV2EndUser(this.#rawClient, this.#servers, this.#auth));
  }

  get numbersV2EndUserType(): NumbersV2EndUserType {
    return (this.#numbersV2EndUserType ??= new NumbersV2EndUserType(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2Evaluation(): NumbersV2Evaluation {
    return (this.#numbersV2Evaluation ??= new NumbersV2Evaluation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2HostedNumberOrderApi(): NumbersV2HostedNumberOrderApi {
    return (this.#numbersV2HostedNumberOrderApi ??= new NumbersV2HostedNumberOrderApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2ItemAssignment(): NumbersV2ItemAssignment {
    return (this.#numbersV2ItemAssignment ??= new NumbersV2ItemAssignment(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2Regulation(): NumbersV2Regulation {
    return (this.#numbersV2Regulation ??= new NumbersV2Regulation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2ReplaceItems(): NumbersV2ReplaceItems {
    return (this.#numbersV2ReplaceItems ??= new NumbersV2ReplaceItems(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2SupportingDocument(): NumbersV2SupportingDocument {
    return (this.#numbersV2SupportingDocument ??= new NumbersV2SupportingDocument(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV2SupportingDocumentType(): NumbersV2SupportingDocumentType {
    return (this.#numbersV2SupportingDocumentType ??= new NumbersV2SupportingDocumentType(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get v2ShortCodeApplications(): V2ShortCodeApplications {
    return (this.#v2ShortCodeApplications ??= new V2ShortCodeApplications(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get numbersV3HostedNumbersHostedNumberOrderApi(): NumbersV3HostedNumbersHostedNumberOrderApi {
    return (this.#numbersV3HostedNumbersHostedNumberOrderApi ??=
      new NumbersV3HostedNumbersHostedNumberOrderApi(this.#rawClient, this.#servers, this.#auth));
  }

  get videoV1Anonymize(): VideoV1Anonymize {
    return (this.#videoV1Anonymize ??= new VideoV1Anonymize(this.#rawClient, this.#servers, this.#auth));
  }

  get videoV1CompositionApi(): VideoV1CompositionApi {
    return (this.#videoV1CompositionApi ??= new VideoV1CompositionApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1CompositionHookApi(): VideoV1CompositionHookApi {
    return (this.#videoV1CompositionHookApi ??= new VideoV1CompositionHookApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1CompositionSettingsApi(): VideoV1CompositionSettingsApi {
    return (this.#videoV1CompositionSettingsApi ??= new VideoV1CompositionSettingsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1Participant(): VideoV1Participant {
    return (this.#videoV1Participant ??= new VideoV1Participant(this.#rawClient, this.#servers, this.#auth));
  }

  get videoV1PublishedTrack(): VideoV1PublishedTrack {
    return (this.#videoV1PublishedTrack ??= new VideoV1PublishedTrack(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1RecordingApi(): VideoV1RecordingApi {
    return (this.#videoV1RecordingApi ??= new VideoV1RecordingApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1RecordingRules(): VideoV1RecordingRules {
    return (this.#videoV1RecordingRules ??= new VideoV1RecordingRules(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1RecordingSettingsApi(): VideoV1RecordingSettingsApi {
    return (this.#videoV1RecordingSettingsApi ??= new VideoV1RecordingSettingsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1RoomApi(): VideoV1RoomApi {
    return (this.#videoV1RoomApi ??= new VideoV1RoomApi(this.#rawClient, this.#servers, this.#auth));
  }

  get videoV1RoomRecording(): VideoV1RoomRecording {
    return (this.#videoV1RoomRecording ??= new VideoV1RoomRecording(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1SubscribeRules(): VideoV1SubscribeRules {
    return (this.#videoV1SubscribeRules ??= new VideoV1SubscribeRules(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1SubscribedTrack(): VideoV1SubscribedTrack {
    return (this.#videoV1SubscribedTrack ??= new VideoV1SubscribedTrack(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get videoV1Transcriptions(): VideoV1Transcriptions {
    return (this.#videoV1Transcriptions ??= new VideoV1Transcriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1AddressConfiguration(): ConversationsV1AddressConfiguration {
    return (this.#conversationsV1AddressConfiguration ??= new ConversationsV1AddressConfiguration(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1Binding(): ConversationsV1Binding {
    return (this.#conversationsV1Binding ??= new ConversationsV1Binding(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1ConfigurationApi(): ConversationsV1ConfigurationApi {
    return (this.#conversationsV1ConfigurationApi ??= new ConversationsV1ConfigurationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1ConversationApi(): ConversationsV1ConversationApi {
    return (this.#conversationsV1ConversationApi ??= new ConversationsV1ConversationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1ConversationWithParticipantsApi(): ConversationsV1ConversationWithParticipantsApi {
    return (this.#conversationsV1ConversationWithParticipantsApi ??=
      new ConversationsV1ConversationWithParticipantsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get conversationsV1CredentialApi(): ConversationsV1CredentialApi {
    return (this.#conversationsV1CredentialApi ??= new ConversationsV1CredentialApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1DeliveryReceipt(): ConversationsV1DeliveryReceipt {
    return (this.#conversationsV1DeliveryReceipt ??= new ConversationsV1DeliveryReceipt(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1Message(): ConversationsV1Message {
    return (this.#conversationsV1Message ??= new ConversationsV1Message(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1Notification(): ConversationsV1Notification {
    return (this.#conversationsV1Notification ??= new ConversationsV1Notification(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1Participant(): ConversationsV1Participant {
    return (this.#conversationsV1Participant ??= new ConversationsV1Participant(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1ParticipantConversationApi(): ConversationsV1ParticipantConversationApi {
    return (this.#conversationsV1ParticipantConversationApi ??= new ConversationsV1ParticipantConversationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1RoleApi(): ConversationsV1RoleApi {
    return (this.#conversationsV1RoleApi ??= new ConversationsV1RoleApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1ServiceApi(): ConversationsV1ServiceApi {
    return (this.#conversationsV1ServiceApi ??= new ConversationsV1ServiceApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1UserApi(): ConversationsV1UserApi {
    return (this.#conversationsV1UserApi ??= new ConversationsV1UserApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1UserConversation(): ConversationsV1UserConversation {
    return (this.#conversationsV1UserConversation ??= new ConversationsV1UserConversation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV1Webhook(): ConversationsV1Webhook {
    return (this.#conversationsV1Webhook ??= new ConversationsV1Webhook(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV2ConfigurationApi(): ConversationsV2ConfigurationApi {
    return (this.#conversationsV2ConfigurationApi ??= new ConversationsV2ConfigurationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV2ConversationApi(): ConversationsV2ConversationApi {
    return (this.#conversationsV2ConversationApi ??= new ConversationsV2ConversationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV2ParticipantApi(): ConversationsV2ParticipantApi {
    return (this.#conversationsV2ParticipantApi ??= new ConversationsV2ParticipantApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV2CommunicationApi(): ConversationsV2CommunicationApi {
    return (this.#conversationsV2CommunicationApi ??= new ConversationsV2CommunicationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV2ActionApi(): ConversationsV2ActionApi {
    return (this.#conversationsV2ActionApi ??= new ConversationsV2ActionApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversationsV2Operation(): ConversationsV2Operation {
    return (this.#conversationsV2Operation ??= new ConversationsV2Operation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1Activity(): TaskrouterV1Activity {
    return (this.#taskrouterV1Activity ??= new TaskrouterV1Activity(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1Event(): TaskrouterV1Event {
    return (this.#taskrouterV1Event ??= new TaskrouterV1Event(this.#rawClient, this.#servers, this.#auth));
  }

  get taskrouterV1Task(): TaskrouterV1Task {
    return (this.#taskrouterV1Task ??= new TaskrouterV1Task(this.#rawClient, this.#servers, this.#auth));
  }

  get taskrouterV1TaskChannel(): TaskrouterV1TaskChannel {
    return (this.#taskrouterV1TaskChannel ??= new TaskrouterV1TaskChannel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1TaskQueue(): TaskrouterV1TaskQueue {
    return (this.#taskrouterV1TaskQueue ??= new TaskrouterV1TaskQueue(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1TaskQueueBulkRealTimeStatistics(): TaskrouterV1TaskQueueBulkRealTimeStatistics {
    return (this.#taskrouterV1TaskQueueBulkRealTimeStatistics ??=
      new TaskrouterV1TaskQueueBulkRealTimeStatistics(this.#rawClient, this.#servers, this.#auth));
  }

  get taskrouterV1TaskQueueCumulativeStatistics(): TaskrouterV1TaskQueueCumulativeStatistics {
    return (this.#taskrouterV1TaskQueueCumulativeStatistics ??= new TaskrouterV1TaskQueueCumulativeStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1TaskQueueRealTimeStatistics(): TaskrouterV1TaskQueueRealTimeStatistics {
    return (this.#taskrouterV1TaskQueueRealTimeStatistics ??= new TaskrouterV1TaskQueueRealTimeStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1TaskQueueStatistics(): TaskrouterV1TaskQueueStatistics {
    return (this.#taskrouterV1TaskQueueStatistics ??= new TaskrouterV1TaskQueueStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1TaskQueuesStatistics(): TaskrouterV1TaskQueuesStatistics {
    return (this.#taskrouterV1TaskQueuesStatistics ??= new TaskrouterV1TaskQueuesStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1TaskReservation(): TaskrouterV1TaskReservation {
    return (this.#taskrouterV1TaskReservation ??= new TaskrouterV1TaskReservation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1Worker(): TaskrouterV1Worker {
    return (this.#taskrouterV1Worker ??= new TaskrouterV1Worker(this.#rawClient, this.#servers, this.#auth));
  }

  get taskrouterV1WorkerChannel(): TaskrouterV1WorkerChannel {
    return (this.#taskrouterV1WorkerChannel ??= new TaskrouterV1WorkerChannel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkerReservation(): TaskrouterV1WorkerReservation {
    return (this.#taskrouterV1WorkerReservation ??= new TaskrouterV1WorkerReservation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkerStatistics(): TaskrouterV1WorkerStatistics {
    return (this.#taskrouterV1WorkerStatistics ??= new TaskrouterV1WorkerStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkersCumulativeStatistics(): TaskrouterV1WorkersCumulativeStatistics {
    return (this.#taskrouterV1WorkersCumulativeStatistics ??= new TaskrouterV1WorkersCumulativeStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkersRealTimeStatistics(): TaskrouterV1WorkersRealTimeStatistics {
    return (this.#taskrouterV1WorkersRealTimeStatistics ??= new TaskrouterV1WorkersRealTimeStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkersStatistics(): TaskrouterV1WorkersStatistics {
    return (this.#taskrouterV1WorkersStatistics ??= new TaskrouterV1WorkersStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1Workflow(): TaskrouterV1Workflow {
    return (this.#taskrouterV1Workflow ??= new TaskrouterV1Workflow(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkflowCumulativeStatistics(): TaskrouterV1WorkflowCumulativeStatistics {
    return (this.#taskrouterV1WorkflowCumulativeStatistics ??= new TaskrouterV1WorkflowCumulativeStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkflowRealTimeStatistics(): TaskrouterV1WorkflowRealTimeStatistics {
    return (this.#taskrouterV1WorkflowRealTimeStatistics ??= new TaskrouterV1WorkflowRealTimeStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkflowStatistics(): TaskrouterV1WorkflowStatistics {
    return (this.#taskrouterV1WorkflowStatistics ??= new TaskrouterV1WorkflowStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkspaceApi(): TaskrouterV1WorkspaceApi {
    return (this.#taskrouterV1WorkspaceApi ??= new TaskrouterV1WorkspaceApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkspaceCumulativeStatistics(): TaskrouterV1WorkspaceCumulativeStatistics {
    return (this.#taskrouterV1WorkspaceCumulativeStatistics ??= new TaskrouterV1WorkspaceCumulativeStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkspaceRealTimeStatistics(): TaskrouterV1WorkspaceRealTimeStatistics {
    return (this.#taskrouterV1WorkspaceRealTimeStatistics ??= new TaskrouterV1WorkspaceRealTimeStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskrouterV1WorkspaceStatistics(): TaskrouterV1WorkspaceStatistics {
    return (this.#taskrouterV1WorkspaceStatistics ??= new TaskrouterV1WorkspaceStatistics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1ComplianceInquiries(): TrusthubV1ComplianceInquiries {
    return (this.#trusthubV1ComplianceInquiries ??= new TrusthubV1ComplianceInquiries(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1ComplianceRegistrationInquiries(): TrusthubV1ComplianceRegistrationInquiries {
    return (this.#trusthubV1ComplianceRegistrationInquiries ??= new TrusthubV1ComplianceRegistrationInquiries(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1ComplianceTollfreeInquiries(): TrusthubV1ComplianceTollfreeInquiries {
    return (this.#trusthubV1ComplianceTollfreeInquiries ??= new TrusthubV1ComplianceTollfreeInquiries(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1CustomerProfiles(): TrusthubV1CustomerProfiles {
    return (this.#trusthubV1CustomerProfiles ??= new TrusthubV1CustomerProfiles(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1CustomerProfilesChannelEndpointAssignment(): TrusthubV1CustomerProfilesChannelEndpointAssignment {
    return (this.#trusthubV1CustomerProfilesChannelEndpointAssignment ??=
      new TrusthubV1CustomerProfilesChannelEndpointAssignment(this.#rawClient, this.#servers, this.#auth));
  }

  get trusthubV1CustomerProfilesEntityAssignments(): TrusthubV1CustomerProfilesEntityAssignments {
    return (this.#trusthubV1CustomerProfilesEntityAssignments ??=
      new TrusthubV1CustomerProfilesEntityAssignments(this.#rawClient, this.#servers, this.#auth));
  }

  get trusthubV1CustomerProfilesEvaluations(): TrusthubV1CustomerProfilesEvaluations {
    return (this.#trusthubV1CustomerProfilesEvaluations ??= new TrusthubV1CustomerProfilesEvaluations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1EndUserApi(): TrusthubV1EndUserApi {
    return (this.#trusthubV1EndUserApi ??= new TrusthubV1EndUserApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1EndUserType(): TrusthubV1EndUserType {
    return (this.#trusthubV1EndUserType ??= new TrusthubV1EndUserType(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1PoliciesApi(): TrusthubV1PoliciesApi {
    return (this.#trusthubV1PoliciesApi ??= new TrusthubV1PoliciesApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1SupportingDocumentApi(): TrusthubV1SupportingDocumentApi {
    return (this.#trusthubV1SupportingDocumentApi ??= new TrusthubV1SupportingDocumentApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1SupportingDocumentType(): TrusthubV1SupportingDocumentType {
    return (this.#trusthubV1SupportingDocumentType ??= new TrusthubV1SupportingDocumentType(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1TrustProducts(): TrusthubV1TrustProducts {
    return (this.#trusthubV1TrustProducts ??= new TrusthubV1TrustProducts(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1TrustProductsChannelEndpointAssignment(): TrusthubV1TrustProductsChannelEndpointAssignment {
    return (this.#trusthubV1TrustProductsChannelEndpointAssignment ??=
      new TrusthubV1TrustProductsChannelEndpointAssignment(this.#rawClient, this.#servers, this.#auth));
  }

  get trusthubV1TrustProductsEntityAssignments(): TrusthubV1TrustProductsEntityAssignments {
    return (this.#trusthubV1TrustProductsEntityAssignments ??= new TrusthubV1TrustProductsEntityAssignments(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get trusthubV1TrustProductsEvaluations(): TrusthubV1TrustProductsEvaluations {
    return (this.#trusthubV1TrustProductsEvaluations ??= new TrusthubV1TrustProductsEvaluations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get proxyV1Interaction(): ProxyV1Interaction {
    return (this.#proxyV1Interaction ??= new ProxyV1Interaction(this.#rawClient, this.#servers, this.#auth));
  }

  get proxyV1MessageInteraction(): ProxyV1MessageInteraction {
    return (this.#proxyV1MessageInteraction ??= new ProxyV1MessageInteraction(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get proxyV1Participant(): ProxyV1Participant {
    return (this.#proxyV1Participant ??= new ProxyV1Participant(this.#rawClient, this.#servers, this.#auth));
  }

  get proxyV1PhoneNumber(): ProxyV1PhoneNumber {
    return (this.#proxyV1PhoneNumber ??= new ProxyV1PhoneNumber(this.#rawClient, this.#servers, this.#auth));
  }

  get proxyV1ServiceApi(): ProxyV1ServiceApi {
    return (this.#proxyV1ServiceApi ??= new ProxyV1ServiceApi(this.#rawClient, this.#servers, this.#auth));
  }

  get proxyV1Session(): ProxyV1Session {
    return (this.#proxyV1Session ??= new ProxyV1Session(this.#rawClient, this.#servers, this.#auth));
  }

  get studioV1Engagement(): StudioV1Engagement {
    return (this.#studioV1Engagement ??= new StudioV1Engagement(this.#rawClient, this.#servers, this.#auth));
  }

  get studioV1EngagementContext(): StudioV1EngagementContext {
    return (this.#studioV1EngagementContext ??= new StudioV1EngagementContext(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV1Execution(): StudioV1Execution {
    return (this.#studioV1Execution ??= new StudioV1Execution(this.#rawClient, this.#servers, this.#auth));
  }

  get studioV1ExecutionContext(): StudioV1ExecutionContext {
    return (this.#studioV1ExecutionContext ??= new StudioV1ExecutionContext(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV1ExecutionStep(): StudioV1ExecutionStep {
    return (this.#studioV1ExecutionStep ??= new StudioV1ExecutionStep(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV1ExecutionStepContext(): StudioV1ExecutionStepContext {
    return (this.#studioV1ExecutionStepContext ??= new StudioV1ExecutionStepContext(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV1FlowApi(): StudioV1FlowApi {
    return (this.#studioV1FlowApi ??= new StudioV1FlowApi(this.#rawClient, this.#servers, this.#auth));
  }

  get studioV1Step(): StudioV1Step {
    return (this.#studioV1Step ??= new StudioV1Step(this.#rawClient, this.#servers, this.#auth));
  }

  get studioV1StepContext(): StudioV1StepContext {
    return (this.#studioV1StepContext ??= new StudioV1StepContext(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV2Execution(): StudioV2Execution {
    return (this.#studioV2Execution ??= new StudioV2Execution(this.#rawClient, this.#servers, this.#auth));
  }

  get studioV2ExecutionContext(): StudioV2ExecutionContext {
    return (this.#studioV2ExecutionContext ??= new StudioV2ExecutionContext(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV2ExecutionStep(): StudioV2ExecutionStep {
    return (this.#studioV2ExecutionStep ??= new StudioV2ExecutionStep(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV2ExecutionStepContext(): StudioV2ExecutionStepContext {
    return (this.#studioV2ExecutionStepContext ??= new StudioV2ExecutionStepContext(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV2FlowApi(): StudioV2FlowApi {
    return (this.#studioV2FlowApi ??= new StudioV2FlowApi(this.#rawClient, this.#servers, this.#auth));
  }

  get studioV2FlowRevision(): StudioV2FlowRevision {
    return (this.#studioV2FlowRevision ??= new StudioV2FlowRevision(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV2FlowTestUserApi(): StudioV2FlowTestUserApi {
    return (this.#studioV2FlowTestUserApi ??= new StudioV2FlowTestUserApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get studioV2FlowValidateApi(): StudioV2FlowValidateApi {
    return (this.#studioV2FlowValidateApi ??= new StudioV2FlowValidateApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get syncV1Document(): SyncV1Document {
    return (this.#syncV1Document ??= new SyncV1Document(this.#rawClient, this.#servers, this.#auth));
  }

  get syncV1DocumentPermission(): SyncV1DocumentPermission {
    return (this.#syncV1DocumentPermission ??= new SyncV1DocumentPermission(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get syncV1ServiceApi(): SyncV1ServiceApi {
    return (this.#syncV1ServiceApi ??= new SyncV1ServiceApi(this.#rawClient, this.#servers, this.#auth));
  }

  get syncV1StreamMessage(): SyncV1StreamMessage {
    return (this.#syncV1StreamMessage ??= new SyncV1StreamMessage(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get syncV1SyncList(): SyncV1SyncList {
    return (this.#syncV1SyncList ??= new SyncV1SyncList(this.#rawClient, this.#servers, this.#auth));
  }

  get syncV1SyncListItem(): SyncV1SyncListItem {
    return (this.#syncV1SyncListItem ??= new SyncV1SyncListItem(this.#rawClient, this.#servers, this.#auth));
  }

  get syncV1SyncListPermission(): SyncV1SyncListPermission {
    return (this.#syncV1SyncListPermission ??= new SyncV1SyncListPermission(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get syncV1SyncMap(): SyncV1SyncMap {
    return (this.#syncV1SyncMap ??= new SyncV1SyncMap(this.#rawClient, this.#servers, this.#auth));
  }

  get syncV1SyncMapItem(): SyncV1SyncMapItem {
    return (this.#syncV1SyncMapItem ??= new SyncV1SyncMapItem(this.#rawClient, this.#servers, this.#auth));
  }

  get syncV1SyncMapPermission(): SyncV1SyncMapPermission {
    return (this.#syncV1SyncMapPermission ??= new SyncV1SyncMapPermission(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get syncV1SyncStream(): SyncV1SyncStream {
    return (this.#syncV1SyncStream ??= new SyncV1SyncStream(this.#rawClient, this.#servers, this.#auth));
  }

  get flexV1Assessments(): FlexV1Assessments {
    return (this.#flexV1Assessments ??= new FlexV1Assessments(this.#rawClient, this.#servers, this.#auth));
  }

  get flexV1ChannelApi(): FlexV1ChannelApi {
    return (this.#flexV1ChannelApi ??= new FlexV1ChannelApi(this.#rawClient, this.#servers, this.#auth));
  }

  get flexV1ConfigurationApi(): FlexV1ConfigurationApi {
    return (this.#flexV1ConfigurationApi ??= new FlexV1ConfigurationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1ConfiguredPlugin(): FlexV1ConfiguredPlugin {
    return (this.#flexV1ConfiguredPlugin ??= new FlexV1ConfiguredPlugin(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1FlexFlowApi(): FlexV1FlexFlowApi {
    return (this.#flexV1FlexFlowApi ??= new FlexV1FlexFlowApi(this.#rawClient, this.#servers, this.#auth));
  }

  get flexV1InsightsAssessmentsCommentApi(): FlexV1InsightsAssessmentsCommentApi {
    return (this.#flexV1InsightsAssessmentsCommentApi ??= new FlexV1InsightsAssessmentsCommentApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InsightsConversationsApi(): FlexV1InsightsConversationsApi {
    return (this.#flexV1InsightsConversationsApi ??= new FlexV1InsightsConversationsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InsightsQuestionnairesApi(): FlexV1InsightsQuestionnairesApi {
    return (this.#flexV1InsightsQuestionnairesApi ??= new FlexV1InsightsQuestionnairesApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InsightsQuestionnairesCategoryApi(): FlexV1InsightsQuestionnairesCategoryApi {
    return (this.#flexV1InsightsQuestionnairesCategoryApi ??= new FlexV1InsightsQuestionnairesCategoryApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InsightsQuestionnairesQuestionApi(): FlexV1InsightsQuestionnairesQuestionApi {
    return (this.#flexV1InsightsQuestionnairesQuestionApi ??= new FlexV1InsightsQuestionnairesQuestionApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InsightsSegmentsApi(): FlexV1InsightsSegmentsApi {
    return (this.#flexV1InsightsSegmentsApi ??= new FlexV1InsightsSegmentsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InsightsSessionApi(): FlexV1InsightsSessionApi {
    return (this.#flexV1InsightsSessionApi ??= new FlexV1InsightsSessionApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InsightsSettingsAnswerSetsApi(): FlexV1InsightsSettingsAnswerSetsApi {
    return (this.#flexV1InsightsSettingsAnswerSetsApi ??= new FlexV1InsightsSettingsAnswerSetsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InsightsSettingsCommentApi(): FlexV1InsightsSettingsCommentApi {
    return (this.#flexV1InsightsSettingsCommentApi ??= new FlexV1InsightsSettingsCommentApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InsightsUserRolesApi(): FlexV1InsightsUserRolesApi {
    return (this.#flexV1InsightsUserRolesApi ??= new FlexV1InsightsUserRolesApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InteractionApi(): FlexV1InteractionApi {
    return (this.#flexV1InteractionApi ??= new FlexV1InteractionApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InteractionChannel(): FlexV1InteractionChannel {
    return (this.#flexV1InteractionChannel ??= new FlexV1InteractionChannel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InteractionChannelInvite(): FlexV1InteractionChannelInvite {
    return (this.#flexV1InteractionChannelInvite ??= new FlexV1InteractionChannelInvite(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InteractionChannelParticipant(): FlexV1InteractionChannelParticipant {
    return (this.#flexV1InteractionChannelParticipant ??= new FlexV1InteractionChannelParticipant(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1InteractionTransfer(): FlexV1InteractionTransfer {
    return (this.#flexV1InteractionTransfer ??= new FlexV1InteractionTransfer(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1PluginApi(): FlexV1PluginApi {
    return (this.#flexV1PluginApi ??= new FlexV1PluginApi(this.#rawClient, this.#servers, this.#auth));
  }

  get flexV1PluginArchiveApi(): FlexV1PluginArchiveApi {
    return (this.#flexV1PluginArchiveApi ??= new FlexV1PluginArchiveApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1PluginConfigurationApi(): FlexV1PluginConfigurationApi {
    return (this.#flexV1PluginConfigurationApi ??= new FlexV1PluginConfigurationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1PluginConfigurationArchiveApi(): FlexV1PluginConfigurationArchiveApi {
    return (this.#flexV1PluginConfigurationArchiveApi ??= new FlexV1PluginConfigurationArchiveApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1PluginReleaseApi(): FlexV1PluginReleaseApi {
    return (this.#flexV1PluginReleaseApi ??= new FlexV1PluginReleaseApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1PluginVersionArchiveApi(): FlexV1PluginVersionArchiveApi {
    return (this.#flexV1PluginVersionArchiveApi ??= new FlexV1PluginVersionArchiveApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1PluginVersions(): FlexV1PluginVersions {
    return (this.#flexV1PluginVersions ??= new FlexV1PluginVersions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1ProvisioningStatusApi(): FlexV1ProvisioningStatusApi {
    return (this.#flexV1ProvisioningStatusApi ??= new FlexV1ProvisioningStatusApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV1WebChannelApi(): FlexV1WebChannelApi {
    return (this.#flexV1WebChannelApi ??= new FlexV1WebChannelApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get flexV2FlexUserApi(): FlexV2FlexUserApi {
    return (this.#flexV2FlexUserApi ??= new FlexV2FlexUserApi(this.#rawClient, this.#servers, this.#auth));
  }

  get flexV2WebChannels(): FlexV2WebChannels {
    return (this.#flexV2WebChannels ??= new FlexV2WebChannels(this.#rawClient, this.#servers, this.#auth));
  }

  get insightsV1Annotation(): InsightsV1Annotation {
    return (this.#insightsV1Annotation ??= new InsightsV1Annotation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1CallApi(): InsightsV1CallApi {
    return (this.#insightsV1CallApi ??= new InsightsV1CallApi(this.#rawClient, this.#servers, this.#auth));
  }

  get insightsV1CallSummariesApi(): InsightsV1CallSummariesApi {
    return (this.#insightsV1CallSummariesApi ??= new InsightsV1CallSummariesApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1CallSummaryApi(): InsightsV1CallSummaryApi {
    return (this.#insightsV1CallSummaryApi ??= new InsightsV1CallSummaryApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1ConferenceApi(): InsightsV1ConferenceApi {
    return (this.#insightsV1ConferenceApi ??= new InsightsV1ConferenceApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1ConferenceParticipant(): InsightsV1ConferenceParticipant {
    return (this.#insightsV1ConferenceParticipant ??= new InsightsV1ConferenceParticipant(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1Event(): InsightsV1Event {
    return (this.#insightsV1Event ??= new InsightsV1Event(this.#rawClient, this.#servers, this.#auth));
  }

  get insightsV1Metric(): InsightsV1Metric {
    return (this.#insightsV1Metric ??= new InsightsV1Metric(this.#rawClient, this.#servers, this.#auth));
  }

  get insightsV1Participant(): InsightsV1Participant {
    return (this.#insightsV1Participant ??= new InsightsV1Participant(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1Room(): InsightsV1Room {
    return (this.#insightsV1Room ??= new InsightsV1Room(this.#rawClient, this.#servers, this.#auth));
  }

  get insightsV1Setting(): InsightsV1Setting {
    return (this.#insightsV1Setting ??= new InsightsV1Setting(this.#rawClient, this.#servers, this.#auth));
  }

  get insightsV1CreateAccountReport(): InsightsV1CreateAccountReport {
    return (this.#insightsV1CreateAccountReport ??= new InsightsV1CreateAccountReport(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1GetAccountReport(): InsightsV1GetAccountReport {
    return (this.#insightsV1GetAccountReport ??= new InsightsV1GetAccountReport(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1CreateInboundPhoneNumbersReport(): InsightsV1CreateInboundPhoneNumbersReport {
    return (this.#insightsV1CreateInboundPhoneNumbersReport ??= new InsightsV1CreateInboundPhoneNumbersReport(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1GetInboundPhoneNumbersReport(): InsightsV1GetInboundPhoneNumbersReport {
    return (this.#insightsV1GetInboundPhoneNumbersReport ??= new InsightsV1GetInboundPhoneNumbersReport(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insightsV1CreateOutboundPhoneNumbersReport(): InsightsV1CreateOutboundPhoneNumbersReport {
    return (this.#insightsV1CreateOutboundPhoneNumbersReport ??=
      new InsightsV1CreateOutboundPhoneNumbersReport(this.#rawClient, this.#servers, this.#auth));
  }

  get insightsV1GetOutboundPhoneNumbersReport(): InsightsV1GetOutboundPhoneNumbersReport {
    return (this.#insightsV1GetOutboundPhoneNumbersReport ??= new InsightsV1GetOutboundPhoneNumbersReport(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get twilioInsights(): TwilioInsights {
    return (this.#twilioInsights ??= new TwilioInsights(this.#rawClient, this.#servers, this.#auth));
  }

  createBulkLookup(
    request: TwilioSdkClient.CreateBulkLookupRequest,
    options?: RequestOptions,
  ): ApiPromise<LookupResponse1, ResponseError> {
    return this.#rawClient.execute<LookupResponse1, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default4("/v2/batch/query"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => lookupRequestSchema)) },
      },
      {
        success: { kind: "json", schema: lookupResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createLookupPhoneNumberOverrides(
    request: TwilioSdkClient.CreateLookupPhoneNumberOverridesRequest,
    options?: RequestOptions,
  ): ApiPromise<OverridesResponse, TwilioSdkClient.CreateLookupPhoneNumberOverridesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default4("/v2/PhoneNumbers/{PhoneNumber}/Overrides/{Field}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "Field", value: request.field, schema: s.string() },
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => overridesRequestSchema)) },
      },
      {
        success: { kind: "json", schema: overridesResponseSchema },
        errorFactory: TwilioSdkClient.CreateLookupPhoneNumberOverridesError,
      },
      options,
    );
  }

  deleteLookupPhoneNumberOverrides(
    request: TwilioSdkClient.DeleteLookupPhoneNumberOverridesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TwilioSdkClient.DeleteLookupPhoneNumberOverridesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default4("/v2/PhoneNumbers/{PhoneNumber}/Overrides/{Field}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "Field", value: request.field, schema: s.string() },
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TwilioSdkClient.DeleteLookupPhoneNumberOverridesError,
      },
      options,
    );
  }

  deleteLookupRateLimit(
    request: TwilioSdkClient.DeleteLookupRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TwilioSdkClient.DeleteLookupRateLimitError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default4("/v2/RateLimits/Fields/{Field}/Bucket/{Bucket}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "Field", value: request.field, schema: s.string() },
          { name: "Bucket", value: request.bucket, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TwilioSdkClient.DeleteLookupRateLimitError,
      },
      options,
    );
  }

  fetchLookupAccountRateLimits(
    request: TwilioSdkClient.FetchLookupAccountRateLimitsRequest,
    options?: RequestOptions,
  ): ApiPromise<RateLimitListResponse, TwilioSdkClient.FetchLookupAccountRateLimitsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default4("/v2/RateLimits"),
        auth: this.#auth.accountSidAuthToken,
        query: [{ name: "Fields", value: request.fields, schema: s.optional(s.array(s.string())) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: rateLimitListResponseSchema },
        errorFactory: TwilioSdkClient.FetchLookupAccountRateLimitsError,
      },
      options,
    );
  }

  fetchLookupPhoneNumberOverrides(
    request: TwilioSdkClient.FetchLookupPhoneNumberOverridesRequest,
    options?: RequestOptions,
  ): ApiPromise<OverridesResponse, TwilioSdkClient.FetchLookupPhoneNumberOverridesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default4("/v2/PhoneNumbers/{PhoneNumber}/Overrides/{Field}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "Field", value: request.field, schema: s.string() },
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: overridesResponseSchema },
        errorFactory: TwilioSdkClient.FetchLookupPhoneNumberOverridesError,
      },
      options,
    );
  }

  fetchLookupRateLimit(
    request: TwilioSdkClient.FetchLookupRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<RateLimitResponse, TwilioSdkClient.FetchLookupRateLimitError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default4("/v2/RateLimits/Fields/{Field}/Bucket/{Bucket}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "Field", value: request.field, schema: s.string() },
          { name: "Bucket", value: request.bucket, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: rateLimitResponseSchema },
        errorFactory: TwilioSdkClient.FetchLookupRateLimitError,
      },
      options,
    );
  }

  updateChallengePasskeys(
    request: TwilioSdkClient.UpdateChallengePasskeysRequest,
    options?: RequestOptions,
  ): ApiPromise<V2ServicesPasskeysApproveChallengeResponse, ResponseError> {
    return this.#rawClient.execute<V2ServicesPasskeysApproveChallengeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Passkeys/ApproveChallenge"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: approvePasskeysChallengeRequestSchema },
      },
      {
        success: { kind: "json", schema: v2ServicesPasskeysApproveChallengeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateLookupPhoneNumberOverrides(
    request: TwilioSdkClient.UpdateLookupPhoneNumberOverridesRequest,
    options?: RequestOptions,
  ): ApiPromise<OverridesResponse, TwilioSdkClient.UpdateLookupPhoneNumberOverridesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default4("/v2/PhoneNumbers/{PhoneNumber}/Overrides/{Field}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "Field", value: request.field, schema: s.string() },
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => overridesRequestSchema)) },
      },
      {
        success: { kind: "json", schema: overridesResponseSchema },
        errorFactory: TwilioSdkClient.UpdateLookupPhoneNumberOverridesError,
      },
      options,
    );
  }

  updateLookupRateLimit(
    request: TwilioSdkClient.UpdateLookupRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<RateLimitResponse, TwilioSdkClient.UpdateLookupRateLimitError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default4("/v2/RateLimits/Fields/{Field}/Bucket/{Bucket}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "Field", value: request.field, schema: s.string() },
          { name: "Bucket", value: request.bucket, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => rateLimitRequestSchema)) },
      },
      {
        success: { kind: "json", schema: rateLimitResponseSchema },
        errorFactory: TwilioSdkClient.UpdateLookupRateLimitError,
      },
      options,
    );
  }

  updatePasskeysFactor(
    request: TwilioSdkClient.UpdatePasskeysFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<V2ServicesPasskeysVerifyFactorResponse, ResponseError> {
    return this.#rawClient.execute<V2ServicesPasskeysVerifyFactorResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Passkeys/VerifyFactor"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: verifyPasskeysFactorRequestSchema },
      },
      {
        success: { kind: "json", schema: v2ServicesPasskeysVerifyFactorResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TwilioSdkClient {
  export type CreateBulkLookupRequest = {
    body?: LookupRequest;
  };

  export type CreateLookupPhoneNumberOverridesRequest = {
    field: string;
    phoneNumber: string;
    body?: OverridesRequest;
  };

  export class CreateLookupPhoneNumberOverridesError extends ResponseError<
    Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
  > {
    static readonly errors: ErrorDecoders<CreateLookupPhoneNumberOverridesError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type DeleteLookupPhoneNumberOverridesRequest = {
    field: string;
    phoneNumber: string;
  };

  export class DeleteLookupPhoneNumberOverridesError extends ResponseError<
    Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
  > {
    static readonly errors: ErrorDecoders<DeleteLookupPhoneNumberOverridesError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type DeleteLookupRateLimitRequest = {
    field: string;
    bucket: string;
  };

  export class DeleteLookupRateLimitError extends ResponseError<
    Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
  > {
    static readonly errors: ErrorDecoders<DeleteLookupRateLimitError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type FetchLookupAccountRateLimitsRequest = {
    fields?: string[];
  };

  export class FetchLookupAccountRateLimitsError extends ResponseError<
    Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
  > {
    static readonly errors: ErrorDecoders<FetchLookupAccountRateLimitsError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type FetchLookupPhoneNumberOverridesRequest = {
    field: string;
    phoneNumber: string;
  };

  export class FetchLookupPhoneNumberOverridesError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error12",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<FetchLookupPhoneNumberOverridesError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type FetchLookupRateLimitRequest = {
    field: string;
    bucket: string;
  };

  export class FetchLookupRateLimitError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error12",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<FetchLookupRateLimitError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type UpdateChallengePasskeysRequest = {
    serviceSid: string;
    body: ApprovePasskeysChallengeRequest;
  };

  export type UpdateLookupPhoneNumberOverridesRequest = {
    field: string;
    phoneNumber: string;
    body?: OverridesRequest;
  };

  export class UpdateLookupPhoneNumberOverridesError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error12",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<UpdateLookupPhoneNumberOverridesError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type UpdateLookupRateLimitRequest = {
    field: string;
    bucket: string;
    body?: RateLimitRequest;
  };

  export class UpdateLookupRateLimitError extends ResponseError<
    Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
  > {
    static readonly errors: ErrorDecoders<UpdateLookupRateLimitError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type UpdatePasskeysFactorRequest = {
    serviceSid: string;
    body: VerifyPasskeysFactorRequest;
  };
}
