/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Another source's copy of the same record (a twin), with its own status and money: the
 * hearing outcome of a building violation lives on its hearing-feed twin (D4).
 */
export type TwinRecord = {
    id: string;
    source: string;
    source_id: string;
    status: string;
    status_raw?: (string | null);
    fine_amount?: (number | null);
    amount_paid?: (number | null);
    balance_due?: (number | null);
    closed_date?: (string | null);
    case_number?: (string | null);
};

