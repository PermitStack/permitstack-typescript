/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SupportRequest = {
    name: string;
    email: string;
    /**
     * question | bug | feature | billing | data | other
     */
    category: string;
    subject: string;
    message: string;
    company?: (string | null);
};

