import { s, type Schema } from "../core/index.js";
import {
  callSummaryCrelayInterruptionsSchema,
  type CallSummaryCrelayInterruptions,
} from "./call-summary-crelay-interruptions.js";
import {
  callSummaryCrelayRateStatsSchema,
  type CallSummaryCrelayRateStats,
} from "./call-summary-crelay-rate-stats.js";
import {
  callSummaryCrelaySessionStateSchema,
  type CallSummaryCrelaySessionState,
} from "./call-summary-crelay-session-state.js";
import {
  callSummaryCrelayTokenStatsSchema,
  type CallSummaryCrelayTokenStats,
} from "./call-summary-crelay-token-stats.js";
import {
  callSummaryCrelayWordStatsSchema,
  type CallSummaryCrelayWordStats,
} from "./call-summary-crelay-word-stats.js";

export type CallSummaryAgentSessionSummary = {
  sessionId?: string;
  ttsLatencyMs?: CallSummaryCrelayRateStats;
  sttLatencyMs?: CallSummaryCrelayRateStats;
  networkLatencyMs?: CallSummaryCrelayRateStats;
  timeToFirstAudioMs?: CallSummaryCrelayRateStats;
  applicationLatencyMs?: CallSummaryCrelayRateStats;
  tokens?: CallSummaryCrelayTokenStats;
  words?: CallSummaryCrelayWordStats;
  turns?: number;
  interruptions?: CallSummaryCrelayInterruptions;
  sessionState?: CallSummaryCrelaySessionState;
};

export const callSummaryAgentSessionSummarySchema: Schema<CallSummaryAgentSessionSummary> =
  s.object<CallSummaryAgentSessionSummary>({
    sessionId: s.optional(s.string()),
    ttsLatencyMs: s.optional(s.lazy(() => callSummaryCrelayRateStatsSchema)),
    sttLatencyMs: s.optional(s.lazy(() => callSummaryCrelayRateStatsSchema)),
    networkLatencyMs: s.optional(s.lazy(() => callSummaryCrelayRateStatsSchema)),
    timeToFirstAudioMs: s.optional(s.lazy(() => callSummaryCrelayRateStatsSchema)),
    applicationLatencyMs: s.optional(s.lazy(() => callSummaryCrelayRateStatsSchema)),
    tokens: s.optional(s.lazy(() => callSummaryCrelayTokenStatsSchema)),
    words: s.optional(s.lazy(() => callSummaryCrelayWordStatsSchema)),
    turns: s.optional(s.number()),
    interruptions: s.optional(s.lazy(() => callSummaryCrelayInterruptionsSchema)),
    sessionState: s.optional(s.lazy(() => callSummaryCrelaySessionStateSchema)),
    _keysMap: {
      sessionId: "session_id",
      ttsLatencyMs: "tts_latency_ms",
      sttLatencyMs: "stt_latency_ms",
      networkLatencyMs: "network_latency_ms",
      timeToFirstAudioMs: "time_to_first_audio_ms",
      applicationLatencyMs: "application_latency_ms",
      sessionState: "session_state",
    },
  });
