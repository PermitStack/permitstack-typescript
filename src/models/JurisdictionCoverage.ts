/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Recorded currency and contractor-name presence for jurisdictions on this page.
 *
 * `data_through` is the newest relevant held permit date where measured; it may
 * be null. A current date does not establish complete capture or explain why a
 * particular record is missing. `with_contractor` counts records on this page
 * with a linked contractor name, not a source-wide completeness measurement.
 */
export type JurisdictionCoverage = {
    jurisdiction: string;
    data_through?: (string | null);
    status?: string;
    results_on_page?: number;
    with_contractor?: number;
};

