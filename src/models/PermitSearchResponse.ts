/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoverageConfidence } from './CoverageConfidence';
import type { Hint } from './Hint';
import type { JurisdictionCoverage } from './JurisdictionCoverage';
import type { PermitSummary } from './PermitSummary';
export type PermitSearchResponse = {
    total: (number | null);
    page: number;
    per_page: number;
    results: Array<PermitSummary>;
    hints?: Array<Hint>;
    coverage_confidence?: (CoverageConfidence | null);
    tier_window_days?: (number | null);
    tier_window_from?: (string | null);
    tier_window_clamped?: boolean;
    tier_window_upgrade_url?: (string | null);
    locked_fields?: (Array<string> | null);
    locked_upgrade_url?: (string | null);
    coverage?: Array<JurisdictionCoverage>;
    total_capped?: boolean;
    total_unknown?: boolean;
};

