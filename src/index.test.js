import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Boilerplate test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Bolierplate test - index.html', () => {
  it('should return JavaScript Boilerplate Template', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];

    expect(h1.innerHTML).to.equal('JavaScript Boilerplate Template');

    dom.window.close();
  });
});
