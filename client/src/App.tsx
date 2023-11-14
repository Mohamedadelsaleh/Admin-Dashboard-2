import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import './styles/global.scss'
import User from "./pages/User/User";
import Product from "./pages/Product/Product";
import { QueryClientProvider,  QueryClient } from "@tanstack/react-query";
import CommingSoon from "./components/CommingSoon/CommingSoon";

const queryClient = new QueryClient();

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/users/:id',
          element: <User />
        },
        {
          path: '/products/:id',
          element: <Product />
        },
        {
          path: '/orders',
          element: <CommingSoon />
        },
        {
          path: '/posts',
          element: <CommingSoon />
        },
        {
          path: '/notes',
          element: <CommingSoon />
        },
        {
          path: '/forms',
          element: <CommingSoon />
        },
        {
          path: '/calendar',
          element: <CommingSoon />
        },
        {
          path: '/settings',
          element: <CommingSoon />
        },
        {
          path: '/backups',
          element: <CommingSoon />
        },
        {
          path: '/logs',
          element: <CommingSoon />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
