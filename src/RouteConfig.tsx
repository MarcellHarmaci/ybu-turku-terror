import { BrowserRouter, Route, Routes } from "react-router"
import {
  PATH_ADMIN_EDITOR_NEWS,
  PATH_ADMIN_EDITOR_STANDINGS,
  PATH_ADMIN_HOME,
  PATH_GAME_LIST,
  PATH_HOME,
  PATH_NEWS,
  PATH_RULES,
  PATH_SIGN_UP,
  PATH_SIGN_UP_JUNIOR,
  PATH_STANDINGS,
  PATH_TEAMS,
} from "./consts"
import AdminLayout from "./layout/admin"
import VisitorLayout from "./layout/visitor"
import AdminHome from "./pages/admin/AdminHome"
import NewsEditor from "./pages/admin/news/NewsEditor"
import { StandingsUrlEditor } from "./pages/admin/standings/StandingsUrlEditor"
import GameList from "./pages/visitor/GameList"
import Home from "./pages/visitor/Home"
import JuniorSignUp from "./pages/visitor/JuniorSignup"
import News from "./pages/visitor/News"
import Rules from "./pages/visitor/Rules"
import SignUp from "./pages/visitor/Signup"
import Standings from "./pages/visitor/Standings"
import Teams from "./pages/visitor/Teams"

const RouteConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<VisitorLayout />}>
        <Route path={PATH_HOME} element={<Home />} />
        <Route path={PATH_RULES} element={<Rules />} />
        <Route path={PATH_SIGN_UP} element={<SignUp />} />
        <Route path={PATH_SIGN_UP_JUNIOR} element={<JuniorSignUp />} />

        <Route path={PATH_NEWS} element={<News />} />
        <Route path={PATH_TEAMS} element={<Teams />} />
        <Route path={PATH_GAME_LIST} element={<GameList />} />
        <Route path={PATH_STANDINGS} element={<Standings />} />
      </Route>

      <Route path={PATH_ADMIN_HOME} element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path={PATH_ADMIN_EDITOR_NEWS} element={<NewsEditor />} />
        <Route
          path={PATH_ADMIN_EDITOR_STANDINGS}
          element={<StandingsUrlEditor />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default RouteConfig
