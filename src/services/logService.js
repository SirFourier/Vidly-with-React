import * as Sentry from "@sentry/react";

function init() {
  Sentry.init({
    dsn:
      "https://c6556ee811b14d7880d62cd848fcd171@o481097.ingest.sentry.io/5529125",
  });
}

function log(error) {
  Sentry.captureException("Logging the error", error);
}

export default {
  init,
  log,
};
