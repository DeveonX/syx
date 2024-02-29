import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

let Name = "SyX"
let titleMessages =  [
  "Welcome to my creative space.",
  "Where ideas come to life.",
  "Designing the future, pixel by pixel.",
  "Innovate. Create. Captivate.",
  "Turning dreams into digital reality.",
  "Crafting visual stories that resonate.",
  "Code meets creativity in every project.",
  "Inspired by passion, driven by precision.",
  "Explore the artistry.",
  "Where aesthetics meet functionality.",
  "Dedicated to the pursuit of digital excellence.",
  "Pixels with a purpose.",
  "Every project tells a unique story.",
  "Welcome to the intersection of form and function.",
  "In a world of zeros and ones, I create wonders.",
  "Designing tomorrow, today.",
  "Beyond boundaries, creating possibilities.",
  "Transforming concepts into captivating experiences.",
  "Let the pixels speak for themselves."
];

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
