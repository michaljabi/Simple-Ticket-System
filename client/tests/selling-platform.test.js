import React from 'react';
import ReactDOM from 'react-dom';
import SellingPlatformApp from '../src/sellplatform/SellingPlatformApp';
import renderer from 'react-test-renderer';



test('it renders the SellingPlatformApp without crashing', () => {

  const container = document.createElement('div');
  ReactDOM.render(<SellingPlatformApp />, container);
});


test('it matches SellingPlatformApp to snapshot', () => {

  const component = renderer.create(
    <SellingPlatformApp />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});