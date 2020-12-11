import './App.css';
import { Link, Route, Switch } from "react-router-dom";

import Search from './Videos/Search';
import Profile from './User/Profile';
import User from './User/User';
import Home from './Home';
import Result from './Videos/Result';
import VideoList from './Videos/VideoList';
import Detail from './Videos/Detail';

function App() {
  return (
    <div className = "App">
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Sign in / Sign out</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/result" component={Result}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path='/login' component={User}></Route>
      </Switch>
    </div>
  );
}

export default App;
