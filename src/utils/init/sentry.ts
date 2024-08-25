import * as Sentry from '@sentry/react'
import React from 'react'
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from 'react-router-dom'

export const initSentry = () => {
    Sentry.init({
        dsn: "https://f725aed79ab980f9e217928685c84704@s.tontmaservice.xyz/6",
        integrations: [
            Sentry.reactRouterV6BrowserTracingIntegration({
                useEffect: React.useEffect,
                useLocation,
                useNavigationType,
                createRoutesFromChildren,
                matchRoutes
            }),
            Sentry.replayIntegration()
        ],
        tracesSampleRate: 1.0,
        tracePropagationTargets: ["localhost", /^https:\/\/tappscenter\.org/],
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
    });
}
