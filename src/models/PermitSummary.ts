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
     * One of FILED, ISSUED, IN_PROGRESS, FINAL, EXPIRED, CANCELLED, REVOKED, INTERCONNECTED, UNKNOWN -- normalised by us from each source's own vocabulary. UNKNOWN means no recognized normalized status is available; the source value may be missing or unrecognized. It does not establish whether the permit is active. INTERCONNECTED comes from the California NEM solar feed.
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
     * RESIDENTIAL, COMMERCIAL, INDUSTRIAL, MIXED_USE or UNKNOWN. UNKNOWN means no recognized normalized property type is available. Source omissions, mapping gaps or unrecognized values can cause this.
     */
    property_type: string;
    /**
     * Held street address mapped from source fields. It may be assembled from components or split from a postal address; spacing can vary. Address matching normalises whitespace.
     */
    address_street: (string | null);
    /**
     * City recorded for this held permit. Null means no usable normalized city is available; it does not establish that the property is outside a city or that the source never publishes one.
     */
    address_city: (string | null);
    /**
     * 2-letter state recorded for this held permit. Null means no usable normalized state is available. A state search can still include such rows using independent jurisdiction evidence.
     */
    address_state: (string | null);
    /**
     * 5-digit ZIP where published.
     */
    address_zip: (string | null);
    /**
     * Assessor parcel number / APN, either published with the permit or matched from an appraiser roll by situs address. Formatting varies by source and is preserved. Null means no usable parcel is mapped on this record; it does not establish that the upstream feed or property has no parcel. Filterable via ?parcel= after the parcel index is refreshed.
     */
    parcel_id?: (string | null);
    /**
     * Held source-derived work description. Text may be combined from multiple fields, cleaned, or have contacts removed. Whole-value placeholders may become null. Used by the category classifier; not a verbatim copy or evidence that work was completed.
     */
    description_raw: (string | null);
    /**
     * Declared job value in USD, as published. Frequently null and occasionally nominal -- treat 0 and 1 as 'not stated'.
     */
    estimated_value: (number | null);
    /**
     * Application/filing date where mapped and usable. Null means no usable held filing date is available; source omissions, mapping gaps or validation can cause this.
     */
    date_filed: (string | null);
    /**
     * Issue date where mapped and usable. Null means no usable held issue date is available; it does not establish what dates the source publishes. date_after/date_before filter on COALESCE(date_issued, date_filed); issued_after uses only date_issued.
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
     * Contractor name linked to the held permit record after cleaning and matching. Null values can reflect source omissions, mapping gaps or unmatched names. The jurisdiction_coverage block reports contractor-name presence on the current page; it does not prove complete source capture.
     */
    contractor_name?: (string | null);
    /**
     * Opaque id of the contractor linked to this held permit. Use GET /v1/contractors/{id} for its record. Null means no contractor is linked; source omissions and matching gaps can both cause this.
     */
    contractor_id?: (string | null);
    /**
     * Owner name recorded by the source, subject to field access. A present owner name and absent contractor name do not establish who filed the permit, a homeowner, purchase intent or a sales opportunity. Source omissions and matching gaps can explain missing contractor data. Review the owner_filed filter semantics and source coverage.
     */
    owner_name?: (string | null);
    /**
     * Property-owner mailing address. Business plan ($149/mo) and above; null below that access gate. Joined from held county assessor records by parcel. Source availability, capture and matching vary by jurisdiction; loading a roll does not establish complete address coverage. A null value does not establish that a property has no owner on record.
     */
    owner_address?: (string | null);
    /**
     * The PermitStack data source this permit came from -- a city, county or statewide feed, which is not always the permit's own city.
     */
    jurisdiction_name?: (string | null);
    /**
     * WGS84 latitude. Null means no usable latitude is held after mapping and any geocoding; it does not establish that the source lacks coordinates. Permits without usable coordinates are absent from radius, bbox and polygon search.
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
     * One of FILED, ISSUED, IN_PROGRESS, FINAL, EXPIRED, CANCELLED, REVOKED, INTERCONNECTED, UNKNOWN -- normalised by us from each source's own vocabulary. UNKNOWN means no recognized normalized status is available; the source value may be missing or unrecognized. It does not establish whether the permit is active. INTERCONNECTED comes from the California NEM solar feed.
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

