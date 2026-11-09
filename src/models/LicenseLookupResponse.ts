/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LicenseRecord } from './LicenseRecord';
import type { LinkedContractor } from './LinkedContractor';
export type LicenseLookupResponse = {
    access: string;
    licenses: Array<LicenseRecord>;
    total: number;
    locked_fields?: (Array<string> | null);
    upgrade_url?: (string | null);
    license_number: string;
    state: string;
    contractors: Array<LinkedContractor>;
};

