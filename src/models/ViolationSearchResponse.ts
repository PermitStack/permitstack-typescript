/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__api__violations__SourceCoverage } from './app__api__violations__SourceCoverage';
import type { ViolationSummary } from './ViolationSummary';
export type ViolationSearchResponse = {
    results: Array<ViolationSummary>;
    total: (number | null);
    total_capped?: boolean;
    total_unknown?: boolean;
    page: number;
    per_page: number;
    sources: Array<app__api__violations__SourceCoverage>;
};

