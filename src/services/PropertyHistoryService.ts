/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyHistoryResponse } from '../models/PropertyHistoryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PropertyHistoryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Property History
     * Held permit history and a derived profile for an address.
     *
     * Searches stored permit addresses using the supplied address and optional
     * `city`/`state`/`zip` filters. Results depend on source coverage, address
     * matching and the plan's history window. Follow pagination for permit records;
     * `truncated` identifies capped contractor and jurisdiction profile lists.
     *
     * Category and date signals describe matching permit records. Date signals
     * prefer issue date, then filing date, then completion date where available;
     * they do not verify installation, replacement or current property condition.
     *
     * No matching records returns `found: false` with an empty profile (HTTP 200).
     * Inspect the coverage block and capture note. A miss is not proof that no
     * permit or work exists, even where a source is current.
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
     * @returns PropertyHistoryResponse Successful Response
     * @throws ApiError
     */
    public getPropertyHistory({
        address,
        city,
        state,
        zip,
        page = 1,
        perPage = 50,
        limit,
    }: {
        /**
         * Street address to look up (e.g. '123 Main St')
         */
        address: string,
        /**
         * Optional city to disambiguate identical street addresses
         */
        city?: (string | null),
        /**
         * Optional 2-letter state code
         */
        state?: (string | null),
        /**
         * Optional ZIP (prefix-matched)
         */
        zip?: (string | null),
        page?: number,
        perPage?: number,
        /**
         * Alias of per_page.
         */
        limit?: (number | null),
    }): CancelablePromise<PropertyHistoryResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/property/history',
            query: {
                'address': address,
                'city': city,
                'state': state,
                'zip': zip,
                'page': page,
                'per_page': perPage,
                'limit': limit,
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
     * Get Property By Parcel
     * Held permit history and a derived profile for a parcel / APN.
     *
     * Searches stored parcel identifiers with supported formatting normalization.
     * Pass `state` to narrow reused parcel numbers. Missing or inconsistent source
     * identifiers can prevent a match; use /property/history by address as another
     * lookup. Review `distinct_addresses` and `fan_out_warning` for multi-address
     * parcels before treating a profile as one property.
     *
     * Results depend on coverage, matching and the plan's history window. Permit
     * records are paginated; `truncated` identifies capped contractor and jurisdiction
     * profile lists. Date signals prefer issue date, then filing date, then completion
     * date where available. They are permit-date proxies, not verified installation,
     * replacement or present-condition evidence.
     *
     * No matching records returns `found: false` (HTTP 200). Inspect the coverage
     * block and capture note; a miss does not establish that no permit or work exists.
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
     * @returns PropertyHistoryResponse Successful Response
     * @throws ApiError
     */
    public getPropertyByParcel({
        parcel,
        state,
        page = 1,
        perPage = 50,
        limit,
    }: {
        /**
         * Parcel number / APN / folio. Formatting is ignored  -  dashes, dots and spaces are stripped before matching.
         */
        parcel: string,
        /**
         * Optional 2-letter state to disambiguate the same parcel number across counties
         */
        state?: (string | null),
        page?: number,
        perPage?: number,
        /**
         * Alias of per_page.
         */
        limit?: (number | null),
    }): CancelablePromise<PropertyHistoryResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/property/by-parcel',
            query: {
                'parcel': parcel,
                'state': state,
                'page': page,
                'per_page': perPage,
                'limit': limit,
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
