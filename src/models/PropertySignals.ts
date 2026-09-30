/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Boolean/scalar rollups useful for underwriting, valuation and diligence.
 *
 * Derived from permit category + tags + offline enrichment across every
 * permit matched at the address. Dates are the most-recent permit of that
 * kind (ISO yyyy-mm-dd) so you can reason about roof/solar/pool age.
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

