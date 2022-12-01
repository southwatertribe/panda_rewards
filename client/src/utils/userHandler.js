//Redux action for userslice
import { getUserSuccess } from "../redux/userSlice";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const userHandler = () => (dispatch) => {

    try {
        //Get session jwt
        const accessToken = sessionStorage.getItem("accessJWT")
        const email = jwt_decode(accessToken)['email']
        
        //Get user info from db to update current state
        let user = axios.get("http://localhost:3001/login/getUser", {
            params: {
                email: email
            }
        })

        
        
        //dispatch(getUserSuccess())        
    } catch (error) {
        console.log(error)        
    }
        
}