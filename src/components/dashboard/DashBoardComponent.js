import React from 'react'
import { MdCancel, MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { authLogoutAsync } from '../../actions/auth';
import "./styles.css"


export const DashBoardComponent = ({ children, ...rest }) => {
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (
        user == null? (<Redirect to="/Login"/>): (<>
            <input type="checkbox" id="check"/>
            <label htmlFor="check">
                <div className="fas fa-bars">
                    <MdCancel className="iconcolor"/>
                </div>
            </label>
            <div className="sidebar">
                <header>My App</header>
                <ul>
                    <li><Link to="/main">Dashboard</Link></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Shortcuts</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Overview</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Events</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>About</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Services</a></li>
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
            <section></section>
        </>)
    );
};
