//Redux action for userslice
import { getUserSuccess } from "../redux/userSlice";
import jwt_decode from "jwt-decode";
import axios from "axios";

// const getAUser = (email) => {
//     return new Promise(async (resolve,reject)=>{
//         try {
//             const res = await axios.get("http://localhost:3001/login/getUser", {
//                 params: {
//                     email: email
//                 }
//             })
//             resolve(res.data)
//         } catch (error) {
            
//         }
//     })
// }

export const userHandler = () => async (dispatch) => {

    try {
        //Get session jwt
        const accessToken = sessionStorage.getItem("accessJWT")
        const email = jwt_decode(accessToken)['email']
        
        //Get user info from db to update current state
        let user = await axios.get("http://localhost:3001/login/getUser/:email", {
            params: {
                email
            }
        })
        
        user = user.data.Item
        dispatch(getUserSuccess(user))        
    } catch (error) {
        console.log(error)        
    }
        
}