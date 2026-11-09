/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CreditsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Packs
     * @returns any Successful Response
     * @throws ApiError
     */
    public packs(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/credits/packs',
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Api Balance
     * @returns any Successful Response
     * @throws ApiError
     */
    public apiBalance(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/credits/balance',
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
