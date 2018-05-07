
import { Yaml } from '../src/Yaml';

it('should generate basic yaml', () => {
  const o = { key: 'value' };
  const y = new Yaml();
  expect(y.output(o)).toMatchSnapshot();
});

it('should generate two lines', () => {
  const o = { key1: 'value1', key2: 'value2' };
  const y = new Yaml();
  expect(y.output(o)).toMatchSnapshot();
});

it('should generate a child', () => {
  const o = {
    key1: 'value1',
    key2: {
      child1: 'value1'
    }
  };
  const y = new Yaml();
  expect(y.output(o)).toMatchSnapshot();
});