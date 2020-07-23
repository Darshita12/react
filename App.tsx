import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Router from "react-router-dom";
import BookList from './components/BookList';
import { AddBook } from './components/AddBook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <AddBook/>
     <BookList /> 
     {/* <Router>
       <Route exact path="/" component={AddBook}/>
       <Route eaxct path="/view" component={BookList}/>
     </Router> */}
      </header>
    </div>
  );
}

export default App;
