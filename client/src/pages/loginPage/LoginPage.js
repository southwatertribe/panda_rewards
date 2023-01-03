import React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

//Router 
import { useNavigate } from "react-router-dom";

//Styles
import '../loginPage/login.css'

//Assets
import Mascot from '../../assets/panda-logo.png'

//Redux
import {useDispatch} from 'react-redux';
import { signedIn} from '../../redux/jwtAuth';
import {userHandler} from '../../utils/userHandler';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const  handleGauth =  async (res) => {
        //User Info that just signedIn
        const userIdObject = jwt_decode(res.credential);

        //Acess token
        const token = res.credential
        
        
        // //TODO CHECK IF USER EXISTS IN DB IN ROUTE BEFORE ADDING!
        // Get user to check if they exist 
        let user = await axios.get("https://panda-backend.herokuapp.com/login/getUser/:email", {
            params: {
                email: userIdObject['email']
            }
        })

       
        console.log()


        if (Object.keys(user.data).length === 0) {
            //Calls api to send data into database IF NEVER DONE SO
            axios.post('https://panda-backend.herokuapp.com/login', {
                      data: userIdObject
            })
        } 
        
       

        
        
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
        
          <div className="main-login-card">
            <h1>Log In To Start Earning</h1>
             <div className="minecraft"><h4>Its a recession! You need it!</h4></div>
            <div style={{height: "100", width: "100", display: 'flex', alignItems: 'center',
              justifyContent: 'center'}}><img src={Mascot} alt="Mascot" width="300"  /></div>
            
            <div id="signIn" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0px',
              marginTop: '100px'}}></div>
          </div>
       
      );
}

export default LoginPage;