export const moduleTemplate = "export default (input) => {}";

export const testTemplate = (part) => `import part${part} from './part${part}';

const testInput = undefined;

const testOutput = undefined;

test("part${part}", () => {
  expect(part${part}(testInput)).toBe(testOutput);
});`;
