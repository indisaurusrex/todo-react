// import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
// configure({ adapter: new Adapter() });
Enzyme.configure({ adapter: new Adapter() });