
import { Yaml } from '../src/Yaml';

it('should generate basic yaml', () => {
  const y = new Yaml();
  y.put('key', 'value');
  expect(y.output()).toMatchSnapshot();
});

it('should generate two lines', () => {
  const y = new Yaml();
  y.put('key1', 'value1');
  y.put('key2', 'value2');
  expect(y.output()).toMatchSnapshot();
});

it('should generate a child', () => {
  const y = new Yaml();
  y.put('key1', 'value1');
  y.push('key2');
  y.put('child1', 'value1');
  y.pop();
  expect(y.output()).toMatchSnapshot();
});