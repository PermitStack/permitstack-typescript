/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type app__api__violations__SourceCoverage = {
    source_id: string;
    name: string;
    state: string;
    data_through?: (string | null);
    freshness: string;
    data_status: string;
    coverage_window: string;
    window_days?: (number | null);
    history_start?: (string | null);
    records: number;
    complaint_records?: number;
    open_records?: number;
    stale_open_records?: number;
    count_unit?: string;
    fines_published?: boolean;
    completeness?: (number | null);
    cadence?: (string | null);
    note?: (string | null);
};

