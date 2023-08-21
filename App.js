import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import Footer from './Footer';
import Login from './Login';
import SignUp from './SignUp';
import Header1 from './Header1';
import LogOut from './LogOut';
function App() {
  return (
    <div className="app">
    <Router>
     
      
      
      <Switch>
          <Route path="/login">
          <Header1 />
          <Login/>
          </Route>
          <Route path="/logout">
          <Header/>
          <LogOut/>
          </Route>
          <Route path="/signup">
          <Header1 />
          <SignUp/>
          </Route>
        <Route path="/search">
        <Header />
          <SearchPage />
        </Route>
        <Route path="/home">
        <Header />
          <Home/>
        </Route>
        
          
        
      </Switch>
      <Footer/>
      
    </ Router>
  </div>
  );
}

export default App;
