import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecordingAddOnResultPayloadData = {
  /** The URL to redirect to to get the data returned by the AddOn that was previously stored. */
  redirectTo?: string | null;
};

export const recordingAddOnResultPayloadDataSchema: Schema<RecordingAddOnResultPayloadData> =
  s.object<RecordingAddOnResultPayloadData>({
    redirectTo: s.optionalNullable(s.string()),
    _keysMap: {
      redirectTo: "redirect_to",
    },
  });
