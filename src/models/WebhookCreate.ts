/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WebhookCreate = {
    url: string;
    city?: (string | null);
    state?: (string | null);
    category?: (string | null);
    zip_code?: (string | null);
    keyword?: (string | null);
    /**
     * Fire only for permits pulled by contractors whose name contains this text (case-insensitive) — track a competitor or partner as their new permits arrive.
     */
    contractor_name?: (string | null);
};

