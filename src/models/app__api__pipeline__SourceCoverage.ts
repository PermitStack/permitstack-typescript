/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type app__api__pipeline__SourceCoverage = {
    source_id: string;
    name: string;
    state: string;
    dataset: string;
    data_through?: (string | null);
    freshness: string;
    data_status: string;
    records: number;
    decided_records: number;
    linked_share?: (number | null);
    completeness?: (number | null);
    cadence?: (string | null);
    note?: (string | null);
};

