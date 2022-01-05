import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { useState } from "react";


function App() {

  const [getLogin, setgetLogin] = useState([])
 console.log(getLogin);
let getLoginData=(loginData)=>{
   setgetLogin(...getLogin, loginData)

  }

  const [getUser, setgetUser] = useState([])
  console.log(getUser);
  let getUserData=(userData)=>{
    setgetUser(...getUser, userData)
  }

return (
    <Router>
    <div className="App">
    
      <Navbar />

      <Switch >
          <Route exact path='/login'>
            <Login getLoginData={getLoginData}/>
          </Route>
          <Route exact path='/signup'>
            <SignUp getUserData={getUserData}/>
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
