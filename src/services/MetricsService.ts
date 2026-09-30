/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MetricsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Metrics Monthly
     * Monthly permit counts and total valuation for a city/state/category.
     *
     * Available on the Developer plan and above (see /v1/billing/plans for current pricing).
     *
     * Served from a nightly rollup, so it answers in milliseconds where the equivalent
     * search-and-count takes seconds. At least one of `state` or `city` is required: an
     * unfiltered national series would be a different (and much larger) product.
     * @returns any Successful Response
     * @throws ApiError
     */
    public metricsMonthly({
        state,
        city,
        category,
        months = 24,
    }: {
        /**
         * Two-letter state code, e.g. FL
         */
        state?: (string | null),
        /**
         * City name; case-insensitive
         */
        city?: (string | null),
        /**
         * Permit category, e.g. ROOFING
         */
        category?: (string | null),
        /**
         * How many trailing months to return
         */
        months?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/metrics/monthly',
            query: {
                'state': state,
                'city': city,
                'category': category,
                'months': months,
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
     * Metrics Current
     * Category breakdown over a trailing window — the 'what is happening here now' view.
     *
     * Available on the Developer plan and above (see /v1/billing/plans for current pricing).
     * @returns any Successful Response
     * @throws ApiError
     */
    public metricsCurrent({
        state,
        city,
        days = 90,
    }: {
        state?: (string | null),
        city?: (string | null),
        /**
         * Trailing window. Rounded to whole months by the rollup.
         */
        days?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/metrics/current',
            query: {
                'state': state,
                'city': city,
                'days': days,
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
     * Metrics Cities
     * Busiest cities in a state — the ranking customers were building by hand.
     *
     * Available on the Developer plan and above (see /v1/billing/plans for current pricing).
     * @returns any Successful Response
     * @throws ApiError
     */
    public metricsCities({
        state,
        category,
        months = 12,
        limit = 50,
    }: {
        state: string,
        category?: (string | null),
        months?: number,
        limit?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/metrics/cities',
            query: {
                'state': state,
                'category': category,
                'months': months,
                'limit': limit,
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
