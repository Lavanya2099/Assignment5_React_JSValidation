import React from 'react'

import { useState } from "react";
import { withRouter } from 'react-router-dom'

function Login(props) {
    const [userData, setuserData] = useState({
        email:'',
        password:''
      
})

const [emailError, setemailError] = useState("")
const validateEmail=()=>{
    if(userData.email){
        let regex = /^\S+@\S+$/;
        if(regex.test(userData.email)){
            setemailError("");
            return true;
        }
        else{
            setemailError("enter valid email-Id");
        }}
        else{
            setemailError("enter email-ID");
        }
        return false; 
};


const [passwordError, setpasswordError] = useState("")
const validatePassword=()=>{
    if(userData.password){
        let regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/;
        if(regex.test(userData.password)){
            setpasswordError("");
            return true;
        }
        else{
            setpasswordError("Password should contains atleast 6 charaters and containing uppercase,lowercase and numbers");
        }}
        else{
            setpasswordError("enter password");
        }
        return false; 
};


let updateUserData=(event)=>{
    // event.preventDefault();
    setuserData({
        ...userData,
        [event.target.name]:event.target.value,
    })
}


let saveData=(event)=>{
  
    validateEmail();
    validatePassword();
  
    if(validateEmail()&& validatePassword()){
        props.getUserData(userData)
        // event.preventDefault();
        //clearing the form
        setuserData({
            email:'',
            password:''
           
        });
    }
   
};


    let navigateToSignUp=()=>{
        // console.log(props);
        props.history.push('/signup')
       }
    return (
        <div>
            <h1>Login</h1>
            <div className='container'>
            
            <div className="mb-3">
                    <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    value={userData.email}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                {emailError&&<div className="some">{emailError}</div>}
                </div>
                <div className="mb-3">
                    <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                {passwordError&&<div className="some">{passwordError}</div>}
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={saveData}>Login</button>
            </div>
            <h4 style={{cursor:'pointer'}} onClick={navigateToSignUp}>Don't have an account? Signup here !</h4>
        </div>
    )
}

export default withRouter(Login)