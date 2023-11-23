//import logo from './logo.svg';
import './App.css';
//import Appbar from './Appbar';

import {Route,Routes} from 'react-router-dom';
import About from './About';
import Test from './testpage';
import Home from './Home';


function App() {
  return (

        <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/about" element={<About />} />
        <Route path= "/test" element={<Test />} />

        </Routes>
  
  );
}

export default App;
