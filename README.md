# Quetch

🍋 Simple abstraction layer over any API.

### Features

- Provides a fully typed query object format
- Queries local data as well as external data (e.g., through `fetch`)
- Separates resource requests from API configuration
- Provides error handlers

## Usage

Everything is exported from the main entry-point through an ES6 module:

```typescript
import { fetchLocal, combine } from "quetch";
import type { Query } from "quetch";
```

## Installation

Install with the [Node Package Manager](https://www.npmjs.com/package/quetch):

```bash
npm install quetch
```

## Documentation

Documentation is generated [here](doc/README.md).
