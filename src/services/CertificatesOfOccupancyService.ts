/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertificateDetail } from '../models/CertificateDetail';
import type { CertificateSearchResponse } from '../models/CertificateSearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CertificatesOfOccupancyService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Certificates
     * Search certificates of occupancy (and, with kind=completion, certificates of completion).
     *
     * Each result carries `co_date_basis`, which says what its date means, and every response lists
     * the sources it drew from with their measured `data_through`, `dated_share` and (where the
     * source publishes a total) `completeness`. Add-on dataset: included in Business and Scale,
     * available as an add-on on Developer.
     * @returns CertificateSearchResponse Successful Response
     * @throws ApiError
     */
    public searchCertificates({
        city,
        state,
        zipCode,
        jurisdictionId,
        address,
        parcel,
        lat,
        lng,
        radiusMiles,
        kind = 'occupancy',
        coType,
        certificateStatus,
        renewals = 'exclude',
        issuedAfter,
        issuedBefore,
        minUnits,
        occupancyClass,
        permitNumber,
        coNumber,
        page = 1,
        perPage = 25,
    }: {
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
        /**
         * Street address, partial, case-insensitive
         */
        address?: (string | null),
        /**
         * Parcel / APN / folio / BBL (formatting ignored)
         */
        parcel?: (string | null),
        lat?: (number | null),
        lng?: (number | null),
        /**
         * Radius in miles around lat/lng (default 1)
         */
        radiusMiles?: (number | null),
        /**
         * 'occupancy' (default), 'completion' (certificates of completion: close-outs of work that creates no occupancy, e.g. roofs, pools), or 'all'
         */
        kind?: 'occupancy' | 'completion' | 'all',
        /**
         * 'change' = re-issued for an existing building's new owner, use or occupant load; 'revision' = a revised certificate. Neither certifies new units: their dwelling units are in units_existing, so min_units counts newly certified units.
         */
        coType?: ('final' | 'temporary' | 'partial' | 'unknown' | 'change' | 'revision' | null),
        /**
         * Default: issued + expired (both were issued). 'pending' = CO applications not yet issued.
         */
        certificateStatus?: ('issued' | 'expired' | 'pending' | 'void' | 'unknown' | 'all' | null),
        /**
         * Temporary-certificate RENEWALS (NYC re-issues a TCO every 90 days). Default 'exclude': finals and first-time TCOs only.
         */
        renewals?: 'exclude' | 'include' | 'only',
        /**
         * CO date on or after (undated certificates never match)
         */
        issuedAfter?: (string | null),
        /**
         * CO date on or before
         */
        issuedBefore?: (string | null),
        /**
         * Newly certified dwelling units on or above (units_existing is not counted)
         */
        minUnits?: (number | null),
        /**
         * Building-code occupancy group as published, e.g. R-3, B
         */
        occupancyClass?: (string | null),
        /**
         * The building permit the certificate was issued on
         */
        permitNumber?: (string | null),
        coNumber?: (string | null),
        page?: number,
        perPage?: number,
    }): CancelablePromise<CertificateSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/certificates/search',
            query: {
                'city': city,
                'state': state,
                'zip_code': zipCode,
                'jurisdiction_id': jurisdictionId,
                'address': address,
                'parcel': parcel,
                'lat': lat,
                'lng': lng,
                'radius_miles': radiusMiles,
                'kind': kind,
                'co_type': coType,
                'certificate_status': certificateStatus,
                'renewals': renewals,
                'issued_after': issuedAfter,
                'issued_before': issuedBefore,
                'min_units': minUnits,
                'occupancy_class': occupancyClass,
                'permit_number': permitNumber,
                'co_number': coNumber,
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
     * Certificate Coverage
     * Which places we hold certificates for, and how current each is. Any API key can call it,
     * so a buyer can check a city before adding the dataset, like /v1/jurisdictions.
     *
     * One row per (source, place); a statewide source (CA HCD) lists each city and county it
     * reports for, plus one `(no city published)` row per state for its lines that name no city
     * (reachable with `state=`, not `city=`). `records` counts canonical issued certificates of
     * occupancy, renewals excluded: exactly what a default search returns, and `data_through` /
     * `freshness` describe those same certificates. `completion_records`,
     * `completion_data_through` and `completion_freshness` describe certificates of completion
     * (kind=completion) on their own. `data_status` says whether the source still publishes
     * (active / historical_archive / frozen); for a permits-derived source,
     * `source_data_through` is the newest record of the permits feed the certificates come from,
     * which bounds an undated source's currency.
     * @returns any Successful Response
     * @throws ApiError
     */
    public certificateCoverage({
        state,
    }: {
        /**
         * 2-letter state code
         */
        state?: (string | null),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/certificates/coverage',
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
     * Get Certificate
     * One certificate. Unstructured source_record is withheld. A non-canonical id (a duplicate of
     * another source's row) answers with the canonical one, so a stored id never dead-ends.
     * @returns CertificateDetail Successful Response
     * @throws ApiError
     */
    public getCertificate({
        certificateId,
    }: {
        certificateId: string,
    }): CancelablePromise<CertificateDetail> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/certificates/{certificate_id}',
            path: {
                'certificate_id': certificateId,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
