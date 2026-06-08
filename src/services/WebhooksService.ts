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
        });
    }
    /**
     * Create Webhook
     * Register a webhook to be notified when new permits match your filters.
     *
     * Available on Starter ($49/mo) and above. Maximum 10 webhooks per API key.
     * When a new permit matches your filters, we'll POST the permit data as JSON to your URL.
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
                422: `Validation Error`,
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
                422: `Validation Error`,
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
                422: `Validation Error`,
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
                422: `Validation Error`,
            },
        });
    }
}
