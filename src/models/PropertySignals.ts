/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Boolean/scalar rollups useful for underwriting, valuation and diligence.
 *
 * Derived from category, tags and enrichment on held matches within the plan's
 * history window. Dates prefer issue, then filing, then completion date where
 * available (ISO yyyy-mm-dd). They are permit-date proxies, not verified
 * installation dates or current equipment condition. Missing records and
 * classification errors can affect these signals.
 */
export type PropertySignals = {
    has_solar?: boolean;
    solar_kw?: (number | null);
    last_solar_date?: (string | null);
    has_battery?: boolean;
    last_battery_date?: (string | null);
    has_roofing?: boolean;
    last_roofing_date?: (string | null);
    has_pool?: boolean;
    last_pool_date?: (string | null);
    has_addition?: boolean;
    has_new_construction?: boolean;
    has_electrical?: boolean;
    has_hvac?: boolean;
    last_hvac_date?: (string | null);
    has_plumbing?: boolean;
    has_demolition?: boolean;
    last_activity_date?: (string | null);
};

