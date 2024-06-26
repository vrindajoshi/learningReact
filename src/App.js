import './App.css';
import Navbar from './Navbar';
import Home from './Home';


// functions must start with CAPITAL letters
function App() {

  const title = "welcome to my blog";
  const likes = 50;
  //const vrinda = {name: "vrinda", lastName: "joshi", age: 30};
  return (
    // main app injected into html file (actually coded in JSX, translated into HTML via babel), rendered by index.js
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
