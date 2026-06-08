import { PermitStackClient } from './PermitStackClient';
import type { OpenAPIConfig } from './core/OpenAPI';

export interface PermitstackOptions {
  /** Your PermitStack API key (X-API-Key). Get one at https://permit-stack.com */
  apiKey: string;
  /** Override the API base URL (defaults to https://api.permit-stack.com). */
  serverURL?: string;
}

/**
 * PermitStack SDK client.
 *
 *   const client = new Permitstack({ apiKey: 'pk_your_key' });
 *   const res = await client.permits.searchPermits({ city: 'Austin', category: 'SOLAR' });
 */
export class Permitstack extends PermitStackClient {
  constructor(options: PermitstackOptions, config: Partial<OpenAPIConfig> = {}) {
    const extraHeaders =
      config.HEADERS && typeof config.HEADERS === 'object'
        ? (config.HEADERS as Record<string, string>)
        : {};
    super({
      ...config,
      BASE: options.serverURL ?? config.BASE ?? 'https://api.permit-stack.com',
      HEADERS: { 'X-API-Key': options.apiKey, ...extraHeaders },
    });
  }
}
