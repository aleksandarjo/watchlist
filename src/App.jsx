import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/:id",
    element: <MovieDetail />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}>
        <AppLayout />
      </RouterProvider>
    </AuthProvider>
  );
};

export default App;
