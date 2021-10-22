import { types } from '../types/types';

export const authAsync = (username, password) => {
    return (dispatch) => {
        setTimeout(() => {
            if (username === "Pepito" && password === "1234") {
                const userData = {
                    id: new Date().getTime(), 
                    displayName: username, 
                    photo: ""
                };
                localStorage.setItem("user", JSON.stringify(userData));
                dispatch(auth(userData));
            } else {
                dispatch(error("Credenciales incorrectas"));
            }
        }, 100);
    };
};

export const authLogoutAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            localStorage.removeItem("user");
            dispatch(logout());
        }, 1000);
    }
};

export const auth = (user) => {
    return {
        type: types.authLogin,
        payload: user
    };
};

export const logout = () => {
    return {
        type: types.authLogout,
        payload: null,
    };
};

export const error = (msn) => {
    return {
        type: types.authError,
        payload: msn
    }
};