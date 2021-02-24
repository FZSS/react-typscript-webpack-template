const Enzyme = require('enzyme');
const Adpater = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adpater() });
