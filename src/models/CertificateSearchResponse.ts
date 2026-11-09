/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__api__certificates__SourceCoverage } from './app__api__certificates__SourceCoverage';
import type { CertificateSummary } from './CertificateSummary';
export type CertificateSearchResponse = {
    results: Array<CertificateSummary>;
    total: (number | null);
    total_capped?: boolean;
    total_unknown?: boolean;
    page: number;
    per_page: number;
    sources: Array<app__api__certificates__SourceCoverage>;
};

