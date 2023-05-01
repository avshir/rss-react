// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

import matchers from '@testing-library/jest-dom/matchers';
import { fetch, Headers, Request, Response } from 'cross-fetch';

// Add `fetch` polyfill.
global.fetch = fetch;

global.Headers = Headers;
global.Request = Request;
global.Response = Response;

expect.extend(matchers);
