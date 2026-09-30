/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hint } from './Hint';
import type { PermitEventOut } from './PermitEventOut';
export type PermitEventsResponse = {
    total: (number | null);
    page: number;
    per_page: number;
    results: Array<PermitEventOut>;
    total_capped?: boolean;
    total_unknown?: boolean;
    hints?: Array<Hint>;
    /**
     * Pass back as `cursor` to receive only events you have not seen yet, with no duplicates and no gap. Null when this page cannot define a resume point (i.e. a `page` beyond the first, where the newest row on the page is not the newest overall).
     */
    next_cursor?: (string | null);
};

