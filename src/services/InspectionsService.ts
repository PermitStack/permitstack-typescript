/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InspectionSearchResponse } from '../models/InspectionSearchResponse';
import type { PermitInspectionsResponse } from '../models/PermitInspectionsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InspectionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Inspections
     * Search building inspections: type, result and dates as the city publishes them, linked to
     * the permit we hold where the permit number matches. Newest first (inspection_date, then id);
     * inspections scheduled for a future date are left out unless upcoming=include|only (or
     * result=SCHEDULED). Inspector names are not returned. Every response lists the sources it drew
     * from with their measured `data_through`. Add-on dataset.
     * @returns InspectionSearchResponse Successful Response
     * @throws ApiError
     */
    public searchInspections({
        permitId,
        permitNumber,
        jurisdictionId,
        city,
        state,
        zipCode,
        address,
        parcel,
        dateAfter,
        dateBefore,
        result,
        inspectionType,
        trade,
        finalOnly = false,
        summaries = 'exclude',
        scope = 'permit',
        upcoming,
        page = 1,
        perPage = 25,
    }: {
        /**
         * A permit id from /v1/permits
         */
        permitId?: (string | null),
        /**
         * The permit number, as the city publishes it or as /v1/permits returns it
         */
        permitNumber?: (string | null),
        /**
         * A jurisdiction id from /v1/jurisdictions (narrows permit_number)
         */
        jurisdictionId?: (string | null),
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
         * Street address, partial, case-insensitive
         */
        address?: (string | null),
        /**
         * Parcel / APN / folio (formatting ignored)
         */
        parcel?: (string | null),
        /**
         * inspection_date on or after (undated inspections never match)
         */
        dateAfter?: (string | null),
        /**
         * inspection_date on or before
         */
        dateBefore?: (string | null),
        /**
         * PASS, FAIL, PARTIAL, CANCELLED, SCHEDULED or OTHER
         */
        result?: ('PASS' | 'FAIL' | 'PARTIAL' | 'CANCELLED' | 'SCHEDULED' | 'OTHER' | null),
        /**
         * Normalised inspection type, e.g. FRAMING, ROUGH, FINAL
         */
        inspectionType?: ('PRE_CONSTRUCTION' | 'FOOTING' | 'FOUNDATION' | 'SLAB' | 'UNDERGROUND' | 'ROUGH' | 'FRAMING' | 'SHEATHING' | 'INSULATION' | 'DRYWALL' | 'ROOFING' | 'GAS' | 'SERVICE' | 'FINAL' | 'CO' | 'OTHER' | null),
        trade?: ('BUILDING' | 'ELECTRICAL' | 'PLUMBING' | 'MECHANICAL' | 'FIRE' | 'OTHER' | null),
        /**
         * Only final / certificate-of-occupancy inspections
         */
        finalOnly?: boolean,
        /**
         * 'Last inspection' summaries copied from permit records (not inspection logs). Default exclude.
         */
        summaries?: 'exclude' | 'include' | 'only',
        /**
         * permit (default): inspections of permitted work. existing / occupancy: occupancy inspections of existing buildings that no permit asked for; all.
         */
        scope?: 'permit' | 'existing' | 'occupancy' | 'all',
        /**
         * Future-dated (still scheduled) inspections: exclude (the default, except with result=SCHEDULED), include, or only (soonest first).
         */
        upcoming?: ('exclude' | 'include' | 'only' | null),
        page?: number,
        perPage?: number,
    }): CancelablePromise<InspectionSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/inspections/search',
            query: {
                'permit_id': permitId,
                'permit_number': permitNumber,
                'jurisdiction_id': jurisdictionId,
                'city': city,
                'state': state,
                'zip_code': zipCode,
                'address': address,
                'parcel': parcel,
                'date_after': dateAfter,
                'date_before': dateBefore,
                'result': result,
                'inspection_type': inspectionType,
                'trade': trade,
                'final_only': finalOnly,
                'summaries': summaries,
                'scope': scope,
                'upcoming': upcoming,
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
     * Inspection Coverage
     * Which places we hold inspections for, how current and how complete. UNGATED after launch
     * (any key), so a buyer can check before adding the dataset; before launch it answers the
     * internal tiers only, like every route here. One row per (source, place). `records` counts
     * inspection-log rows (summaries excluded); `result_records` those with a PASS / FAIL / PARTIAL
     * outcome; `linked_records` those linked to a permit we hold. `scope` = permit (inspections of
     * permitted work) or existing_structure (inspections of existing buildings: search them with
     * scope=existing).
     * @returns any Successful Response
     * @throws ApiError
     */
    public inspectionCoverage({
        state,
    }: {
        /**
         * 2-letter state code
         */
        state?: (string | null),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/inspections/coverage',
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
     * Get Permit Inspections
     * One permit's inspections, newest first (future-dated scheduled ones only with
     * upcoming=include|only or result=SCHEDULED). 404 when the permit does not exist (the same
     * answer /v1/permits/{id} gives); an existing permit with no inspection held answers an empty
     * list, and `sources` is empty -- we hold no inspection feed that names it.
     * @returns PermitInspectionsResponse Successful Response
     * @throws ApiError
     */
    public getPermitInspections({
        permitId,
        result,
        summaries = 'exclude',
        upcoming,
        page = 1,
        perPage = 100,
    }: {
        permitId: string,
        result?: ('PASS' | 'FAIL' | 'PARTIAL' | 'CANCELLED' | 'SCHEDULED' | 'OTHER' | null),
        summaries?: 'exclude' | 'include' | 'only',
        /**
         * Future-dated (still scheduled) inspections: exclude (the default, except with result=SCHEDULED), include, or only (soonest first).
         */
        upcoming?: ('exclude' | 'include' | 'only' | null),
        page?: number,
        perPage?: number,
    }): CancelablePromise<PermitInspectionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/{permit_id}/inspections',
            path: {
                'permit_id': permitId,
            },
            query: {
                'result': result,
                'summaries': summaries,
                'upcoming': upcoming,
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
}
