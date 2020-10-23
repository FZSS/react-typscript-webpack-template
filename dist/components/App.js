import * as React from 'react';
import { greet } from 'utils/GreetingUtils';
var App = function () {
    var text = greet('kevin');
    return (React.createElement("p", null, text));
};
export default App;
