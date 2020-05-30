import React from 'react';
import ComponentDetail from './components/ComponentDetail';
import PostsComponent from './components/PostsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className = "container">
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
          <Link to = "/" className = "navbar-brand">Posts</Link>
          <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarNavAltMarkup" aria-controls = "navbarNavAltMarkup" aria-expanded = "false" aria-label = "Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
          </button>
          <div className = "collapse navbar-collapse" id = "navbarNavAltMarkup">
            <div className = "navbar-nav">
              <NavLink to = "/" className = " nav-item nav-link" activeClassName = "active"> Welcome! </NavLink>
              <NavLink to = "/posts" className = "nav-item nav-link" activeClassName = "active">List</NavLink>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path = "/" exact>
            <h1>Welcome</h1>
            <br/>
            <h4>Carlos Tomas Garcia Martinez 320605</h4>
          </Route> 
          <Route path = "/posts" exact>
            <PostsComponent/>
          </Route>
          <Route path = "/posts/:id" exact>
            <ComponentDetail/>
          </Route>
        </Switch>  
      </div>
    </Router>   
  );
}


export default App;
