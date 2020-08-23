export interface OfflineMutation {
    setJson?: Record<string, unknown>;
    deleteJson?: Record<string, unknown>;
    setNquads?: string;
    deleteNquads?: string;
    startTs?: number;
    commitNow?: boolean;
    mutation?: string;
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
