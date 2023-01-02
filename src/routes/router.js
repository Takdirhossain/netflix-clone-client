import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import Watch from "../Pages/watch/Watch";
const usre = true;
const router = createBrowserRouter([
  { path: "/", element: usre ? <Home /> : <Register /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },

  { path: "/movie", element: <Home type="Movie" /> },
  { path: "/series", element: <Home type="Series" /> },
  { path: "/watch", element: <Watch /> },
]);
export default router;
