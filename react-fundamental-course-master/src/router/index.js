import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    { path: '/about', element: <About />, index: true },
    { path: '/posts', element: <Posts />, index: true },
    { path: '/posts/:id', element: <PostIdPage />, index: true },
];

export const publicRoutes = [
    { path: '/login', element: <Login />, index: true },
];

