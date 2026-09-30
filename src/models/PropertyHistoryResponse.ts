/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoverageConfidence } from './CoverageConfidence';
import type { JurisdictionCoverage } from './JurisdictionCoverage';
import type { PermitSummary } from './PermitSummary';
import type { PropertyQuery } from './PropertyQuery';
import type { PropertySummary } from './PropertySummary';
export type PropertyHistoryResponse = {
    query: PropertyQuery;
    found: boolean;
    total_matches: number;
    truncated: boolean;
    distinct_addresses?: (number | null);
    distinct_jurisdictions?: (number | null);
    fan_out_warning?: (string | null);
    summary: PropertySummary;
    coverage?: (CoverageConfidence | null);
    data_currency?: (Array<JurisdictionCoverage> | null);
    page: number;
    per_page: number;
    has_more: boolean;
    permits: Array<PermitSummary>;
};

