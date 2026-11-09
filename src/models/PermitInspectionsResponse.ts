/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__api__inspections__SourceCoverage } from './app__api__inspections__SourceCoverage';
import type { InspectionSummary } from './InspectionSummary';
export type PermitInspectionsResponse = {
    results: Array<InspectionSummary>;
    total: (number | null);
    total_capped?: boolean;
    total_unknown?: boolean;
    page: number;
    per_page: number;
    sources: Array<app__api__inspections__SourceCoverage>;
    permit_id: string;
};

