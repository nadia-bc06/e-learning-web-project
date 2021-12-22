import React from 'react'
import { useParams } from 'react-router-dom'
 
function withUseParamsHook(Component) {
    return function WrappedComponent (props) {
        const {maDanhMuc} = useParams();
        return <Component {...props} params={maDanhMuc}/>
    }
}

export default withUseParamsHook;
