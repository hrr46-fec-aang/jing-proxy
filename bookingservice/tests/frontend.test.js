// const puppeteer = require('puppeteer');
// const pageUrl = 'http://localhost:3030/';

// let page;
// let browser;
// const width = 1280;
// const height = 720;

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     // headless: false,
//     // slowMo: 100,
//     // args: [`--window-size=${width}, ${height}`]
//     args: ['--no-sandbox', '--disable-setuid-sandbox']
//   });
//   page = await browser.newPage();
//   await page.setViewport({width, height});

// });



// describe('Test server connect to root url', () => {
//   test('Checks that browser connects to server', async () => {
//     const res = await page.goto(pageUrl, {waitUntil: 'networkidle2'});
//     const title = await page.evaluate(()=> document.querySelector('title').textContent);
//     console.log(title);
//     expect(title).toEqual('Booking Module');

//   });
// });
// describe('Test GET request for data(/booking/1)', () => {
//   test('Checks that browser connects to server', async () => {
//     const res = await page.goto(pageUrl+'booking/1', {waitUntil: 'networkidle2'});
//     const resBody = await res.text();
//     const resBodyObj = JSON.parse(resBody);
//     expect(resBodyObj[0].id).toEqual(1);

//   });
// });

import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Book from '../src/components/Book';
import Button from '../src/App.style';
import Checkin from '../src/components/Checkin';
import Checkout from '../src/components/Checkout';

configure({ adapter: new Adapter() })

describe('Test Book Component', function () {
  it('should render without throwing an error', function () {
    expect(shallow(<Book />).contains(<div className="book"><p><Button>Book</Button></p></div>)).toBe(true);
  });

  it('should be selectable by class "book"', function () {
    expect(shallow(<Book />).is('.book')).toBe(true);
  });

  it('should mount in a full DOM', function () {
    expect(mount(<Book />).find('.book').length).toBe(1);
  });

  it('should render to static HTML', function () {
    expect(render(<Book />).text()).toEqual('Book');
  });
});

describe('Test Checkin Component', function () {

  it('should be selectable by class "checkin"', function () {
    expect(shallow(<Checkin />).is('.checkin')).toBe(true);
  });

  it('should mount in a full DOM', function () {
    expect(mount(<Checkin />).find('.checkin').length).toBe(1);
  });

  it('should render to static HTML', function () {
    expect(render(<Checkin />).text()).toEqual('Check in');
  });
});

describe('Test Checkout Component', function () {

  it('should be selectable by class "checkout"', function () {
    expect(shallow(<Checkout />).is('.checkout')).toBe(true);
  });

  it('should mount in a full DOM', function () {
    expect(mount(<Checkout />).find('.checkout').length).toBe(1);
  });

  it('should render to static HTML', function () {
    expect(render(<Checkout />).text()).toEqual('Check out');
  });
});

// afterAll(async () => {
//   await browser.close();
// });