import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

let Name = "SyEevee"
 let titleMessages = ["Hello, I'm SyEevee", "I created this site!"]

function App() {
  return (
    <div className="App">
      <Sidebar Name={Name}/>
      <div className="rightSide">
        <Home Name="SyEevee" titleMessages={titleMessages} />
      </div>
    </div>
  );
}

export default App;
