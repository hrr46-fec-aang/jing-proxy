/**
 * @jest-environment jsdom
 */

//import React from 'react';
//import ReactDOM from 'react-dom';
import {configure, shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ContactHost from '../client/components/ContactHost.jsx';
import Desc from '../client/components/Desc.jsx';
import Host from '../client/components/Host.jsx';
import InfoCards from '../client/components/InfoCards.jsx';
configure({ adapter: new Adapter() });

// ******* FE testing ******* //
describe('tests front end', () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

  it('should find ContactHost component', function() {
    console.log(ContactHost);
    expect(ContactHost).not.toBeNull();
  });

  it('should find Desc component', function() {
    console.log(Desc);
    expect(Desc).not.toBeNull();
  });


  it('should find Host component', function() {
    console.log(Host);
    expect(Host).not.toBeNull();
  });

  it('should find InfoCards component', function() {
    console.log(InfoCards);
    expect(InfoCards).not.toBeNull();
  });


});