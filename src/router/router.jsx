import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root.jsx";
import About from "../pages/Home/About.jsx";
import Home from "../pages/Home/Home.jsx";
import ErrorPage from "../pages/Error/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
              path: "/",
              element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>
            },
        ],
    }
])

export default router