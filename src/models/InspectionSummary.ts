/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InspectionSummary = {
    id: string;
    permit_id?: (string | null);
    permit_number?: (string | null);
    inspection_number?: (string | null);
    inspection_type: string;
    inspection_type_raw?: (string | null);
    trade: string;
    is_final: boolean;
    result: string;
    result_raw?: (string | null);
    is_reinspection?: (boolean | null);
    date_requested?: (string | null);
    date_scheduled?: (string | null);
    date_inspected?: (string | null);
    inspection_date?: (string | null);
    inspection_date_basis: string;
    inspector_name?: (string | null);
    address_street?: (string | null);
    address_city?: (string | null);
    address_state: string;
    address_zip?: (string | null);
    parcel_id?: (string | null);
    jurisdiction_id?: (string | null);
    source: string;
    source_id: string;
    origin: string;
    key_basis: string;
    scope?: string;
    certificate_number?: (string | null);
    certificate_date?: (string | null);
    violations?: null;
};

