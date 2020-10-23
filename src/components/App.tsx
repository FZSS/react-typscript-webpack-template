import * as React from 'react';
import { greet } from 'utils/GreetingUtils';

const App: React.FunctionComponent = () => {
  const text = greet('kevin')
  return (
    <p>{text}</p>
  )
};

export default App;

