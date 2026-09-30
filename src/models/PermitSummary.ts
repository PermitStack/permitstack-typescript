/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermitEnrichment } from './PermitEnrichment';
/**
 * One building permit.
 */
export type PermitSummary = {
    /**
     * Stable PermitStack id. Pass to GET /v1/permits/{id}.
     */
    id: string;
    /**
     * The permit number as the issuing jurisdiction publishes it. Not unique across jurisdictions, and not always present.
     */
    permit_number: (string | null);
    /**
     * One of FILED, ISSUED, IN_PROGRESS, FINAL, EXPIRED, CANCELLED, REVOKED, INTERCONNECTED, UNKNOWN -- normalised by us from each source's own vocabulary. UNKNOWN means the source published no status, never that the permit is inactive. INTERCONNECTED comes from the California NEM solar feed.
     */
    status: PermitSummary.status;
    /**
     * Trade/work classification, UPPERCASE. One of: NEW_CONSTRUCTION, RENOVATION, DEMOLITION, ELECTRICAL, PLUMBING, MECHANICAL, ROOFING, SOLAR, BATTERY, EV_CHARGER, HVAC, FIRE_ALARM, SIGN, FENCE, POOL, FOUNDATION, ADDITION, INTERIOR_REMODEL, GRADING, OTHER. Derived by us from the permit type and description, not published by the city. NOTE when FILTERING: ?category=hvac matches HVAC *and* MECHANICAL, and ?category=mechanical does the same, because HVAC work is routinely filed as MECHANICAL -- they are one market and a bare equality would hide half of it.
     */
    category: PermitSummary.category;
    /**
     * Free-form keywords extracted from the description (e.g. 'pool', 'reroof'). Additive; do not rely on a fixed vocabulary.
     */
    tags: (Array<string> | null);
    /**
     * RESIDENTIAL, COMMERCIAL, INDUSTRIAL, MIXED_USE or UNKNOWN. UNKNOWN is common -- many feeds publish nothing that implies a property type.
     */
    property_type: string;
    /**
     * Street address as published. Stored verbatim, so spacing can be irregular; our address matching normalises whitespace for you.
     */
    address_street: (string | null);
    /**
     * City. Null where the feed publishes none -- notably county-wide feeds. Read null as unknown, never as 'not in a city'.
     */
    address_city: (string | null);
    /**
     * 2-letter state. Null on 6.6M permits (7.3%) whose feed never populates it; those rows are still returned by ?state= searches, which admit them on independent evidence of the jurisdiction.
     */
    address_state: (string | null);
    /**
     * 5-digit ZIP where published.
     */
    address_zip: (string | null);
    /**
     * Assessor parcel number / APN exactly as the SOURCE publishes it -- formatting varies by county and is not normalised. ~41% populated estate-wide and entirely dependent on whether the source publishes one, so read a null as 'this feed does not carry a parcel', never as 'this property has none'. Filterable via ?parcel=.
     */
    parcel_id?: (string | null);
    /**
     * The scope of work exactly as the jurisdiction published it. The single most useful field for lead qualification, and the input our category classifier reads.
     */
    description_raw: (string | null);
    /**
     * Declared job value in USD, as published. Frequently null and occasionally nominal -- treat 0 and 1 as 'not stated'.
     */
    estimated_value: (number | null);
    /**
     * Application/filing date. Null where the source publishes only an issue date.
     */
    date_filed: (string | null);
    /**
     * Issue date. Null on ~25% of permits estate-wide -- whole feeds publish only a filed date -- which is why date_after/date_before filter on COALESCE(date_issued, date_filed) and issued_after does not.
     */
    date_issued: (string | null);
    /**
     * Completion/final date where the source publishes one. Usually null.
     */
    date_completed: (string | null);
    /**
     * Calendar days from date_filed to date_issued (null unless both dates present)
     */
    approval_days?: (number | null);
    /**
     * Calendar days from date_issued to date_completed (null unless both dates present)
     */
    construction_days?: (number | null);
    /**
     * Contractor of record, cleaned and de-duplicated by us. Null where the feed publishes no contractor -- which is whole jurisdictions, not scattered rows: 45% of permits estate-wide carry one. A page of nulls usually means the source does not publish contractors, not that our data is missing; the `jurisdiction_coverage` block on a search response tells you which.
     */
    contractor_name?: (string | null);
    /**
     * Opaque id of the contractor on this permit. Pass it to GET /v1/contractors/{id} for the full record; null when the source publishes no contractor for this permit.
     */
    contractor_id?: (string | null);
    /**
     * Owner of record. contractor_name null + owner_name set means no contractor was recorded -- often a homeowner who pulled the permit themselves, which is a sales lead. Caveat: on feeds that capture no contractor at all, EVERY permit looks owner-filed and the owner may be a builder, not a homeowner. Use the ?owner_filed= filter rather than inferring this yourself.
     */
    owner_name?: (string | null);
    /**
     * Property-owner MAILING address. Business plan ($149/mo) and above; null on every other plan, which is a gate and not an absence of data. Joined from county assessor rolls by parcel, so coverage is bimodal -- near-complete in the jurisdictions whose roll we have loaded, absent in those we have not. Never read a null as 'this property has no owner on record'.
     */
    owner_address?: (string | null);
    /**
     * The PermitStack data source this permit came from -- a city, county or statewide feed, which is not always the permit's own city.
     */
    jurisdiction_name?: (string | null);
    /**
     * WGS84 latitude. Null where the source publishes no coordinates and we could not geocode it; such permits are invisible to radius, bbox and polygon search.
     */
    latitude?: (number | null);
    /**
     * WGS84 longitude.
     */
    longitude?: (number | null);
    /**
     * Where the coordinates came from. 'source' = published by the city with the permit record, as good as the city's own data. 'geocoded' = derived by us from the site address (TIGER, address-centroid quality), which for a structure set back from the road, such as an antenna mast, marks the property address rather than the structure. 'derived' = set by us by another method (typically a parcel-centroid join), so treat it as ours, not the city's. 'source' is judged per feed: in a feed that publishes coordinates, a minority of rows whose record lacked them may have been filled by our geocoder before 2026-09-21, when it began logging successes, and those read 'source'. Null when latitude/longitude are null.
     */
    location_source?: (string | null);
    /**
     * Structured detail parsed from the description (e.g. solar kW) where we could extract it. Null for most permits.
     */
    enrichment?: (PermitEnrichment | null);
};
export namespace PermitSummary {
    /**
     * One of FILED, ISSUED, IN_PROGRESS, FINAL, EXPIRED, CANCELLED, REVOKED, INTERCONNECTED, UNKNOWN -- normalised by us from each source's own vocabulary. UNKNOWN means the source published no status, never that the permit is inactive. INTERCONNECTED comes from the California NEM solar feed.
     */
    export enum status {
        FILED = 'FILED',
        ISSUED = 'ISSUED',
        IN_PROGRESS = 'IN_PROGRESS',
        FINAL = 'FINAL',
        EXPIRED = 'EXPIRED',
        CANCELLED = 'CANCELLED',
        REVOKED = 'REVOKED',
        UNKNOWN = 'UNKNOWN',
        INTERCONNECTED = 'INTERCONNECTED',
    }
    /**
     * Trade/work classification, UPPERCASE. One of: NEW_CONSTRUCTION, RENOVATION, DEMOLITION, ELECTRICAL, PLUMBING, MECHANICAL, ROOFING, SOLAR, BATTERY, EV_CHARGER, HVAC, FIRE_ALARM, SIGN, FENCE, POOL, FOUNDATION, ADDITION, INTERIOR_REMODEL, GRADING, OTHER. Derived by us from the permit type and description, not published by the city. NOTE when FILTERING: ?category=hvac matches HVAC *and* MECHANICAL, and ?category=mechanical does the same, because HVAC work is routinely filed as MECHANICAL -- they are one market and a bare equality would hide half of it.
     */
    export enum category {
        NEW_CONSTRUCTION = 'NEW_CONSTRUCTION',
        RENOVATION = 'RENOVATION',
        DEMOLITION = 'DEMOLITION',
        ELECTRICAL = 'ELECTRICAL',
        PLUMBING = 'PLUMBING',
        MECHANICAL = 'MECHANICAL',
        ROOFING = 'ROOFING',
        SOLAR = 'SOLAR',
        BATTERY = 'BATTERY',
        EV_CHARGER = 'EV_CHARGER',
        HVAC = 'HVAC',
        FIRE_ALARM = 'FIRE_ALARM',
        SIGN = 'SIGN',
        FENCE = 'FENCE',
        POOL = 'POOL',
        FOUNDATION = 'FOUNDATION',
        ADDITION = 'ADDITION',
        INTERIOR_REMODEL = 'INTERIOR_REMODEL',
        GRADING = 'GRADING',
        OTHER = 'OTHER',
    }
}

