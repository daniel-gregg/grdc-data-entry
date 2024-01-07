/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare global {
    interface Env {
        RESEND_API_KEY: string;
        __STATIC_CONTENT: Fetcher;
    }
}

declare module '@remix-run/cloudflare' {
    export interface AppLoadContext {
        env: Env;
    }
    export type GetLoadContextFunction = (event: FetchEvent) => AppLoadContext;
}

// Needed to make this file a module.
export {};
