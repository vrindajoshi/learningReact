import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';



// functions must start with CAPITAL letters
function App() {

  const title = "welcome to my blog";
  const likes = 50;
  //const vrinda = {name: "vrinda", lastName: "joshi", age: 30};
  return (
    // main app injected into html file (actually coded in JSX, translated into HTML via babel), rendered by index.js
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blog/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
