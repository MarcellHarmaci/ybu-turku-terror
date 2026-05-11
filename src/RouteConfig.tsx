import { BrowserRouter, Route, Routes } from "react-router"
import {
  PATH_HOME,
  PATH_RULES,
  PATH_SIGN_UP,
  PATH_SIGN_UP_JUNIOR,
  PATH_TEAMS,
} from "./consts"
import AdminLayout from "./layout/admin"
import VisitorLayout from "./layout/visitor"
import AdminHome from "./pages/admin/AdminHome"
import Home from "./pages/visitor/Home"
import Rules from "./pages/visitor/Rules"
import SignUp from "./pages/visitor/Signup"

const RouteConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<VisitorLayout />}>
        <Route path={PATH_HOME} element={<Home />} />
        <Route path={PATH_RULES} element={<Rules />} />
        <Route path={PATH_SIGN_UP} element={<SignUp />} />
        <Route path={PATH_SIGN_UP_JUNIOR} element={<SignUp />} />
        <Route path={PATH_TEAMS} element={<></>} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default RouteConfig
