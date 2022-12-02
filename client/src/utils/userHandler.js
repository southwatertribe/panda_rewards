//Redux action for userslice
import { getUserSuccess } from "../redux/userSlice";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { json } from "react-router-dom";

const getAUser = (email) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const res = await axios.get("http://localhost:3001/login/getUser", {
                params: {
                    email: email
                }
            })
            resolve(res.data)
        } catch (error) {
            
        }
    })
}

export const userHandler = () => async (dispatch) => {

    try {
        //Get session jwt
        const accessToken = sessionStorage.getItem("accessJWT")
        const email = jwt_decode(accessToken)['email']
        
        //Get user info from db to update current state
        let user = await axios.get("http://localhost:3001/login/getUser", {
            params: {
                email: email
            }
        })
        // let user =  await getAUser(email)
        user = user.data.Items[0]
        console.log(user)
        
        dispatch(getUserSuccess(user))        
    } catch (error) {
        console.log(error)        
    }
        
}