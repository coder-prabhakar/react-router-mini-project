// React
import React, { useEffect } from 'react'
// Redux
import { useSelector } from "react-redux";
// Router
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ComponentName}) {
    const loginStatus = useSelector((state) => state.userStatus );
    const navigate = useNavigate()

    useEffect(()=>{
        if(!loginStatus){
            navigate('/login')
        }
    })

  return <ComponentName />
}

export default ProtectedRoute;