let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const domineHtml5 = require(moduleRoot);

describe('domineHtml5', () => {
  it('works', async () => {
    const result = await domineHtml5();
    result.should.be.equal(42);
  });
});

