/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PropertyHistoryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Property History
     * Get the complete construction history for a property address.
     *
     * Returns all permits ever filed at or near this address, sorted by date.
     * Useful for insurance underwriting, real estate due diligence, and property valuation.
     * @returns any Successful Response
     * @throws ApiError
     */
    public getPropertyHistory({
        address,
    }: {
        /**
         * Street address to look up
         */
        address: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/property/history',
            query: {
                'address': address,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
