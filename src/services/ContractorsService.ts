/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContractorProfile } from '../models/ContractorProfile';
import type { ContractorSearchResponse } from '../models/ContractorSearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContractorsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Contractors
     * Search contractors by name, location, or specialty, ranked by activity score.
     * @returns ContractorSearchResponse Successful Response
     * @throws ApiError
     */
    public searchContractors({
        name,
        state,
        city,
        specialty,
        licenseNumber,
        licenseState,
        minPermits,
        minScore,
        sort = 'score',
        page = 1,
        perPage = 25,
    }: {
        /**
         * Contractor name (partial match)
         */
        name?: (string | null),
        /**
         * 2-letter state code
         */
        state?: (string | null),
        /**
         * City name
         */
        city?: (string | null),
        /**
         * Specialty tag (e.g. solar, roofing, hvac)
         */
        specialty?: (string | null),
        /**
         * Exact state licence number, e.g. 'CBC1262595'. Matched exactly, and also tried uppercased -- so any capitalisation works for the licences stored uppercase, which is 99.96% of them. Combine with license_state when the same number is issued in more than one state.
         */
        licenseNumber?: (string | null),
        /**
         * 2-letter state that ISSUED the licence. Not the same as `state`, which is where the contractor pulls permits.
         */
        licenseState?: (string | null),
        /**
         * Minimum total permits
         */
        minPermits?: (number | null),
        /**
         * Minimum contractor activity score (0-100)
         */
        minScore?: (number | null),
        /**
         * Sort order: 'score' (default), 'permits', or 'recent'
         */
        sort?: string,
        page?: number,
        perPage?: number,
    }): CancelablePromise<ContractorSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contractors/search',
            query: {
                'name': name,
                'state': state,
                'city': city,
                'specialty': specialty,
                'license_number': licenseNumber,
                'license_state': licenseState,
                'min_permits': minPermits,
                'min_score': minScore,
                'sort': sort,
                'page': page,
                'per_page': perPage,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Contractor
     * Get a contractor's full profile with permit stats.
     *
     * `phone` and `email` are contractor contact fields gated to the Developer plan and up
     * (see /v1/billing/plans for current pricing); on free/indie/hobbyist they return null.
     * `name`, `license_number`, `specialties`, `city`/`state`/`address`, and the stats are
     * available on all plans.
     * @returns ContractorProfile Successful Response
     * @throws ApiError
     */
    public getContractor({
        contractorId,
    }: {
        contractorId: string,
    }): CancelablePromise<ContractorProfile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contractors/{contractor_id}',
            path: {
                'contractor_id': contractorId,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Contractor Permits
     * Get all permits associated with a contractor.
     * @returns any Successful Response
     * @throws ApiError
     */
    public getContractorPermits({
        contractorId,
        page = 1,
        perPage = 25,
    }: {
        contractorId: string,
        page?: number,
        perPage?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contractors/{contractor_id}/permits',
            path: {
                'contractor_id': contractorId,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
