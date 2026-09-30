/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermitDetail } from '../models/PermitDetail';
import type { PermitEventsResponse } from '../models/PermitEventsResponse';
import type { PermitSearchResponse } from '../models/PermitSearchResponse';
import type { PermitStatus } from '../models/PermitStatus';
import type { PropertyType } from '../models/PropertyType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PermitsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Permits
     * Search building permits by location, date, category, contractor and more.
     *
     * Filters combine with AND. Supply at least one narrowing filter -- a city, ZIP,
     * jurisdiction, date range or lat/lng radius -- for a query that returns quickly.
     *
     * Results are paginated and ordered newest-first on the permit's best available date
     * (`date_issued`, falling back to `date_filed`). `total` is exact up to 10,000; beyond
     * that it stops counting and returns `total: 10000` with `total_capped: true`, meaning
     * "10,000 or more". If the count cannot finish in time the response carries
     * `total: null` with `total_unknown: true` -- an unknown total is reported as unknown
     * and never as a number. Rows are unaffected either way; page through them normally.
     *
     * `category=hvac` matches HVAC and MECHANICAL together, because AC and furnace work is
     * filed under either depending on the city. Unknown parameter names are rejected with a
     * 400 rather than ignored, so a typo can never silently return unfiltered results.
     *
     * Free-tier keys are limited to a recent window; paid tiers have full history.
     * @returns PermitSearchResponse Successful Response
     * @throws ApiError
     */
    public searchPermits({
        zipCode,
        city,
        state,
        jurisdiction,
        address,
        lat,
        lng,
        radiusMiles = 5,
        fields = 'summary',
        bbox,
        polygon,
        category,
        status,
        propertyType,
        tag,
        recordKind = 'permit',
        filedAfter,
        filedBefore,
        issuedAfter,
        issuedBefore,
        dateAfter,
        dateBefore,
        parcel,
        minValue,
        maxValue,
        minSolarKw,
        maxSolarKw,
        minSqft,
        hasEnrichment,
        scope,
        q,
        contractorName,
        ownerFiled,
        hasOwnerAddress,
        page = 1,
        perPage = 25,
        keyword,
        dateFrom,
        dateTo,
        startDate,
        endDate,
        limit,
        countOnly = false,
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
         * Street address, partial + case-insensitive (e.g. '1600 Pennsylvania') — indexed, fast
         */
        address?: (string | null),
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
         * 'summary' (default) or 'full'. With 'full' each result is a PermitDetail rather than a PermitSummary -- the same nine extra columns GET /v1/permits/{id} returns (record_kind, date_expired, fee_amount, stories, units, square_footage, applicant_name, contractor_license, created_at) -- so you do not fetch them one permit at a time. See the PermitDetail schema for their types; the declared response schema here is PermitSummary, which is the default shape. Developer plan and above.
         */
        fields?: string,
        /**
         * Map-viewport bounding box 'minLng,minLat,maxLng,maxLat'. Returns permits whose location falls inside the box (geocoded permits only).
         */
        bbox?: (string | null),
        /**
         * A drawn area as a GeoJSON Polygon geometry (URL-encoded), e.g. {"type":"Polygon","coordinates":[[[lng,lat],...]]}. Returns permits inside the polygon (geocoded permits only).
         */
        polygon?: (string | null),
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
         * On or after this date, matched against whichever date a record has (issued, else filed). Use this when a source populates only one of issued/filed — e.g. issued-only feeds vs filed-only feeds.
         */
        dateAfter?: (string | null),
        /**
         * On or before this date, matched against whichever date a record has (issued, else filed).
         */
        dateBefore?: (string | null),
        /**
         * Parcel number / APN / folio (formatting ignored). Returns permits on that parcel where the source publishes one.
         */
        parcel?: (string | null),
        /**
         * Minimum estimated value
         */
        minValue?: (number | null),
        /**
         * Maximum estimated value
         */
        maxValue?: (number | null),
        /**
         * Minimum extracted solar system size (kW DC)
         */
        minSolarKw?: (number | null),
        /**
         * Maximum extracted solar system size (kW DC)
         */
        maxSolarKw?: (number | null),
        /**
         * Minimum square footage mentioned (from enrichment)
         */
        minSqft?: (number | null),
        /**
         * Only permits that have (true) or lack (false) LLM enrichment
         */
        hasEnrichment?: (boolean | null),
        /**
         * Substring match on the enriched work scope
         */
        scope?: (string | null),
        /**
         * Case-insensitive substring match across description, address, and permit number. Terms under 3 characters are matched but not counted: `total` is null with total_unknown=true (a 1-2 character term has no trigram index and the count would cost tens of seconds).
         */
        q?: (string | null),
        /**
         * Contractor name (partial match)
         */
        contractorName?: (string | null),
        /**
         * true = owner-filed permits only (no contractor on record but an owner name is present — often a DIY/homeowner lead, though for feeds that don't capture contractors the owner may be a builder or institution); false = permits that have a contractor
         */
        ownerFiled?: (boolean | null),
        /**
         * true = only permits that carry a property-owner mailing address; false = only those that do not. Coverage varies sharply by jurisdiction (we hold the county assessor roll for some and not others), so this is a targeting filter rather than a defect: it returns exactly the rows that are actionable. The address itself is visible on Business and above.
         */
        hasOwnerAddress?: (boolean | null),
        page?: number,
        /**
         * Results per page. Above your plan's maximum this is clamped, not rejected; the response echoes the per_page actually applied.
         */
        perPage?: number,
        /**
         * Alias of `q`.
         * @deprecated
         */
        keyword?: (string | null),
        /**
         * Alias of `date_after`.
         * @deprecated
         */
        dateFrom?: (string | null),
        /**
         * Alias of `date_before`.
         * @deprecated
         */
        dateTo?: (string | null),
        /**
         * Alias of `date_after`.
         * @deprecated
         */
        startDate?: (string | null),
        /**
         * Alias of `date_before`.
         * @deprecated
         */
        endDate?: (string | null),
        /**
         * Alias of `per_page`. Clamped to your plan's maximum, not rejected.
         * @deprecated
         */
        limit?: (number | null),
        /**
         * Return only the total for these filters -- no permit records. Skips the row fetch entirely, so it is markedly cheaper for both of us when you are sizing a query rather than reading it. `results` comes back empty and `total_capped` / `total_unknown` mean exactly what they always do.
         */
        countOnly?: boolean,
    }): CancelablePromise<PermitSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/search',
            query: {
                'zip_code': zipCode,
                'city': city,
                'state': state,
                'jurisdiction': jurisdiction,
                'address': address,
                'lat': lat,
                'lng': lng,
                'radius_miles': radiusMiles,
                'fields': fields,
                'bbox': bbox,
                'polygon': polygon,
                'category': category,
                'status': status,
                'property_type': propertyType,
                'tag': tag,
                'record_kind': recordKind,
                'filed_after': filedAfter,
                'filed_before': filedBefore,
                'issued_after': issuedAfter,
                'issued_before': issuedBefore,
                'date_after': dateAfter,
                'date_before': dateBefore,
                'parcel': parcel,
                'min_value': minValue,
                'max_value': maxValue,
                'min_solar_kw': minSolarKw,
                'max_solar_kw': maxSolarKw,
                'min_sqft': minSqft,
                'has_enrichment': hasEnrichment,
                'scope': scope,
                'q': q,
                'contractor_name': contractorName,
                'owner_filed': ownerFiled,
                'has_owner_address': hasOwnerAddress,
                'page': page,
                'per_page': perPage,
                'keyword': keyword,
                'date_from': dateFrom,
                'date_to': dateTo,
                'start_date': startDate,
                'end_date': endDate,
                'limit': limit,
                'count_only': countOnly,
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
     * Export Permits
     * Export permits matching filters as CSV. Tier-gated row limits.
     * @returns string Successful Response
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
        dateAfter,
        dateBefore,
        parcel,
        minValue,
        maxValue,
        minSolarKw,
        maxSolarKw,
        minSqft,
        hasEnrichment,
        scope,
        q,
        contractorName,
        ownerFiled,
        jurisdiction,
        limit = 1000,
        keyword,
        dateFrom,
        dateTo,
        startDate,
        endDate,
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
        /**
         * On or after this date, matched against whichever date a record has (issued, else filed).
         */
        dateAfter?: (string | null),
        /**
         * On or before this date, matched against whichever date a record has (issued, else filed).
         */
        dateBefore?: (string | null),
        /**
         * Parcel number / APN / folio (formatting ignored).
         */
        parcel?: (string | null),
        minValue?: (number | null),
        maxValue?: (number | null),
        minSolarKw?: (number | null),
        maxSolarKw?: (number | null),
        minSqft?: (number | null),
        hasEnrichment?: (boolean | null),
        scope?: (string | null),
        q?: (string | null),
        contractorName?: (string | null),
        /**
         * true = owner-filed permits only (no contractor on record, owner name present — often DIY/homeowner leads, though for feeds without contractor capture the owner may be a builder/institution); false = permits that have a contractor
         */
        ownerFiled?: (boolean | null),
        /**
         * A jurisdiction's id (from /v1/jurisdictions) or its name, partial and case-insensitive -- the same matching as /v1/permits/search. Lets a full load be partitioned along the coverage list.
         */
        jurisdiction?: (string | null),
        /**
         * Rows to return, up to your plan's export maximum (a larger value is refused with 403, never silently lowered). If more rows match than `limit`, the response header X-Permitstack-Truncated is `true`: narrow the filter or split the date range and export again.
         */
        limit?: number,
        /**
         * Alias of `q`.
         * @deprecated
         */
        keyword?: (string | null),
        /**
         * Alias of `date_after`.
         * @deprecated
         */
        dateFrom?: (string | null),
        /**
         * Alias of `date_before`.
         * @deprecated
         */
        dateTo?: (string | null),
        /**
         * Alias of `date_after`.
         * @deprecated
         */
        startDate?: (string | null),
        /**
         * Alias of `date_before`.
         * @deprecated
         */
        endDate?: (string | null),
    }): CancelablePromise<string> {
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
                'date_after': dateAfter,
                'date_before': dateBefore,
                'parcel': parcel,
                'min_value': minValue,
                'max_value': maxValue,
                'min_solar_kw': minSolarKw,
                'max_solar_kw': maxSolarKw,
                'min_sqft': minSqft,
                'has_enrichment': hasEnrichment,
                'scope': scope,
                'q': q,
                'contractor_name': contractorName,
                'owner_filed': ownerFiled,
                'jurisdiction': jurisdiction,
                'limit': limit,
                'keyword': keyword,
                'date_from': dateFrom,
                'date_to': dateTo,
                'start_date': startDate,
                'end_date': endDate,
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
     * Sync Permits
     * Incremental data feed (change-data-capture). Page the dataset ordered by
     * (updated_at, id). Omit `cursor` for the initial full load; persist `next_cursor` and pass
     * it back after each nightly ingest to receive only new + changed permits. Upsert-only
     * (deletes are not emitted).
     * @returns any A page of permits in (updated_at, id) order. Keep `next_cursor` and pass it back as `cursor` to resume; `has_more` is false once you are caught up. Each record in `results` has the /v1/permits/search fields (fields=summary) plus the extras listed under `fields=full`. Page size is `limit`, up to 50,000.
     * @throws ApiError
     */
    public syncPermits({
        cursor,
        since,
        limit = 5000,
        recordKind = 'permit',
        state,
        category,
        fields = 'summary',
    }: {
        /**
         * Opaque cursor from the previous response's `next_cursor`. Omit to start the initial full sync from the beginning.
         */
        cursor?: (string | null),
        /**
         * Alternative start point: an ISO-8601 UTC timestamp; returns permits with updated_at >= since. Ignored when `cursor` is supplied.
         */
        since?: (string | null),
        /**
         * Max permits per page (cursor page size, up to 50,000).
         */
        limit?: number,
        /**
         * 'permit' (default), a specific record_kind, or 'all'.
         */
        recordKind?: string,
        /**
         * Optional 2-letter state filter to scope the feed.
         */
        state?: (string | null),
        /**
         * Optional category filter (e.g. solar, roofing).
         */
        category?: (string | null),
        /**
         * 'summary' (default) or 'full'. 'full' adds record_kind, date_expired, fee_amount, stories, units, square_footage, applicant_name, contractor_license and created_at to every record, so a mirror does not have to fetch them one permit at a time. OPT-IN: the default payload is unchanged apart from `contractor_id`, added on 2026-09-10 to every permit surface; widening a feed under a consumer with a strict schema is otherwise avoided.
         */
        fields?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/sync',
            query: {
                'cursor': cursor,
                'since': since,
                'limit': limit,
                'record_kind': recordKind,
                'state': state,
                'category': category,
                'fields': fields,
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
     * List Permit Events
     * What CHANGED, instead of re-reading everything: permit transitions
     * (new_permit, status_change, issued, completed, expired) built from the daily
     * ingest diff, filterable by city, state, category and jurisdiction.
     *
     * **This is the endpoint to poll on a schedule, and `cursor` is how to poll it.**
     * Save the `next_cursor` from each response and pass it back as `cursor` on the
     * next call; you then receive only what you have not already seen, in the order it
     * was detected, with no duplicates and no gap. Page until a response comes back
     * shorter than `per_page`, save that last `next_cursor`, and resume there tomorrow.
     *
     * **WHERE YOU START MATTERS, AND THE FIRST CALL DOES NOT START AT THE BEGINNING.**
     * A call with NO cursor returns the NEWEST events and its `next_cursor` is the
     * frontier -- a watermark at "now". Pass it straight back and you correctly get 0
     * results, because you have just declared yourself caught up. That is exactly what
     * a poller wants: from here on you receive everything new. It is NOT a backfill,
     * and it will not walk history for you -- there are 75,544 events behind that
     * watermark for the Tampa filter below alone.
     *
     * To start somewhere else, build the cursor yourself: it is
     * `<ISO-8601 timestamp>|<event id>`, and `|0` is a valid id floor.
     *
     * # start polling from now (typical):
     * GET /v1/permits/events?city=Tampa&state=FL&category=roofing
     * &event_type=new_permit                       -> save next_cursor
     * # ...then, from the next call onward:
     * GET ...&cursor=2026-09-08T04%3A09%3A16.381111%2B00%3A00%7C51823904
     *
     * # start from a chosen point instead (backfill the last 30 days, then keep polling):
     * GET ...&cursor=2026-08-11T00%3A00%3A00%2B00%3A00%7C0
     *
     * One call answers what a paged re-pull of /v1/permits/search costs hundreds of.
     * Measured 2026-09-09, that Tampa query returns **38 records in a single call**;
     * the same question asked by re-pulling search pages 1-100 twelve times a day
     * costs ~9,600 requests and runs into the daily cap.
     *
     * `detected_after` still works and is fine for an ad-hoc look at a window, but it
     * is the wrong tool for a poller: it is INCLUSIVE, and one ingest batch stamps
     * thousands of events with a single identical `detected_at` (measured 2026-09-10:
     * 3,688 timestamps carry over 1,000 events each, the largest 1,370,561). A poller
     * that stores the newest `detected_at` and passes it back therefore re-receives
     * that whole batch every time. `cursor` breaks the tie on the event id and does not.
     *
     * Supplying a `cursor` returns events oldest-unseen first, which is what lets a
     * batch be paged safely; without one you get the newest first, for browsing.
     * `cursor` and `page` are alternatives -- passing both is a 400 rather than a
     * silently skipped page.
     *
     * Ingest runs once a day, so a daily poll is enough; `detected_at` is when WE saw
     * the change, not when the city recorded it. For push instead of poll, register a
     * webhook (developer tier and above) and skip the polling entirely.
     * @returns PermitEventsResponse Successful Response
     * @throws ApiError
     */
    public listPermitEvents({
        eventType,
        category,
        city,
        state,
        jurisdiction,
        permitId,
        detectedAfter,
        cursor,
        page = 1,
        perPage = 50,
        limit,
    }: {
        /**
         * Filter by event type: new_permit, status_change, issued, completed, expired (the permit's expiration date has passed without it being finished; emitted when that date arrives)
         */
        eventType?: (string | null),
        /**
         * Permit category (e.g. solar, battery)
         */
        category?: (string | null),
        /**
         * City name
         */
        city?: (string | null),
        /**
         * 2-letter state code
         */
        state?: (string | null),
        /**
         * Jurisdiction name (partial)
         */
        jurisdiction?: (string | null),
        /**
         * Events for a single permit id
         */
        permitId?: (string | null),
        /**
         * Only events detected on/after this UTC timestamp (ISO 8601). Inclusive, so a batch sharing one timestamp is re-delivered; prefer `cursor` for polling.
         */
        detectedAfter?: (string | null),
        /**
         * Opaque cursor from the previous response's `next_cursor`. Resumes exactly where you stopped, with no duplicates and no gap. Omit on the first call.
         */
        cursor?: (string | null),
        page?: number,
        perPage?: number,
        /**
         * Alias of `per_page`. Clamped to 100, not rejected.
         * @deprecated
         */
        limit?: (number | null),
    }): CancelablePromise<PermitEventsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/events',
            query: {
                'event_type': eventType,
                'category': category,
                'city': city,
                'state': state,
                'jurisdiction': jurisdiction,
                'permit_id': permitId,
                'detected_after': detectedAfter,
                'cursor': cursor,
                'page': page,
                'per_page': perPage,
                'limit': limit,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
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
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
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
        recordKind = 'permit',
    }: {
        address: string,
        page?: number,
        perPage?: number,
        /**
         * 'permit' (default), a specific record_kind, or 'all'.
         */
        recordKind?: string,
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
                'record_kind': recordKind,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Coverage Stats
     * Coverage statistics: total permits, every jurisdiction we hold, and the counties they fall in.
     *
     * Each jurisdiction carries `data_through` (the newest permit we actually hold, measured),
     * plus `county` / `county_fips` (the county most of its permits fall in) and `counties`
     * (the full measured mix with a `share` of the sample per county, since some cities straddle
     * a county line). `counties` at the top level is the same data keyed by county, listing the
     * jurisdictions whose permits fall in each one. A null county means not measured, which is
     * the case for statewide feeds that publish no coordinates.
     * @returns any Successful Response
     * @throws ApiError
     */
    public getCoverageStats(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/stats/coverage',
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * List Plays
     * List available trade plays and their parameters.
     * @returns any Successful Response
     * @throws ApiError
     */
    public listPlays(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/plays',
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * System Age
     * Addresses whose LATEST permit in the trade is min–max years old with nothing
     * since — the system is statistically due for replacement. Only trades with a real
     * lifecycle are supported (roofing, hvac, mechanical, solar=repower, pool).
     * @returns PermitSearchResponse Successful Response
     * @throws ApiError
     */
    public systemAge({
        trade,
        state,
        city,
        zipCode,
        jurisdiction,
        minAgeYears,
        maxAgeYears,
        page = 1,
        perPage = 25,
    }: {
        /**
         * roofing | hvac | mechanical | solar | pool
         */
        trade: string,
        /**
         * 2-letter state code
         */
        state?: (string | null),
        /**
         * City name
         */
        city?: (string | null),
        /**
         * 5-digit ZIP
         */
        zipCode?: (string | null),
        /**
         * Jurisdiction name (partial)
         */
        jurisdiction?: (string | null),
        /**
         * Override the trade's default minimum age
         */
        minAgeYears?: (number | null),
        /**
         * Override the trade's default maximum age
         */
        maxAgeYears?: (number | null),
        page?: number,
        perPage?: number,
    }): CancelablePromise<PermitSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/plays/system-age',
            query: {
                'trade': trade,
                'state': state,
                'city': city,
                'zip_code': zipCode,
                'jurisdiction': jurisdiction,
                'min_age_years': minAgeYears,
                'max_age_years': maxAgeYears,
                'page': page,
                'per_page': perPage,
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
     * Battery Retrofit Candidates
     * Solar permits aged between min/max years whose address has NO battery permit
     * on file — the storage-retrofit lead list. Requires a location filter.
     * @returns PermitSearchResponse Successful Response
     * @throws ApiError
     */
    public batteryRetrofitCandidates({
        state,
        city,
        zipCode,
        jurisdiction,
        minAgeYears = 2,
        maxAgeYears = 7,
        page = 1,
        perPage = 25,
    }: {
        /**
         * 2-letter state code
         */
        state?: (string | null),
        /**
         * City name
         */
        city?: (string | null),
        /**
         * 5-digit ZIP
         */
        zipCode?: (string | null),
        /**
         * Jurisdiction name (partial)
         */
        jurisdiction?: (string | null),
        /**
         * Minimum age of the PV permit, in years
         */
        minAgeYears?: number,
        /**
         * Maximum age of the PV permit, in years
         */
        maxAgeYears?: number,
        page?: number,
        perPage?: number,
    }): CancelablePromise<PermitSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/plays/battery-retrofit-candidates',
            query: {
                'state': state,
                'city': city,
                'zip_code': zipCode,
                'jurisdiction': jurisdiction,
                'min_age_years': minAgeYears,
                'max_age_years': maxAgeYears,
                'page': page,
                'per_page': perPage,
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
     * Reroof Due
     * Roofing permits aged min-max years whose address has NO newer roofing permit —
     * homes whose roof is statistically due for replacement. Alias of
     * /v1/plays/system-age?trade=roofing (kept as the discoverable roofing-first name).
     * @returns PermitSearchResponse Successful Response
     * @throws ApiError
     */
    public reroofDue({
        state,
        city,
        zipCode,
        jurisdiction,
        minAgeYears = 12,
        maxAgeYears = 25,
        page = 1,
        perPage = 25,
    }: {
        /**
         * 2-letter state code
         */
        state?: (string | null),
        /**
         * City name
         */
        city?: (string | null),
        /**
         * 5-digit ZIP
         */
        zipCode?: (string | null),
        /**
         * Jurisdiction name (partial)
         */
        jurisdiction?: (string | null),
        /**
         * Minimum age of the roofing permit, in years
         */
        minAgeYears?: number,
        /**
         * Maximum age of the roofing permit, in years
         */
        maxAgeYears?: number,
        page?: number,
        perPage?: number,
    }): CancelablePromise<PermitSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/plays/reroof-due',
            query: {
                'state': state,
                'city': city,
                'zip_code': zipCode,
                'jurisdiction': jurisdiction,
                'min_age_years': minAgeYears,
                'max_age_years': maxAgeYears,
                'page': page,
                'per_page': perPage,
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
     * Orphan Recovery
     * PV permits whose installer (contractor, applicant, or owner) matches `installer`
     * in a territory — a named competitor's customer base. Requires a location filter.
     * @returns PermitSearchResponse Successful Response
     * @throws ApiError
     */
    public orphanRecovery({
        installer,
        state,
        city,
        zipCode,
        jurisdiction,
        page = 1,
        perPage = 25,
    }: {
        /**
         * Installer name to match (contractor/applicant/owner)
         */
        installer: string,
        /**
         * 2-letter state code
         */
        state?: (string | null),
        /**
         * City name
         */
        city?: (string | null),
        /**
         * 5-digit ZIP
         */
        zipCode?: (string | null),
        /**
         * Jurisdiction name (partial)
         */
        jurisdiction?: (string | null),
        page?: number,
        perPage?: number,
    }): CancelablePromise<PermitSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/plays/orphan-recovery',
            query: {
                'installer': installer,
                'state': state,
                'city': city,
                'zip_code': zipCode,
                'jurisdiction': jurisdiction,
                'page': page,
                'per_page': perPage,
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
     * List Covered Jurisdictions
     * Every jurisdiction we cover, with how current and how complete each one is.
     *
     * `data_through` is the newest permit we actually hold, measured -- not when we last
     * polled the source. `freshness_label` and `completeness_label` are the same sentences the
     * export picker and the delivered manifest use, so this can never disagree with them.
     * @returns any Successful Response
     * @throws ApiError
     */
    public listCoveredJurisdictions(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/jurisdictions',
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
