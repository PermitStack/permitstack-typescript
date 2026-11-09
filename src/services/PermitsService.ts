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
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
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
        permitNumber,
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
         * Street address, partial + case-insensitive (e.g. '1600 Pennsylvania')  -  indexed, fast
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
         * 'summary' (default) or 'full'. With 'full' each result is a PermitDetail rather than a PermitSummary -- the same nine extra columns GET /v1/permits/{id} returns (record_kind, date_expired, fee_amount, stories, units, square_footage, applicant_name, contractor_license, created_at) -- so you do not fetch them one permit at a time. See the PermitDetail schema for their types; the declared response schema here is PermitSummary, which is the default shape. Developer plan and above, or record credits without owner data.
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
         * Permit category (e.g. solar, SOLAR, roofing, hvac  -  case insensitive)
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
         * Record kind: 'permit' (default, building permits only), 'contractor', 'tag', 'non_building', 'admin', 'program' (incentive-program records counted through another dataset, e.g. NYSERDA NY-Sun), or 'all'
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
         * On or after this date, matched against whichever date a record has (issued, else filed). Use this when a source populates only one of issued/filed  -  e.g. issued-only feeds vs filed-only feeds.
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
         * Exact permit number as the issuing jurisdiction assigned it, case-insensitive (surrounding spaces ignored). Narrower and much faster than q= for a known number. The same number can exist in more than one jurisdiction, so add city or state to tell them apart.
         */
        permitNumber?: (string | null),
        /**
         * Contractor name (partial match)
         */
        contractorName?: (string | null),
        /**
         * true selects records with no linked contractor and a recorded owner name, using source contractor coverage checks; false selects records with a linked contractor. This filter does not verify who filed, homeowner status or purchase intent.
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
                'permit_number': permitNumber,
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
                402: `Record credits empty or expired`,
                403: `Your plan does not include this endpoint, or an option you passed. The body is machine-readable: \`error\` is \`feature_locked\`, \`feature\` names the gate, \`upgrade_url\` links to the cheapest plan that unlocks it, and \`current_tier\` is the plan you are on.`,
                409: `Wallet busy, or CSV count/cost changed`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Export Permits
     * Export permits matching the same API filters as CSV. Plan row limits or available
     * credits cap the download. Use preview=true for the exact bounded record count and credit
     * cost, then expected_rows and expected_credit_cost to confirm them before downloading.
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
     * @returns any Successful Response
     * @throws ApiError
     */
    public exportPermits({
        preview = false,
        expectedPreviewCreditCost,
        expectedRows,
        expectedCreditCost,
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
        /**
         * Count this bounded export without returning records. Preview pricing is reported by /v1/credits/balance; credit_cost quotes the subsequent download.
         */
        preview?: boolean,
        /**
         * Refuse sizing if its own credit cost changed since balance was read.
         */
        expectedPreviewCreditCost?: (number | null),
        /**
         * Refuse download if the count changed since preview.
         */
        expectedRows?: (number | null),
        /**
         * Refuse download if the credit cost changed since preview.
         */
        expectedCreditCost?: (number | null),
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
         * true selects records with no linked contractor and a recorded owner name, using source contractor coverage checks; false selects records with a linked contractor. This filter does not verify who filed, homeowner status or purchase intent.
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
    }): CancelablePromise<{
        record_count: number;
        limit: number;
        credit_cost: number;
        truncated: boolean;
        preview_credit_cost: number;
        available_credits: (number | null);
        download_available: boolean;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/export',
            query: {
                'preview': preview,
                'expected_preview_credit_cost': expectedPreviewCreditCost,
                'expected_rows': expectedRows,
                'expected_credit_cost': expectedCreditCost,
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
                402: `Record credits empty or expired`,
                403: `Your plan does not include this endpoint, or an option you passed. The body is machine-readable: \`error\` is \`feature_locked\`, \`feature\` names the gate, \`upgrade_url\` links to the cheapest plan that unlocks it, and \`current_tier\` is the plan you are on.`,
                409: `Wallet busy, or CSV count/cost changed`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Sync Permits
     * Incremental data feed (change-data-capture). Page the dataset ordered by
     * (updated_at, id). Omit `cursor` for the initial full load; persist `next_cursor` and pass
     * it back after each nightly ingest to receive only new + changed permits. Upsert-only:
     * permits we delete (duplicate copies removed in cleanups) are listed separately by
     * GET /v1/permits/sync/deletions, which pages the same way.
     *
     * **Keeping a mirror exact.** Upsert every record from this feed, and drop every
     * `permit_id` that GET /v1/permits/sync/deletions returns when called with the SAME
     * `record_kind`, `state` and `category` you pass here. A permit can leave a filtered
     * feed without being deleted -- re-classified (roofing -> hvac), re-located to another
     * state, re-labelled as a non-building record, or its source switched off -- and the
     * deletions feed then lists it for every filter it no longer matches, and never for one
     * it still matches. A permit that moves INTO your filter arrives here with a new
     * `updated_at`. Membership changes are recorded from 2026-10-25; category and state moves
     * before that date were not, so a mirror built with `category=` or `state=` before then
     * should re-pull once (or sync unfiltered with `record_kind=all` and filter locally).
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
     * Sync Deletions
     * Permits to drop from a mirror built with /v1/permits/sync.
     *
     * /v1/permits/sync is upsert-only, so a permit we delete (almost always a duplicate copy of a
     * permit that still exists under another id) would otherwise live on in a mirror and 404 on
     * /v1/permits/{id}. Drop every `permit_id` listed here. Same cursor contract as /sync: omit
     * `cursor` (or pass `since`) to start, then pass back `next_cursor`. When the deleted copy's
     * permit still exists under another id, `replaced_by` names it. Every delete is recorded by a
     * database trigger, so this list covers all deletions from 2026-09-24 on, whatever removed them.
     *
     * **Call it with the same `record_kind`, `state` and `category` as your /v1/permits/sync
     * calls.** It also lists permits that LEFT that feed without being deleted (`kind =
     * "left_feed"`, the permit still exists): we stopped serving the source
     * (`reason = "jurisdiction_deactivated"`), it was re-labelled as a non-building
     * record (`left_permit_set:<kind>`, or `record_kind_changed:<kind>` for a
     * record that was not a permit), or -- from 2026-10-25 -- it was re-classified or moved to
     * another state or source (`category_changed:OLD->NEW`,
     * `state_changed:OLD->NEW`, `jurisdiction_changed`; for a move,
     * `jurisdiction_id` is the source it LEFT and `moved_to_jurisdiction_id` the one it joined).
     * `reason` names the latest change, except that a re-label or a stopped source still in
     * force keeps its reason through later changes. Each entry is judged against the permit as it is
     * NOW: one that still matches your filters is never listed for you, and one that comes back
     * is re-sent by /v1/permits/sync with a new `updated_at`.
     *
     * A page holds at most `limit` results. To reach them it examines records past ones that do
     * not concern you (up to 250,000 per page), so after a large
     * re-classification a page can still hold fewer than `limit` results, even none, while
     * `has_more` is true. Keep paging until `has_more` is false; `next_cursor` always advances
     * past everything examined.
     * @returns any Successful Response
     * @throws ApiError
     */
    public syncDeletions({
        cursor,
        since,
        limit = 5000,
        recordKind = 'permit',
        state,
        category,
    }: {
        /**
         * Opaque cursor from the previous response's `next_cursor`.
         */
        cursor?: (string | null),
        /**
         * ISO-8601 UTC timestamp; returns deletions with deleted_at >= since. Ignored when `cursor` is supplied. Omit both to page every recorded deletion.
         */
        since?: (string | null),
        /**
         * Max results per page (up to 50,000). A page can return fewer -- even none -- and still have `has_more`: keep paging while `has_more` is true.
         */
        limit?: number,
        /**
         * Pass the same value you pass to /v1/permits/sync: 'permit' (default), a specific record_kind, or 'all'. A permit re-labelled as a non-building record is listed for record_kind=permit and not for record_kind=all, where it is still in the feed.
         */
        recordKind?: string,
        /**
         * Pass the same 2-letter state you pass to /v1/permits/sync. Lists permits that left that state's feed, including ones whose own address_state differs from their jurisdiction's.
         */
        state?: (string | null),
        /**
         * Pass the same category you pass to /v1/permits/sync. Lists permits re-classified out of it (e.g. roofing -> hvac) as well as deletions.
         */
        category?: (string | null),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/permits/sync/deletions',
            query: {
                'cursor': cursor,
                'since': since,
                'limit': limit,
                'record_kind': recordKind,
                'state': state,
                'category': category,
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
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
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
                402: `Record credits empty or expired`,
                409: `Wallet busy, or CSV count/cost changed`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Permit
     * Get full details for a single permit.
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
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
                402: `Record credits empty or expired`,
                409: `Wallet busy, or CSV count/cost changed`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Permits By Address
     * Search a page of held permit records using a partial address match. Results depend on source coverage, address matching, pagination and plan history limits. A match can include multiple properties; an empty result does not prove that no permit or work exists.
     *
     * Record credits: when there is no active plan entitlement, one credit is charged per returned record, with a one-credit minimum for successful empty data responses. Property responses count their permits. CSV sizing previews cost 0 credits and share the per-key 60/minute request budget. Credit accounts cannot receive owner or contractor contact fields. An empty or expired wallet returns 402 with a pack URL before the data query. Concurrent requests for the same wallet can return 409; retry after one second. A final JSON page may overdraw once; the next purchase first covers that debt. CSV downloads are capped at the remaining credit balance.
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
                402: `Record credits empty or expired`,
                409: `Wallet busy, or CSV count/cost changed`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Coverage Stats
     * Coverage statistics: total permits, every jurisdiction we hold, and the counties they fall in.
     *
     * Each jurisdiction carries nullable `data_through` (the newest held permit date where measured),
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
     * Search held permit records by trade and permit age. The date basis is issue
     * date, falling back to filing date. The query selects the newest matching held
     * record at a recorded address within the selected age range, with no newer
     * matching record found. Supported trades: roofing, hvac, mechanical, solar and pool.
     *
     * Results are paginated and depend on source coverage, classification and address
     * matching. A missing newer record does not establish that no later work occurred.
     * These dates do not verify installation, equipment age or replacement needs.
     * Review work scope, completion evidence and current condition separately.
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
     * Search held solar permit records in the selected permit-age range with no
     * matching battery-tagged permit found at the same recorded address. Dates use
     * issue date, falling back to filing date. Requires a location filter; results
     * are paginated and depend on source coverage, classification and address matching.
     *
     * An absent match does not establish that a property lacks a battery. Permit
     * dates do not verify installation or current equipment. Review scope,
     * completion and equipment suitability before assessing retrofit needs.
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
     * Search held roofing permit records in the selected permit-age range, with
     * no newer matching roofing record found at the same recorded address. Dates use
     * issue date, falling back to filing date. Results are paginated and depend on
     * source coverage, classification and address matching.
     *
     * A roofing record can describe a repair or proposed work. Its age does not
     * establish roof age or predict replacement, and missing records do not prove
     * that no later work occurred. Review scope, completion and current condition.
     * Alias of /v1/plays/system-age?trade=roofing.
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
     * Search held solar permit records using a case-insensitive substring match
     * in recorded contractor, applicant or owner fields. Requires a location filter;
     * results are paginated and depend on source coverage and available names.
     *
     * A name match does not verify the installer, a customer relationship, completed
     * installation or current service needs. Review identity, project scope,
     * completion and current equipment before using a result as a prospect.
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
     * Covered jurisdictions with measured currency and source-capture labels where available.
     *
     * `data_through` is the newest held permit date where measured, not a poll time.
     * Dates and capture estimates may be unknown; a current date does not establish
     * complete capture. `freshness_label` and `completeness_label` use the shared
     * definitions also used by the export picker and delivered manifest.
     *
     * `last_refreshed` is the UTC date we last finished reading the source, whether or not it
     * had anything new: a refresh date, never a currency claim (that is `data_through`).
     * `previous_names` lists the names the same jurisdiction `id` was published under before,
     * oldest first, each with the date it stopped being used. The id never changes on a rename.
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
