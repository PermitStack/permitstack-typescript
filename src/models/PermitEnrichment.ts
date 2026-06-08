/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Curated subset of the offline LLM enrichment (permits.enriched_data).
 *
 * Present only on the ~1-2% of permits that have been enriched so far
 * (prioritized toward SOLAR/ROOFING/NEW_CONSTRUCTION). null otherwise.
 */
export type PermitEnrichment = {
    scope?: (string | null);
    work_summary?: (string | null);
    solar_kw?: (number | null);
    sqft?: (number | null);
    units?: (number | null);
    is_residential?: (boolean | null);
    is_commercial?: (boolean | null);
    materials?: (Array<string> | null);
};

