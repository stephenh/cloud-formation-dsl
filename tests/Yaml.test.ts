
import { Yaml } from '../src/Yaml';

it('should generate basic yaml', () => {
  const y = new Yaml();
  y.put('key', 'value');
  expect(y.output()).toMatchSnapshot();
});