import { withPromise } from '../../../.storybook/noteHelpers';

const text = `
# Source code


~~~js
<code>AreaChart</code>
~~~
`;


export default withPromise(
  text,
  require.resolve('./../index')
);
