/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CertificateDetail = {
    id: string;
    co_number?: (string | null);
    kind: string;
    co_type: string;
    certificate_status: string;
    is_renewal?: boolean;
    co_date?: (string | null);
    co_date_basis: string;
    application_date?: (string | null);
    expiration_date?: (string | null);
    address_street?: (string | null);
    address_city?: (string | null);
    address_state: string;
    address_zip?: (string | null);
    latitude?: (number | null);
    longitude?: (number | null);
    parcel_id?: (string | null);
    bin?: (string | null);
    occupancy_class?: (string | null);
    occupancy_description?: (string | null);
    use_description?: (string | null);
    job_type?: (string | null);
    units?: (number | null);
    units_existing?: (number | null);
    square_footage?: (number | null);
    stories?: (number | null);
    linked_permit_id?: (string | null);
    linked_permit_number?: (string | null);
    contractor_name?: (string | null);
    contractor_license?: (string | null);
    jurisdiction_id?: (string | null);
    source: string;
    source_id: string;
    origin: string;
    co_type_raw?: (string | null);
    status_raw?: (string | null);
    address_raw?: (string | null);
    source_record?: (Record<string, any> | null);
    updated_at?: (string | null);
};

