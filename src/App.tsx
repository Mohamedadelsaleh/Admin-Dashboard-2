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
            <Outlet />
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
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
