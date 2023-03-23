import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children, props }) => {
    console.log(props, "ProtectedRoute", children);
    const products = useSelector((state) => state.cart.cart);
    let user = localStorage.getItem("user");
    if (user) user = JSON.parse(user);
    if (children.props.admin && !user.admin) {
        return <Navigate to="/" replace />
    }
    if (children.props.checkCart) {
        if (!(products && products.length)) {
            return <Navigate to="/Products" replace />
        }
    }

    if (!user) {
        return <Navigate to="/signin" replace />
    }
    return children

};

export default ProtectedRoute;