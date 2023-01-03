import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const isLoggedIn = useSelector(state => state.persistedReducer.auth.isLoggedIn)
    let location = useLocation();

    if(!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;