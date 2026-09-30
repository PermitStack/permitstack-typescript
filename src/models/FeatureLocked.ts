/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FeatureLocked = {
    detail?: {
        error?: FeatureLocked.error;
        feature?: string;
        message?: string;
        upgrade_url?: string;
        current_tier?: string;
    };
};
export namespace FeatureLocked {
    export enum error {
        FEATURE_LOCKED = 'feature_locked',
    }
}

