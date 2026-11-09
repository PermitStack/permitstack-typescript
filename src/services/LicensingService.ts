/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContractorLicensesResponse } from '../models/ContractorLicensesResponse';
import type { LicenseLookupResponse } from '../models/LicenseLookupResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LicensingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Contractor Licenses
     * Licences the public licence boards publish for one contractor.
     *
     * A licence is linked by the contractor's licence number in the board's issuing state (the
     * names must also agree -- licence-number spaces collide across boards -- except in
     * Washington L&I's roster, where a number on one row is enough), or by the contractor's exact
     * normalised name in its state where that name is unique in the board's roster. A
     * registration (record_kind "registration") is linked by name only. No fuzzy matching. Bond,
     * insurance, workers' comp and discipline are Licensing Pro fields. Contact data is not part
     * of this dataset.
     * @returns ContractorLicensesResponse Successful Response
     * @throws ApiError
     */
    public getContractorLicenses({
        contractorId,
    }: {
        contractorId: string,
    }): CancelablePromise<ContractorLicensesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contractors/{contractor_id}/licenses',
            path: {
                'contractor_id': contractorId,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                403: `Your plan does not include this endpoint, or an option you passed. The body is machine-readable: \`error\` is \`feature_locked\`, \`feature\` names the gate, \`upgrade_url\` links to the cheapest plan that unlocks it, and \`current_tier\` is the plan you are on.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Lookup License
     * One licence number in one issuing state, as every roster we hold for that state
     * publishes it, plus the contractors in our permit data carrying that licence number.
     * @returns LicenseLookupResponse Successful Response
     * @throws ApiError
     */
    public lookupLicense({
        licenseNumber,
        state,
    }: {
        /**
         * Licence number as issued (spaces, dashes and case are ignored)
         */
        licenseNumber: string,
        /**
         * 2-letter issuing state
         */
        state: string,
    }): CancelablePromise<LicenseLookupResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/licenses/lookup',
            query: {
                'license_number': licenseNumber,
                'state': state,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                403: `Your plan does not include this endpoint, or an option you passed. The body is machine-readable: \`error\` is \`feature_locked\`, \`feature\` names the gate, \`upgrade_url\` links to the cheapest plan that unlocks it, and \`current_tier\` is the plan you are on.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
