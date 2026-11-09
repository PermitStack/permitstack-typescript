/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LicenseRecord } from './LicenseRecord';
export type ContractorLicensesResponse = {
    access: string;
    licenses: Array<LicenseRecord>;
    total: number;
    locked_fields?: (Array<string> | null);
    upgrade_url?: (string | null);
    contractor_id: string;
    contractor_name?: (string | null);
    note?: (string | null);
};

