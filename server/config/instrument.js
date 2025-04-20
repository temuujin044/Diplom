// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://2ac0576eae09cc4ab2b2404c5c000b05@o4509109627715584.ingest.us.sentry.io/4509115642937344",
  integrations: [Sentry.mongooseIntegration()],
});
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="af2031f9-329a-566a-9de8-04bddea6b098")}catch(e){}}();
//# debugId=af2031f9-329a-566a-9de8-04bddea6b098
