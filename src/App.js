import logo from './logo.svg';
import './App.css';
import Appbar from './Appbar';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <title>The Undercover Project</title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <strong>The Undercover Project</strong>
        <p>
          Revealing the truth behind Artificial Intelligence within Social Media Content/Platforms
        </p>
    
      </header>
      <footer>©The Undercover Project - 2024</footer>
    </div>
  );
}

export default App;
