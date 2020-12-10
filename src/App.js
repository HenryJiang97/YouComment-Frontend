import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Home from './Home';
import User from './User/User'

function App() {
  return (
    // <div className="App">
    //   <Home/>
    // </div>
    <div className = "App">
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to={{
              pathname:'/',
              state: {
                page: ''
              }
            }}>Home</Link>
          </li>
          <li>
            <Link to="/user">Log In/Sign Out</Link>
          </li>
          <li>
            <Link to="/profile">User profile</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" render={() => <Home page="" />} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  );
}

export default App;
