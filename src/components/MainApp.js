import React from 'react'
import {Provider} from "react-redux"
import store from '../store/store'
import { RouterApp } from './RouterApp.js/RouterApp'

export const MainApp = () => {
    return (
        <Provider store = {store}>

            <RouterApp />

        </Provider>
    )
}
