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
import { QueryClientProvider,  QueryClient, useQuery } from "@tanstack/react-query";

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
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
