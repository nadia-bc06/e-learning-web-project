import React from 'react'
import { useNavigate } from 'react-router-dom'
 
function withUseNavigateHook(Component) {
    return function WrappedComponent (props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate}/>
    }
}

export default withUseNavigateHook;
