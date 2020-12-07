import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    // <div className="App">
    //   <Home/>
    // </div>
    <div className = "App">
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log In/Sign Out</Link>
          </li>
          <li>
            <Link to="/profile">User profile</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
