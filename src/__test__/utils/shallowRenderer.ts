/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-type-alias */
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = ShallowRenderer.createRenderer();

type Input = Parameters<typeof renderer.render>[0];
type Output = ReturnType<typeof renderer.getRenderOutput>;

export const shallowRender = (node: Input): Output => {
  renderer.render(node);
  return renderer.getRenderOutput();
};
