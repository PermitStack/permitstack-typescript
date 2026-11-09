/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { CertificatesOfOccupancyService } from './services/CertificatesOfOccupancyService';
import { CodeViolationsService } from './services/CodeViolationsService';
import { ContractorsService } from './services/ContractorsService';
import { CreditsService } from './services/CreditsService';
import { DevelopmentPipelineService } from './services/DevelopmentPipelineService';
import { HealthService } from './services/HealthService';
import { InspectionsService } from './services/InspectionsService';
import { LicensingService } from './services/LicensingService';
import { MetricsService } from './services/MetricsService';
import { PermitsService } from './services/PermitsService';
import { PropertyHistoryService } from './services/PropertyHistoryService';
import { WebhooksService } from './services/WebhooksService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class PermitStackClient {
    public readonly certificatesOfOccupancy: CertificatesOfOccupancyService;
    public readonly codeViolations: CodeViolationsService;
    public readonly contractors: ContractorsService;
    public readonly credits: CreditsService;
    public readonly developmentPipeline: DevelopmentPipelineService;
    public readonly health: HealthService;
    public readonly inspections: InspectionsService;
    public readonly licensing: LicensingService;
    public readonly metrics: MetricsService;
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
        this.certificatesOfOccupancy = new CertificatesOfOccupancyService(this.request);
        this.codeViolations = new CodeViolationsService(this.request);
        this.contractors = new ContractorsService(this.request);
        this.credits = new CreditsService(this.request);
        this.developmentPipeline = new DevelopmentPipelineService(this.request);
        this.health = new HealthService(this.request);
        this.inspections = new InspectionsService(this.request);
        this.licensing = new LicensingService(this.request);
        this.metrics = new MetricsService(this.request);
        this.permits = new PermitsService(this.request);
        this.propertyHistory = new PropertyHistoryService(this.request);
        this.webhooks = new WebhooksService(this.request);
    }
}

