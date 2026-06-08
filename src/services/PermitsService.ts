/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermitDetail } from '../models/PermitDetail';
import type { PermitSearchResponse } from '../models/PermitSearchResponse';
import type { PermitStatus } from '../models/PermitStatus';
import type { PropertyType } from '../models/PropertyType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PermitsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Permits
     * @returns PermitSearchResponse Successful Response
     * @throws ApiError
     */
    public searchPermits({
        zipCode,
        city,
        state,
        jurisdiction,
        lat,
        lng,
        radiusMiles = 5,
        category,
        status,
        propertyType,
        tag,
        recordKind = 'permit',
        filedAfter,
        filedBefore,
        issuedAfter,
        issuedBefore,
        minValue,
        maxValue,
        q,
        contractorName,
        page = 1,
        perPage = 25,
    }: {
        /**
         * 5-digit ZIP code
         */
        zipCode?: (string | null),
        /**
         * City name
         */
        city?: (string | null),
        /**
         * 2-letter state code
         */
        state?: (string | null),
        /**
         * Jurisdiction name (e.g. 'Wake County', 'Tacoma') or partial match
         */
        jurisdiction?: (string | null),
        /**
         * Latitude for radius search
         */
        lat?: (number | null),
        /**
         * Longitude for radius search
         */
        lng?: (number | null),
        /**
         * Radius in miles (used with lat/lng)
         */
        radiusMiles?: number,
        /**
         * Permit category (e.g. solar, SOLAR, roofing, hvac — case insensitive)
         */
        category?: (string | null),
        /**
         * Permit status (e.g. issued, filed, final)
         */
        status?: (PermitStatus | null),
        /**
         * Property type (e.g. residential, commercial)
         */
        propertyType?: (PropertyType | null),
        /**
         * Filter by tag
         */
        tag?: (string | null),
        /**
         * Record kind: 'permit' (default, building permits only), 'contractor', 'tag', 'non_building', 'admin', or 'all'
         */
        recordKind?: string,
        /**
         * Filed on or after this date
         */
        filedAfter?: (string | null),
        /**
         * Filed on or before this date
         */
        filedBefore?: (string | null),
        /**
         * Issued on or after this date
         */
        issuedAfter?: (string | null),
        /**
         * Issued on or before this date
         */
        issuedBefore?: (string | null),
        /**
         * Minimum estimated value
         */
        minValue?: (number | null),
        /**
         * Maximum estimated value
         */
        maxValue?: (number | null),
        /**
         * Full-text search query
         */
        q?: (string | null),
        /**
         * Contractor name (partial match)
         */
        contractorName?: (string | null),
        page?: number,
        perPage?: number,
    }): CancelablePromise<PermitSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/search',
            query: {
                'zip_code': zipCode,
                'city': city,
                'state': state,
                'jurisdiction': jurisdiction,
                'lat': lat,
                'lng': lng,
                'radius_miles': radiusMiles,
                'category': category,
                'status': status,
                'property_type': propertyType,
                'tag': tag,
                'record_kind': recordKind,
                'filed_after': filedAfter,
                'filed_before': filedBefore,
                'issued_after': issuedAfter,
                'issued_before': issuedBefore,
                'min_value': minValue,
                'max_value': maxValue,
                'q': q,
                'contractor_name': contractorName,
                'page': page,
                'per_page': perPage,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Export Permits
     * Export permits matching filters as CSV. Tier-gated row limits.
     * @returns any Successful Response
     * @throws ApiError
     */
    public exportPermits({
        zipCode,
        city,
        state,
        category,
        status,
        propertyType,
        tag,
        recordKind = 'permit',
        filedAfter,
        filedBefore,
        issuedAfter,
        issuedBefore,
        minValue,
        maxValue,
        q,
        contractorName,
        limit = 1000,
    }: {
        zipCode?: (string | null),
        city?: (string | null),
        state?: (string | null),
        category?: (string | null),
        status?: (PermitStatus | null),
        propertyType?: (PropertyType | null),
        tag?: (string | null),
        recordKind?: string,
        filedAfter?: (string | null),
        filedBefore?: (string | null),
        issuedAfter?: (string | null),
        issuedBefore?: (string | null),
        minValue?: (number | null),
        maxValue?: (number | null),
        q?: (string | null),
        contractorName?: (string | null),
        limit?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/export',
            query: {
                'zip_code': zipCode,
                'city': city,
                'state': state,
                'category': category,
                'status': status,
                'property_type': propertyType,
                'tag': tag,
                'record_kind': recordKind,
                'filed_after': filedAfter,
                'filed_before': filedBefore,
                'issued_after': issuedAfter,
                'issued_before': issuedBefore,
                'min_value': minValue,
                'max_value': maxValue,
                'q': q,
                'contractor_name': contractorName,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Permit
     * Get full details for a single permit.
     * @returns PermitDetail Successful Response
     * @throws ApiError
     */
    public getPermit({
        permitId,
    }: {
        permitId: string,
    }): CancelablePromise<PermitDetail> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/{permit_id}',
            path: {
                'permit_id': permitId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Permits By Address
     * Get all permits for a specific address (partial match).
     * @returns PermitSearchResponse Successful Response
     * @throws ApiError
     */
    public getPermitsByAddress({
        address,
        page = 1,
        perPage = 25,
    }: {
        address: string,
        page?: number,
        perPage?: number,
    }): CancelablePromise<PermitSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/address/{address}',
            path: {
                'address': address,
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
    /**
     * Get Coverage Stats
     * Get coverage statistics — total permits, jurisdictions, and breakdown by city.
     * @returns any Successful Response
     * @throws ApiError
     */
    public getCoverageStats(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/stats/coverage',
        });
    }
}
