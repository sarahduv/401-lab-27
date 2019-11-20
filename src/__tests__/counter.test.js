import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing our Counter component', () => {
  it('Counter renders', () => {
    let app = mount(<Counter />);
    let button = app.find('button');
    expect(button).toBeDefined();
    expect(app.state('count')).toBe(0);
  });

  it('render correctly to the DOM', () => {
    const renderTree = renderer.create(<Counter />).toJSON();
    expect(renderTree).toMatchSnapshot();
  });

  it('Counter changes state on Click', () => {
    let app = mount(<Counter />);
    let button = app.find('.up');
    button.simulate('click');
    expect(app.state('count')).toBe(1);
  });
});
