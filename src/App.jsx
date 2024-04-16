import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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

// key 1dfd87fdbfcdf44ed782a896d8e18f44
// access eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGZkODdmZGJmY2RmNDRlZDc4MmE4OTZkOGUxOGY0NCIsInN1YiI6IjY2MTk0NDJiNGRhM2Q0MDE2MjkxYzk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cVBMt0B7CU6519zdKBUyRSOh27pbN4qx4qhvOh3L4U8

const App = () => {
  return (
    <RouterProvider router={router}>
      <AppLayout></AppLayout>
    </RouterProvider>
  );
};

export default App;
