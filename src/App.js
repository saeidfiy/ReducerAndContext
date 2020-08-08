import React from 'react';
import './App.css';
import BookContextProvider from "./context/bookContext"
import NavBar from "./component/navBar"
import BookList from './component/BookList';
import NewBook from './component/NewBook';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar/>
        <BookList />
        <NewBook />
      </BookContextProvider>
    </div>
  );
}

export default App;
