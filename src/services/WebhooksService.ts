/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookCreate } from '../models/WebhookCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WebhooksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Webhooks
     * List all your registered webhooks.
     * @returns any Successful Response
     * @throws ApiError
     */
    public listWebhooks(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/webhooks/',
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Create Webhook
     * Register a webhook to be notified when new permits match your filters.
     *
     * Available on the Developer plan and above (see /v1/billing/plans for current
     * pricing). Maximum 10 webhooks per API key.
     * When a new permit matches your filters, we'll POST the permit data as JSON to your URL.
     * Set contractor_name to track a specific company — you'll get a POST within minutes
     * of any permit they pull appearing in our data (competitor tracking).
     * @returns any Successful Response
     * @throws ApiError
     */
    public createWebhook({
        requestBody,
    }: {
        requestBody: WebhookCreate,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/webhooks/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                403: `Your plan does not include this endpoint, or an option you passed. The body is machine-readable: \`error\` is \`feature_locked\`, \`feature\` names the gate, \`upgrade_url\` links to the cheapest plan that unlocks it, and \`current_tier\` is the plan you are on.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Delete Webhook
     * Delete a webhook.
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteWebhook({
        webhookId,
    }: {
        webhookId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/webhooks/{webhook_id}',
            path: {
                'webhook_id': webhookId,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Update Webhook
     * Re-activate (or deactivate) one of your webhooks.
     *
     * Re-activating resumes delivery from now: permits ingested while the webhook was paused
     * are not replayed (use /v1/permits/search or /v1/permits/sync to backfill a gap), so a
     * newly fixed endpoint is not hit with the whole backlog at once. The failure count resets
     * to zero.
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateWebhook({
        webhookId,
        isActive,
    }: {
        webhookId: string,
        /**
         * true re-activates a webhook the failure breaker switched off.
         */
        isActive: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/webhooks/{webhook_id}',
            path: {
                'webhook_id': webhookId,
            },
            query: {
                'is_active': isActive,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Test Webhook
     * Send a test event to a webhook URL.
     *
     * Useful for verifying your webhook endpoint is reachable and signature
     * validation works. Sends a fake permit payload with event=permit.test.
     * @returns any Successful Response
     * @throws ApiError
     */
    public testWebhook({
        webhookId,
    }: {
        webhookId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/webhooks/{webhook_id}/test',
            path: {
                'webhook_id': webhookId,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Webhook Deliveries
     * Why your webhook is or is not being delivered, seen from our side of the connection.
     *
     * Only FAILED attempts are recorded individually; successful deliveries are counted
     * (fire_count, last_fired_at). An empty `recent_failures` list is therefore good news, not
     * missing data. `consecutive_failures` is what the automatic pause acts on: when it reaches
     * the limit the webhook is deactivated, so it is the field to watch.
     * @returns any Successful Response
     * @throws ApiError
     */
    public getWebhookDeliveries({
        webhookId,
        limit = 20,
    }: {
        webhookId: string,
        /**
         * How many recent failed attempts to return.
         */
        limit?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/webhooks/{webhook_id}/deliveries',
            path: {
                'webhook_id': webhookId,
            },
            query: {
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
     * Rotate Webhook Secret
     * Issue a NEW signing secret for this webhook. The old one stops working immediately.
     *
     * Every delivery after this call is signed with the new secret, so update your verifier
     * first. Creating a webhook again with the same settings returns the existing secret; this
     * endpoint is the only way to rotate it.
     * @returns any Successful Response
     * @throws ApiError
     */
    public rotateWebhookSecret({
        webhookId,
    }: {
        webhookId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/webhooks/{webhook_id}/rotate-secret',
            path: {
                'webhook_id': webhookId,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
    /**
     * Get Webhook Secret
     * Retrieve your webhook signing secret. Use this to validate signatures.
     *
     * The X-PermitStack-Signature header on incoming webhook requests is the
     * HMAC-SHA256 of the request body using this secret. Verify before
     * processing to ensure the request came from PermitStack.
     * @returns any Successful Response
     * @throws ApiError
     */
    public getWebhookSecret({
        webhookId,
    }: {
        webhookId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/webhooks/{webhook_id}/secret',
            path: {
                'webhook_id': webhookId,
            },
            errors: {
                401: `Missing or invalid API key. Pass a key as the \`X-API-Key\` header.`,
                422: `Validation Error`,
                429: `Rate limit exceeded -- either the per-minute burst or the daily cap for your plan. Retry after the window resets; the daily cap resets at UTC midnight.`,
            },
        });
    }
}
