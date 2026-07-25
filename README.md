# x-guest-api-client

Retrieve and manage public Twitter/X guest tokens to query public tweets and metadata without Developer portal accounts.

## Features

- Acquires active guest tokens from public entry portals.
- Enables public feed consumption without API tokens.
- Handles validation and expiration automatically.

## Installation

```bash
npm install x-guest-api-client
```

## Usage

```typescript
import { getXGuestToken } from 'x-guest-api-client';

// Retrieve guest token
const guestToken = await getXGuestToken();
console.log('Guest Token:', guestToken);
// Output: '1780000000000000000'
```

## API Reference

### getXGuestToken()

Retrieves a guest session token.

**Returns:** `Promise<string>`

## License

MIT
