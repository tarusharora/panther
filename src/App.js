import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './views/home'
import About from './views/home/about'
import Login from './views/authentication/login'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/login">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/login" component={Login} />
    </main>
  </div>
)

export default App;
