# supercheer

_supercheer_ is a utility to make it easy to do crawling webpage.

## Setup

Install:

```sh
npm install supercheer --save
```

## Example

```JavaScript
const lambdaUtils = require('lambda-http-utils');

const r = await supercheer.query(
  'https://www.google.com/',
  {
    title: 'title',
    firstChar: 'title',
  },
  {
    firstChar: (v) => v.slice(0, 1),
  }
);

// {
//   title: 'Google',
//   firstChar: 'G',
// }
console.log(r);
```

## License

MIT. See LICENSE for details.
