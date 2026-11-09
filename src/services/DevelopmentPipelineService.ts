/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaseDetail } from '../models/CaseDetail';
import type { CaseSearchResponse } from '../models/CaseSearchResponse';
import type { DecisionSearchResponse } from '../models/DecisionSearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DevelopmentPipelineService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Cases
     * Search planning and zoning cases (rezonings, site plans, plats, variances, conditional /
     * special uses, annexations, PUDs, comprehensive-plan amendments, demolition and historic
     * reviews) as cities and counties publish them. Every response lists its sources with their
     * measured `data_through`. An undated case never matches a date window. Add-on dataset.
     * @returns CaseSearchResponse Successful Response
     * @throws ApiError
     */
    public searchCases({
        city,
        state,
        zipCode,
        jurisdictionId,
        address,
        parcel,
        lat,
        lng,
        radiusMiles,
        caseType,
        status,
        caseNumber,
        filedAfter,
        filedBefore,
        hearingAfter,
        hearingBefore,
        decidedAfter,
        decidedBefore,
        minUnits,
        minAcres,
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
         * Parcel / APN / folio (formatting ignored)
         */
        parcel?: (string | null),
        lat?: (number | null),
        lng?: (number | null),
        /**
         * Radius in miles around lat/lng (default 1)
         */
        radiusMiles?: (number | null),
        /**
         * REZONING, SITE_PLAN, SUBDIVISION_PLAT, VARIANCE, CONDITIONAL_USE, ...
         */
        caseType?: ('REZONING' | 'SITE_PLAN' | 'SUBDIVISION_PLAT' | 'VARIANCE' | 'CONDITIONAL_USE' | 'ANNEXATION' | 'PUD' | 'COMPREHENSIVE_PLAN' | 'DEMOLITION_REVIEW' | 'HISTORIC_REVIEW' | 'OTHER' | null),
        /**
         * Normalised case status
         */
        status?: ('FILED' | 'UNDER_REVIEW' | 'HEARING_SCHEDULED' | 'APPROVED' | 'APPROVED_WITH_CONDITIONS' | 'DENIED' | 'WITHDRAWN' | 'TABLED' | 'APPEALED' | 'CLOSED' | 'UNKNOWN' | null),
        /**
         * The case number as published (formatting ignored)
         */
        caseNumber?: (string | null),
        filedAfter?: (string | null),
        filedBefore?: (string | null),
        /**
         * Hearing on or after (may be in the future)
         */
        hearingAfter?: (string | null),
        hearingBefore?: (string | null),
        decidedAfter?: (string | null),
        decidedBefore?: (string | null),
        /**
         * Dwelling units proposed, at least (the source's structured unit count)
         */
        minUnits?: (number | null),
        minAcres?: (number | null),
        page?: number,
        perPage?: number,
    }): CancelablePromise<CaseSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/pipeline/cases/search',
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
                'case_type': caseType,
                'status': status,
                'case_number': caseNumber,
                'filed_after': filedAfter,
                'filed_before': filedBefore,
                'hearing_after': hearingAfter,
                'hearing_before': hearingBefore,
                'decided_after': decidedAfter,
                'decided_before': decidedBefore,
                'min_units': minUnits,
                'min_acres': minAcres,
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
     * Search Decisions
     * Search council / planning-commission / zoning-board agenda decisions: scope summary, action, pass /
     * fail and the roll-call tally, with the planning case they concern where we can link it. A
     * RECOMMENDED_* outcome is a recommending body's, not a final decision. Add-on dataset.
     * @returns DecisionSearchResponse Successful Response
     * @throws ApiError
     */
    public searchDecisions({
        city,
        state,
        jurisdictionId,
        address,
        body,
        outcome,
        landUse = 'only',
        landUseType,
        caseNumber,
        matterFile,
        linked,
        meetingAfter,
        meetingBefore,
        page = 1,
        perPage = 25,
    }: {
        /**
         * City name (matches the address city or the deciding jurisdiction)
         */
        city?: (string | null),
        /**
         * 2-letter state code
         */
        state?: (string | null),
        jurisdictionId?: (string | null),
        /**
         * Street address named in the item, partial
         */
        address?: (string | null),
        /**
         * Deciding body, partial ('Planning Commission', 'Zoning')
         */
        body?: (string | null),
        /**
         * Normalised action: APPROVED, DENIED, RECOMMENDED_APPROVAL, TABLED, ...
         */
        outcome?: ('APPROVED' | 'APPROVED_WITH_CONDITIONS' | 'DENIED' | 'RECOMMENDED_APPROVAL' | 'RECOMMENDED_DENIAL' | 'TABLED' | 'WITHDRAWN' | 'REFERRED' | 'FIRST_READING' | 'RECEIVED' | 'NO_ACTION' | 'OTHER' | 'UNKNOWN' | null),
        /**
         * 'only' (default): land-use items; 'all': every stored item
         */
        landUse?: 'only' | 'all',
        landUseType?: ('REZONING' | 'SITE_PLAN' | 'SUBDIVISION_PLAT' | 'VARIANCE' | 'CONDITIONAL_USE' | 'ANNEXATION' | 'PUD' | 'COMPREHENSIVE_PLAN' | 'DEMOLITION_REVIEW' | 'HISTORIC_REVIEW' | 'OTHER' | null),
        /**
         * A case number named in the item (formatting ignored)
         */
        caseNumber?: (string | null),
        /**
         * The clerk's file number
         */
        matterFile?: (string | null),
        /**
         * true: only items linked to a planning case we hold
         */
        linked?: (boolean | null),
        meetingAfter?: (string | null),
        meetingBefore?: (string | null),
        page?: number,
        perPage?: number,
    }): CancelablePromise<DecisionSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/pipeline/decisions/search',
            query: {
                'city': city,
                'state': state,
                'jurisdiction_id': jurisdictionId,
                'address': address,
                'body': body,
                'outcome': outcome,
                'land_use': landUse,
                'land_use_type': landUseType,
                'case_number': caseNumber,
                'matter_file': matterFile,
                'linked': linked,
                'meeting_after': meetingAfter,
                'meeting_before': meetingBefore,
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
     * Pipeline Coverage
     * Which places we hold planning cases and decisions for, how current and how complete.
     * UNGATED after launch (any key), so a buyer can check before adding the dataset; before launch
     * it answers the internal tiers only. One row per (source, place). Decision `records` count
     * land-use items only (what a default search returns).
     * @returns any Successful Response
     * @throws ApiError
     */
    public pipelineCoverage({
        state,
        dataset = 'all',
    }: {
        /**
         * 2-letter state code
         */
        state?: (string | null),
        dataset?: 'cases' | 'decisions' | 'all',
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/pipeline/coverage',
            query: {
                'state': state,
                'dataset': dataset,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Case
     * One planning case with the meeting decisions linked to it (newest first, up to 100) and
     * the building permits on the SAME SITE in the case's window (same parcel, or the exact street
     * address when the case has no usable parcel; filed from the case's filing date to five years
     * after its decision; up to 100, `permits_total` says how many exist). A linked permit is on the
     * same site at the right time -- not necessarily issued under this case. Links are computed:
     * `link_method` / `confidence` say how each was made. A case whose source says its location is
     * confidential carries no address, parcel or point and no permit links.
     * @returns CaseDetail Successful Response
     * @throws ApiError
     */
    public getCase({
        caseId,
    }: {
        caseId: string,
    }): CancelablePromise<CaseDetail> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/pipeline/cases/{case_id}',
            path: {
                'case_id': caseId,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
