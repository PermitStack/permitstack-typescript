/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Honest read on whether a `found: false` is meaningful or just missing data.
 *
 * The wedge competitors won't ship: a 'no permit on record' is only useful if we
 * actually cover that jurisdiction. We say so explicitly so an automated (e.g.
 * underwriting) workflow can tell UNKNOWN apart from genuinely-no-work.
 */
export type CoverageConfidence = {
    confidence: string;
    covered: boolean;
    jurisdiction?: (string | null);
    data_status?: (string | null);
    data_through?: (string | null);
    freshness?: (string | null);
    jurisdiction_permit_count?: (number | null);
    note: string;
    tier_window_days?: (number | null);
    tier_window_from?: (string | null);
};

