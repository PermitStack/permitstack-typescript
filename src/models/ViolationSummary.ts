/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ViolationSummary = {
    id: string;
    record_kind: string;
    case_number?: (string | null);
    violation_number?: (string | null);
    violation_code?: (string | null);
    violation_code_description?: (string | null);
    violation_type?: (string | null);
    category: string;
    status: string;
    not_counted?: ('void' | 'process' | null);
    opened_date?: (string | null);
    closed_date?: (string | null);
    inspection_date?: (string | null);
    record_date?: (string | null);
    record_date_basis: string;
    fine_amount?: (number | null);
    amount_paid?: (number | null);
    balance_due?: (number | null);
    address_street?: (string | null);
    address_city?: (string | null);
    address_state: string;
    address_zip?: (string | null);
    latitude?: (number | null);
    longitude?: (number | null);
    parcel_id?: (string | null);
    bin?: (string | null);
    permit_id?: (string | null);
    linked_permit_number?: (string | null);
    jurisdiction_id?: (string | null);
    source: string;
    source_id: string;
    origin: string;
};

