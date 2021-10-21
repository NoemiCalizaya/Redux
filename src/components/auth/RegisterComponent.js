import React from 'react'

export const RegisterComponent = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Register</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div class="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="username"/>

                            </div>
                            <div class="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="email" className="form-control" placeholder="email"/>

                            </div>
                            <div class="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="password"/>

                            </div>
                            <div className="form-group">
                                <div className="col-md-12 text-center">
                                    <input type="submit" value="Login" className="btn float-rigth login_btn" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
