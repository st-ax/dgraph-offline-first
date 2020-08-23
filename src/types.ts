// import * as https from "https";

export interface OfflineMutation {
    setJson?: Record<string, unknown>;
    deleteJson?: Record<string, unknown>;
    setNquads?: string;
    deleteNquads?: string;
    startTs?: number;
    commitNow?: boolean;
    // Raw mutation text to send;
    mutation?: string;
    // Set to true if `mutation` field (above) contains a JSON mutation.
    isJsonString?: boolean;
}
export interface OfflineTxnContext {
    start_ts: number;
    aborted?: boolean;
    keys?: string[];
    preds?: string[];
    readOnly: boolean;
    bestEffort: boolean;
}
export interface OfflineTxnOptions {
    readOnly?: boolean;
    bestEffort?: boolean;
}

// export interface ErrorNonJson extends Error {
//     responseText?: string;
// }

// export interface Options extends https.RequestOptions {
//     agent?: https.Agent;
// }

// export interface Config extends Options {
//     acceptRawText?: boolean;
//     body?: string;
// }
