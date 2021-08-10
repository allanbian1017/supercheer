'use strict';

const superagent = require('superagent');
const cheerio = require('cheerio');

/**
 * Query url, extract selector and transform into object
 *
 * @param {String} url
 * @param {Object} selector
 * @param {Object} transform
 * @return {Promise}
 */
module.exports.query = async (url, selectors, transform) => {
  let resp = await superagent.get(url);
  let $ = cheerio.load(resp.text);

  return Object.keys(selectors)
    .map((key) => {
      let obj = {};
      let v = $(selectors[key]).text().trim();

      obj[key] = v;
      if (transform[key]) {
        obj[key] = transform[key](v);
      }

      return obj;
    })
    .reduce((x, y) => Object.assign({}, x, y));
};
