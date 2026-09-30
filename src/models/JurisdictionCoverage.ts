/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * How current one jurisdiction's data is, for the jurisdictions on THIS page of results.
 *
 * Lets you tell "this source has not yet published the window you asked about" apart from
 * "this data is missing": `data_through` is the newest permit we hold for the jurisdiction,
 * and `with_contractor` shows how many rows on this page carry a contractor name.
 */
export type JurisdictionCoverage = {
    jurisdiction: string;
    data_through?: (string | null);
    status?: string;
    results_on_page?: number;
    with_contractor?: number;
};

