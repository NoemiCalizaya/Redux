import React from 'react'
import { MdCancel } from "react-icons/md";
import { useSelector } from 'react-redux';
import {
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { MainDashBoard } from './MainDashBoard';
import "./styles.css"
export const DashBoardComponent = ({ children, ...rest }) => {
    const {auth} = useSelector(state => state);
    const {user} = auth;
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
                    <li><Link to="/mainDashboard"><i className="fas fa-qrcode"></i>Dashboard</Link></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Shortcuts</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Overview</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Events</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>About</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Services</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Contact</a></li>
                </ul>
            </div>
            <section></section>
            <Switch>
                <Route path="/mainDashboard" component={MainDashBoard}/>
            </Switch>
        </>)
    );
};
