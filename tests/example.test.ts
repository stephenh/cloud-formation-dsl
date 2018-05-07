
import { resources } from '../src/resources';
import '../src/example';
import { Yaml } from '../src/Yaml';

it('should have a few resources', () => {
  expect(resources.length).toBe(5);
  const y = new Yaml();
  const output = {};
  resources.forEach(resource => {
    const [name, type, props] = resource
    output[name] = {
      Type: type,
      Properties: props
    }
  })
  expect(y.output(output)).toMatchSnapshot();
});