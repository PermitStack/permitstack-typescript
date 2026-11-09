/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ViolationDetail } from '../models/ViolationDetail';
import type { ViolationSearchResponse } from '../models/ViolationSearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CodeViolationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Violations
     * Search code-enforcement violations (and, with record_kind=complaint, complaints) as cities
     * and counties publish them: type, category, status, dates and, where published, fines. Every
     * response lists the sources it drew from with their measured `data_through`, their coverage
     * window (full history, a rolling window, or open cases only) and whether they publish fines.
     * Add-on dataset: included in Business and Scale, available as an add-on on Developer.
     * @returns ViolationSearchResponse Successful Response
     * @throws ApiError
     */
    public searchViolations({
        address,
        parcel,
        city,
        state,
        zipCode,
        jurisdictionId,
        lat,
        lng,
        radiusMiles,
        dateAfter,
        dateBefore,
        status,
        openOnly = false,
        category,
        recordKind = 'violation',
        caseNumber,
        includeUncounted = false,
        page = 1,
        perPage = 25,
    }: {
        /**
         * Street address, partial, case-insensitive
         */
        address?: (string | null),
        /**
         * Parcel / APN / folio / BBL (formatting ignored)
         */
        parcel?: (string | null),
        /**
         * City name (matches the address city or the issuing jurisdiction)
         */
        city?: (string | null),
        /**
         * 2-letter state code
         */
        state?: (string | null),
        /**
         * 5-digit ZIP
         */
        zipCode?: (string | null),
        /**
         * A jurisdiction id from /v1/jurisdictions
         */
        jurisdictionId?: (string | null),
        lat?: (number | null),
        lng?: (number | null),
        /**
         * Radius in miles around lat/lng (default 1)
         */
        radiusMiles?: (number | null),
        /**
         * record_date on or after (undated records never match)
         */
        dateAfter?: (string | null),
        /**
         * record_date on or before
         */
        dateBefore?: (string | null),
        /**
         * OPEN, CLOSED, COMPLIED, ABATED, CITED, DISMISSED or UNKNOWN
         */
        status?: ('OPEN' | 'CLOSED' | 'COMPLIED' | 'ABATED' | 'CITED' | 'DISMISSED' | 'UNKNOWN' | null),
        /**
         * Only OPEN records (a citation or judgment is not open)
         */
        openOnly?: boolean,
        /**
         * Normalised category, e.g. HOUSING, UNSAFE, WORK_WITHOUT_PERMIT
         */
        category?: ('STRUCTURAL' | 'HOUSING' | 'ZONING' | 'PROPERTY_MAINTENANCE' | 'NUISANCE' | 'UNSAFE' | 'VACANT' | 'FIRE' | 'SIGN' | 'WORK_WITHOUT_PERMIT' | 'ENVIRONMENTAL' | 'OTHER' | null),
        /**
         * 'violation' (default): violations, citations and orders the agency found. 'complaint': reports it received, and cases with no evidence a violation was found. 'all': both. Complaints are never counted as violations.
         */
        recordKind?: 'violation' | 'complaint' | 'all',
        /**
         * The agency's case / complaint number
         */
        caseNumber?: (string | null),
        /**
         * Also return records stored but never counted: voided, withdrawn, rescinded or issued in error, and process steps
         */
        includeUncounted?: boolean,
        page?: number,
        perPage?: number,
    }): CancelablePromise<ViolationSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/violations/search',
            query: {
                'address': address,
                'parcel': parcel,
                'city': city,
                'state': state,
                'zip_code': zipCode,
                'jurisdiction_id': jurisdictionId,
                'lat': lat,
                'lng': lng,
                'radius_miles': radiusMiles,
                'date_after': dateAfter,
                'date_before': dateBefore,
                'status': status,
                'open_only': openOnly,
                'category': category,
                'record_kind': recordKind,
                'case_number': caseNumber,
                'include_uncounted': includeUncounted,
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
     * Violation Coverage
     * Which places we hold code violations for, how current and how complete. UNGATED after
     * launch (any key), so a buyer can check before adding the dataset; before launch it answers the
     * internal tiers only, like every route here. One row per (source, place). `records` counts
     * violations (what a default search returns); `complaint_records` counts complaints, which are
     * a separate kind; `open_records` violations whose status is OPEN. Counts are in the source's
     * `count_unit` (rows, or distinct case numbers).
     * @returns any Successful Response
     * @throws ApiError
     */
    public violationCoverage({
        state,
    }: {
        /**
         * 2-letter state code
         */
        state?: (string | null),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/violations/coverage',
            query: {
                'state': state,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Violation
     * One violation or complaint, with the PII-stripped source fields. A non-canonical id (a twin
     * source's copy of the same record) answers with the canonical one, so a stored id never
     * dead-ends.
     * @returns ViolationDetail Successful Response
     * @throws ApiError
     */
    public getViolation({
        violationId,
    }: {
        violationId: string,
    }): CancelablePromise<ViolationDetail> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/violations/{violation_id}',
            path: {
                'violation_id': violationId,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
