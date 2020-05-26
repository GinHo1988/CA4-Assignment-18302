import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import required components
import CreateBook from './CreateBook';
import EditBook from './EditBook';
import UserList from './UserList';

// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={UserList}/>
        {/*pass the id through the EditUser component*/}
        <Route path="/edit-user/:id" component={EditBook}/>
        {/*set the path to create a new user to CreateUser component*/}
        <Route path="/create-user" component={CreateBook}/>
      </div>
    </HashRouter>
  );
};

export default App;
