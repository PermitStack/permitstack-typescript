/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DecisionDetail } from './DecisionDetail';
import type { LinkedPermit } from './LinkedPermit';
export type CaseDetail = {
    id: string;
    case_number?: (string | null);
    case_type: string;
    case_type_raw?: (string | null);
    status: string;
    status_raw?: (string | null);
    date_filed?: (string | null);
    date_hearing?: (string | null);
    date_decision?: (string | null);
    record_date?: (string | null);
    record_date_basis: string;
    decision_body?: (string | null);
    /**
     * Summary built only from the city's structured fields (case type, status, zoning, unit and area counts, designated use fields); no term is taken from free-text descriptions. May be incomplete: an omitted use or count does not mean the source lacks it.
     */
    scope_summary?: (string | null);
    /**
     * Source and limits of scope_summary.
     */
    scope_summary_note?: string;
    zoning_from?: (string | null);
    zoning_to?: (string | null);
    units?: (number | null);
    acres?: (number | null);
    square_footage?: (number | null);
    address_street?: (string | null);
    address_city?: (string | null);
    address_state: string;
    address_zip?: (string | null);
    parcel_id?: (string | null);
    latitude?: (number | null);
    longitude?: (number | null);
    jurisdiction_id?: (string | null);
    source: string;
    source_id: string;
    origin: string;
    source_url?: (string | null);
    decisions: Array<DecisionDetail>;
    permits: Array<LinkedPermit>;
    permits_total: number;
    source_record?: (Record<string, any> | null);
    updated_at?: (string | null);
};

