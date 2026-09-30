/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertySignals } from './PropertySignals';
export type PropertySummary = {
    total_permits: number;
    first_permit_date?: (string | null);
    last_permit_date?: (string | null);
    years_of_history?: (number | null);
    total_estimated_value?: (number | null);
    categories: Record<string, number>;
    jurisdictions: Array<string>;
    contractors: Array<string>;
    signals: PropertySignals;
};

