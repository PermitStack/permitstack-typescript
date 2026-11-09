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
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
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
                402: `Record credits empty or expired`,
                409: `Wallet busy, or CSV count/cost changed`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Contractor
     * Get a contractor's full profile with permit stats.
     *
     * `phone`, `email` and the street `address` are contractor contact fields gated to the
     * Developer plan and up (see /v1/billing/plans for current pricing); on free/indie/hobbyist
     * they return null and `locked_fields` names them. `name`, `license_number`, `specialties`,
     * `city`/`state`/`zip_code`, and the stats are available on all plans.
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
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
                402: `Record credits empty or expired`,
                409: `Wallet busy, or CSV count/cost changed`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Contractor Permits
     * Search a page of held permit records linked to a contractor. Source coverage,
     * available names and contractor matching affect results; these records are not
     * a complete project history or proof of completed work.
     *
     * Free keys created after the grandfathering cutoff (free_new) see only their recent
     * window, exactly as on /v1/permits/search and /v1/property/history, and the page is
     * capped at their tier's max_per_page. Paid and grandfathered (free_legacy) keys see the
     * held history without that date restriction, subject to pagination and coverage.
     * The window is stated in the X-PermitStack-Date-Window-*
     * headers, the same additive signal property history uses.
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
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
                402: `Record credits empty or expired`,
                409: `Wallet busy, or CSV count/cost changed`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
