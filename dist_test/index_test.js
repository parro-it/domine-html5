'use strict';

var moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

var _require = require(moduleRoot);

var html = _require.html;
var body = _require.body;
var main = _require.main;

describe('domineHtml5', function () {
  it('works', function () {
    var result = html(body({ lang: 'en' }, main('it works!')));
    // console.log(require('util').inspect(result,{depth:null}))
    result.should.be.deep.equal({
      __vdom: true,
      tagName: 'html',
      properties: {},
      children: [{
        __vdom: true,
        tagName: 'body',
        properties: { lang: 'en' },
        children: [{
          __vdom: true,
          tagName: 'main',
          properties: {},
          children: ['it works!']
        }]
      }]
    });
  });
});