/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ContractorsService } from './services/ContractorsService';
import { HealthService } from './services/HealthService';
import { PermitsService } from './services/PermitsService';
import { PropertyHistoryService } from './services/PropertyHistoryService';
import { WebhooksService } from './services/WebhooksService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class PermitStackClient {
    public readonly contractors: ContractorsService;
    public readonly health: HealthService;
    public readonly permits: PermitsService;
    public readonly propertyHistory: PropertyHistoryService;
    public readonly webhooks: WebhooksService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.permit-stack.com',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.contractors = new ContractorsService(this.request);
        this.health = new HealthService(this.request);
        this.permits = new PermitsService(this.request);
        this.propertyHistory = new PropertyHistoryService(this.request);
        this.webhooks = new WebhooksService(this.request);
    }
}

