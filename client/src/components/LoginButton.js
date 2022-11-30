import React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

//Redux
import {useDispatch} from 'react-redux';

function LoginButton() {
    
    function handleGauth(res) {
        const userIdObject = jwt_decode(res.credential);
        const token = res 
        //TODO CHECK IF USER EXISTS IN DB IN ROUTE BEFORE ADDING!ffd
        try {
          

          axios.post('http://localhost:3001/login', {
                  data: userIdObject
          })
          .then(function (res) {
              console.log(res)
          })
          .catch(function (err){
            console.log(err)
          })
        
        } catch (error) {
          
        }
      
        
        console.log(token)
        console.log(userIdObject);
      }
    
      useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id:"208777898012-ebhupaig1q3stkudthlb4ck237fsjuao.apps.googleusercontent.com",
          callback: handleGauth
        });
        google.accounts.id.renderButton(
          document.getElementById("signIn"),
          { theme: "outline", size: "small"}
        );
        google.accounts.id.prompt();
      }, []);
      return (
        <div className="App">
          <div id="signIn"></div>
          
        </div>
      );
}

export default LoginButton;