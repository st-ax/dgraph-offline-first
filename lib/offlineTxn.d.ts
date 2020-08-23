import { DgraphClient } from "dgraph-js-http";
import { Assigned, Mutation, Response, TxnOptions } from "dgraph-js-http/lib/types";
export declare class OfflineTxn {
    private readonly dc;
    private readonly dcTxn;
    private readonly ctx;
    private finished;
    private readonly mutated;
    constructor(dc: DgraphClient, options?: TxnOptions);
    query(q: string, options?: {
        debug?: boolean;
    }): Promise<Response>;
    queryWithVars(q: string, vars?: {
        [k: string]: any;
    }, options?: {
        debug?: boolean;
    }): Promise<Response>;
    mutate(mu: Mutation): Promise<Assigned>;
    commit(): Promise<void>;
    discard(): Promise<void>;
    private mergeArrays;
    private mergeContext;
}
