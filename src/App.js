//import logo from './logo.svg';
import './App.css';
//import Appbar from './Appbar';

import {Route,Routes} from 'react-router-dom';
import About from './About';
import Test from './Background';
import Home from './Home';
import Awareness from './TestPage2';
import Showcase from './showcase';
import Awareness2 from './Awareness';


function App() {
  return (

        <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/about" element={<About />} />
        <Route path= "/background" element={<Test />} />
        <Route path= "/recommendations" element={<Awareness />} />
        <Route path= "/showcase" element={<Showcase />} />
        <Route path= "/Awareness" element={<Awareness2 />} />

        </Routes>
  
  );
}

export default App;
