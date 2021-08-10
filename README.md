# supercheer

[![CircleCI](https://circleci.com/gh/allanbian1017/supercheer/tree/master.svg?style=shield)](https://circleci.com/gh/allanbian1017/supercheer/tree/master)[![View on NPM](https://img.shields.io/npm/v/supercheer.svg)](https://www.npmjs.com/package/supercheer)
[![View on NPM](https://img.shields.io/npm/dm/supercheer.svg)](https://www.npmjs.com/package/supercheer)

_supercheer_ is a wrapper, wrapping [superagent](https://github.com/visionmedia/superagent) and [cheerio](https://github.com/cheeriojs/cheerio), make it easy to do crawling webpage.

## Setup

Install:

```sh
npm install supercheer --save
```

## Usage

### supercheer.query( url, selectors, transform )

```js
const supercheer = require('supercheer');

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
