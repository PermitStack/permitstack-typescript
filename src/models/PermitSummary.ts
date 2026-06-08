/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermitEnrichment } from './PermitEnrichment';
export type PermitSummary = {
    id: string;
    permit_number: (string | null);
    status: string;
    category: string;
    tags: (Array<string> | null);
    property_type: string;
    address_street: (string | null);
    address_city: (string | null);
    address_state: (string | null);
    address_zip: (string | null);
    description_raw: (string | null);
    estimated_value: (number | null);
    date_filed: (string | null);
    date_issued: (string | null);
    date_completed: (string | null);
    contractor_name?: (string | null);
    jurisdiction_name?: (string | null);
    latitude?: (number | null);
    longitude?: (number | null);
    enrichment?: (PermitEnrichment | null);
};

