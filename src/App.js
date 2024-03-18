//import logo from './logo.svg';
import './App.css';// importing css file called App.css
//import Appbar from './Appbar';

import {Route,Routes} from 'react-router-dom';// importing functions/variables from react library called react-router-dom
import About from './About';// importing the function About from About.js file
import Test from './Background';// Importing the function Test from Background.js file
import Home from './Home';// Importing the function Home from Home.js file
import Awareness from './AIResources';// Importing the function Awareness from TestPage2.js file. This page is the AI resources page but due to errors when chaanging names, the original file names stayed
import Showcase from './showcase';// Importing the function Showcase from showcase.js file
import Awareness2 from './Awareness';// Importing the function Awarness2 from Awareness.js file

//This function is used to link pages to together to us within a navbar. This allows react websites to have multiple pages
function App() {
  return (

        <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/about" element={<About />} />
        <Route path= "/background" element={<Test />} />
        <Route path= "/AIResources" element={<Awareness />} />
        <Route path= "/showcase" element={<Showcase />} />
        <Route path= "/Awareness" element={<Awareness2 />} />

        </Routes>
  
  );
}

export default App;
