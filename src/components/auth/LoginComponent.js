import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { MdPersonPin, MdVpnKey } from 'react-icons/md';
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';
import { authAsync } from '../../actions/auth';
import { useDispatch } from 'react-redux';

export const LoginComponent = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);
    const { user, msnerror } = auth;
    const [form, handlerChangeForm, handlerResetForm] = useForm({
        username: "",
        password: ""
    });
    const {username, password} = form;
    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(authAsync(username, password));
    };
    return (
    <>
        {user == null? (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handlerSubmit}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <MdPersonPin />
                                    </span>
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="username" 
                                    autoComplete="off"
                                    name="username" 
                                    value={username} 
                                    onChange={handlerChangeForm}
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <MdVpnKey />
                                    </span>
                                </div>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="password" 
                                    autoComplete="off"
                                    name="password" 
                                    value={password} 
                                    onChange={handlerChangeForm}
                                />
                            </div>
                            <div>{msnerror}</div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" /> Remember me
                            </div>
                            <div className="form-group">
                                <div className="col-md-12 text-center">
                                    <input type="submit" value="Login" className="btn float-rigth login_btn" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<Link to="/register">Sign Up</Link>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (<Redirect to="/Dashboard"/>)}
    </>
    );
};
