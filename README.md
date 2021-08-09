# supercheer

_supercheer_ is a wrapper to wrap [superagent](https://github.com/visionmedia/superagent) and [cheerio](https://github.com/cheeriojs/cheerio) and make it easy to do crawling webpage.

## Setup

---

Install:

```sh
npm install supercheer --save
```

## Usage

---

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

---

MIT. See LICENSE for details.
