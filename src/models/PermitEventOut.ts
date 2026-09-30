/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PermitEventOut = {
    id: number;
    permit_id: string;
    event_type: string;
    old_value?: (string | null);
    new_value?: (string | null);
    occurred_on?: (string | null);
    detected_at: string;
    permit_number?: (string | null);
    address_street?: (string | null);
    address_city?: (string | null);
    address_state?: (string | null);
    category?: (string | null);
    jurisdiction_name?: (string | null);
    /**
     * Stable id of the contractor of record, joinable to /v1/contractors/{id}. Null where the source publishes no contractor.
     */
    contractor_id?: (string | null);
    /**
     * RESIDENTIAL, COMMERCIAL, MIXED_USE, ... or UNKNOWN, as on /v1/permits/search.
     */
    property_type?: (string | null);
    /**
     * The permit's scope of work as the jurisdiction published it (description_raw on search).
     */
    description?: (string | null);
};

