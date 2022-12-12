import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
{
    path: '/',
    element: <Home></Home>
},
{
    path: '/login',
    element: <Login></Login>
},
{
    path: '/signUp',
    element: <SignUp></SignUp>
},
    ]
    }
])