import { BrowserRouter, Route, Routes } from "react-router"
import { PATH_HOME, PATH_SIGNUP } from "./consts"
import AdminLayout from "./layout/admin"
import VisitorLayout from "./layout/visitor"
import AdminHome from "./pages/admin/Home"
import Home from "./pages/visitor/Home"
import Signup from "./pages/visitor/Signup"

const RouteConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<VisitorLayout />}>
        <Route path={PATH_HOME} element={<Home />} />
        <Route path={PATH_SIGNUP} element={<Signup />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default RouteConfig
