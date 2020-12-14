import './App.css';
import { Route, Switch } from "react-router-dom";

import Search from './Videos/Search';
import Profile from './User/Profile';
import User from './User/User';
import UserStatus from './UserStatus';
import Home from './Home';
import Result from './Videos/Result';

import Detail from './Videos/Detail';
import Edit from './User/Edit';
import {Navbar, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className = "App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Sign in / Sign out</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Navbar.Collapse className="navbar-nav ml-auto">
            <Navbar.Text>
              <UserStatus />
            </Navbar.Text>
          </Navbar.Collapse>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile}></Route>
        <Route path='/edit' component={Edit}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/result" component={Result}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path='/login' component={User}></Route>
      </Switch>
    </div>
  );
}

export default App;
