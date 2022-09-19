import {
  renderHook,
  // act,
  waitFor,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { useClientIpv4 } from './clientIp';

/**
 * by RFC5737
 * {@link https://datatracker.ietf.org/doc/html/rfc5737}
 */
const dummyIp = '234.192.0.2';

const server = setupServer(rest.get('https://checkip.amazonaws.com', (req, res, ctx) => res(ctx.text(`${dummyIp}\n`))));

describe('useClientIpv4', () => {
  beforeEach(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });
  it('unloaded', () => {
    const { result } = renderHook(() => useClientIpv4());
    expect(result.current).toBeUndefined();
  });
  it('loaded', async () => {
    const { result } = renderHook(() => useClientIpv4());
    expect(result.current).toBeUndefined();
    await waitFor(() => {
      expect(result.current).toBe(dummyIp);
    });
  });
  it('error', async () => {
    server.use(rest.get('https://checkip.amazonaws.com', (req, res, ctx) => res(ctx.status(500))));
    const { result } = renderHook(() => useClientIpv4());
    expect(result.current).toBeUndefined();
    await waitFor(() => {
      expect(result.current).toBeNull();
    });
  });
});
