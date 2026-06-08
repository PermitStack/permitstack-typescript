/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ContractorProfile = {
    id: string;
    name: string;
    license_number: (string | null);
    license_state: (string | null);
    city: (string | null);
    state: (string | null);
    total_permits: number;
    first_permit_date: (string | null);
    last_permit_date: (string | null);
    specialties: (Array<string> | null);
    phone: (string | null);
    email: (string | null);
    address: (string | null);
    zip_code: (string | null);
    recent_categories?: (Array<string> | null);
    avg_project_value?: (number | null);
};

