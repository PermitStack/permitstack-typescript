/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HealthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Health Check
     * @returns any Successful Response
     * @throws ApiError
     */
    public healthCheck(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/health',
        });
    }
    /**
     * Public Stats
     * Public stats endpoint — no auth required.
     * Returns aggregate coverage numbers for marketing/transparency.
     * Cached server-side for 5 minutes.
     * @returns any Successful Response
     * @throws ApiError
     */
    public publicStats(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/stats',
        });
    }
}
