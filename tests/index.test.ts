import { describe, it, expect } from 'vitest';
import { getXGuestToken } from '../src/index.js';

describe('x-guest-api-client', () => {
  it('should fetch or return guest token fallback', async () => {
    const token = await getXGuestToken();
    expect(token.length).toBeGreaterThan(5);
  });
});