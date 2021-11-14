import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <Continue />
      </header>
    
    </div>
  );
}


function Welcome() {
  return (
    <h1>Welcome to Runtown</h1>
  )
}

function Continue() {
  return (
    <button>Continue -></button>
  )
}
export default App;
