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
     * Search contractors by name, location, or specialty.
     * @returns ContractorSearchResponse Successful Response
     * @throws ApiError
     */
    public searchContractors({
        name,
        state,
        city,
        specialty,
        minPermits,
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
         * Minimum total permits
         */
        minPermits?: (number | null),
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
                'min_permits': minPermits,
                'page': page,
                'per_page': perPage,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Contractor
     * Get a contractor's full profile with permit stats.
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
                422: `Validation Error`,
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
                422: `Validation Error`,
            },
        });
    }
}
