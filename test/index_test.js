let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const {html, body, main} = require(moduleRoot);

describe('domineHtml5', () => {
  it('works', () => {
    const result =
      html(
        body({lang: 'en'},
          main('it works!')
        )
      );
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
          children: [ 'it works!' ]
        }]
      }]
    });
  });
});

