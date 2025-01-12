import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import utils from "./utils/index";
import * as Sentry from "@sentry/react";
Sentry.init({
  dsn: "https://c6be45a7e5d3515a9289f91d0a74f73b@o4508416314834944.ingest.de.sentry.io/4508416324927568",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
