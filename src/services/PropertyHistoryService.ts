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
     * Complete construction history + property profile for an address.
     *
     * Matches every permit whose street address contains the supplied address;
     * pass `city`/`state`/`zip` to disambiguate the same street number across
     * metros. Returns a derived profile (permit timeline, category breakdown,
     * contractors, and underwriting signals such as solar/roof/pool age) plus
     * the paginated permit records.
     *
     * An address with **no** permits returns `found: false` with an empty
     * profile (HTTP 200) — a clean property is a valid, useful answer, not an
     * error.
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
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Property By Parcel
     * Complete construction history + property profile for a parcel / APN.
     *
     * Looks up every permit whose source parcel number matches `parcel`, with
     * formatting ignored, so an APN from a county appraiser matches regardless of how
     * the permit feed punctuates it. Pass `state` to disambiguate the same parcel
     * number used by different counties. Returns the same profile shape as /history
     * (timeline, category breakdown, contractors, and roof/solar/HVAC age signals).
     *
     * Parcel coverage spans the county / appraiser / GIS sources that publish a parcel
     * id; a handful of Accela-sourced jurisdictions omit parcel in their public export
     * and won't match here (use /property/history by address for those).
     *
     * A parcel with **no** permits returns `found: false` (HTTP 200), not an error.
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
         * Parcel number / APN / folio. Formatting is ignored — dashes, dots and spaces are stripped before matching.
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
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
