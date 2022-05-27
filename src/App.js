import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import { AuthContext , FirebaseContext } from './store/Context';
import Post from './store/postDetails'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { useContext , useEffect } from 'react';

function App() {

  const { user , setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);


  useEffect(()=>{

    console.log(user);
    firebase.auth().onAuthStateChanged((user) => {

        setUser(user);

    })


  },[])

  return (
    <div>

      <BrowserRouter>

        <Post>

          <Route path="/" exact >
          <Home />
          </Route>

          <Route path="/view">
            <ViewPost />
          </Route> 


          </Post>

          <Route path="/signup">
            <Signup />
          </Route>            
          <Route path="/login">
            <Login />
          </Route> 
          <Route path="/create">
            <Create />
          </Route> 

      </BrowserRouter>



    </div>
  );
}

export default App;
