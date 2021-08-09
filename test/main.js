'use strict';

const supercheer = require('../src/index.js');
const expect = require('chai').expect;

describe('supercheer', () => {
  it('should query success without error', async () => {
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

    expect(r).to.deep.equal({
      title: 'Google',
      firstChar: 'G',
    });
  });
});
