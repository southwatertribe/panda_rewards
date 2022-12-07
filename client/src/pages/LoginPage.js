import React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

//Router 
import { useNavigate } from "react-router-dom";

//Material 
import {Container} from "@mui/material";

//Redux
import {useDispatch} from 'react-redux';
import { signedIn} from '../redux/jwtAuth';
import {userHandler} from '../utils/userHandler';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function handleGauth(res) {
        //User Info that just signedIn
        const userIdObject = jwt_decode(res.credential);
        console.log(userIdObject)


        //Acess token
        const token = res.credential
        
        //TODO CHECK IF USER EXISTS IN DB IN ROUTE BEFORE ADDING!
        //Calls api to send data into database IF NEVER DONE SO
        axios.post('http://localhost:3001/login', {
                data: userIdObject
        })
        
        //Update global state to logged in    
        dispatch(signedIn());
        //Add jwt to session storage for current session
        sessionStorage.setItem("accessJWT", token)

        //Update global state to have current user (invokes user action)
        dispatch(userHandler())
        //TO DO Create Refresh in local storage

        //Redirect
        navigate(
          "/dashboard"
        )

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
        <Container  maxWidth="sm" >
          <div>
            <h1>Hey log in to use the app</h1>
            <div id="signIn" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'}}></div>
          </div>
        </Container>
      );
}

export default LoginPage;