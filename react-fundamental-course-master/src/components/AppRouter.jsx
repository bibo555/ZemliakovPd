import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                        exact={route.exact}
                    />
                ))
                : publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                        exact={route.exact}
                    />
                ))}
            <Route path="*" element={isAuth ? <Navigate to="/posts" /> : <Navigate to="/login" />} />
        </Routes>
    );
};

export default AppRouter;
