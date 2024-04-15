import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
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
    <RouterProvider router={router}>
      <AppLayout></AppLayout>
    </RouterProvider>
  );
};

export default App;
