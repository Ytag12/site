import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import{authRoutes, publicRoutes} from "../routes";
import Main from '../pages/main';
import AddForum from "../pages/AddForum";
import { MAIN_ROUTE } from '../consts/consts';
import {Context} from "../index";
//import {BrowserRouter as Router, Route, Link, Routes, Redirect, Switch} from 'react-router-dom';

const AppRouter = () => {
    const {user} = useContext(Context)
    return(
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key = {path} path={path} element={<Component />} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key = {path} path={path} element={<Component />} exact/>
            )}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    )
}

export default AppRouter;