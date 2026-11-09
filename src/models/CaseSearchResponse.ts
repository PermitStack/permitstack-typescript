/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__api__pipeline__SourceCoverage } from './app__api__pipeline__SourceCoverage';
import type { CaseSummary } from './CaseSummary';
export type CaseSearchResponse = {
    results: Array<CaseSummary>;
    total: (number | null);
    total_capped?: boolean;
    total_unknown?: boolean;
    page: number;
    per_page: number;
    sources: Array<app__api__pipeline__SourceCoverage>;
};

