import { BrowserRouter, Route, Routes } from "react-router"
import {
  PATH_ADMIN_EDITOR_GAME_LIST,
  PATH_ADMIN_EDITOR_NEWS,
  PATH_ADMIN_EDITOR_SCHEDULE,
  PATH_ADMIN_EDITOR_STANDINGS,
  PATH_ADMIN_HOME,
  PATH_ADMIN_JUNIOR_EDITOR_GAME_LIST,
  PATH_ADMIN_JUNIOR_EDITOR_SCHEDULE,
  PATH_ADMIN_JUNIOR_EDITOR_STANDINGS,
  PATH_GAME_LIST,
  PATH_HOME,
  PATH_JUNIOR,
  PATH_JUNIOR_GAME_LIST,
  PATH_JUNIOR_SCHEDULE,
  PATH_JUNIOR_STANDINGS,
  PATH_NEWS,
  PATH_RULES,
  PATH_SCHEDULE,
  PATH_SIGN_UP,
  PATH_SIGN_UP_JUNIOR,
  PATH_STANDINGS,
  PATH_TEAMS,
} from "./consts"
import AdminLayout from "./layout/admin"
import VisitorLayout from "./layout/visitor"
import AdminHome from "./pages/admin/AdminHome"
import { JuniorGameListUrlEditor } from "./pages/admin/junior-url/JuniorGameListUrlEditor"
import { JuniorScheduleUrlEditor } from "./pages/admin/junior-url/JuniorScheduleUrlEditor"
import { JuniorStandingsUrlEditor } from "./pages/admin/junior-url/JuniorStandingsUrlEditor"
import NewsEditor from "./pages/admin/news/NewsEditor"
import { GameListUrlEditor } from "./pages/admin/url/GameListUrlEditor"
import { ScheduleUrlEditor } from "./pages/admin/url/ScheduleUrlEditor"
import { StandingsUrlEditor } from "./pages/admin/url/StandingsUrlEditor"
import GameList from "./pages/visitor/GameList"
import Home from "./pages/visitor/Home"
import JuniorSignUp from "./pages/visitor/JuniorSignup"
import News from "./pages/visitor/News"
import Rules from "./pages/visitor/Rules"
import Schedule from "./pages/visitor/Schedule"
import SignUp from "./pages/visitor/Signup"
import Standings from "./pages/visitor/Standings"
import Teams from "./pages/visitor/Teams"
import JuniorGameList from "./pages/visitor/junior/JuniorGameList"
import JuniorSchedule from "./pages/visitor/junior/JuniorSchedule"
import JuniorStandings from "./pages/visitor/junior/JuniorStandings"

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
        <Route path={PATH_SCHEDULE} element={<Schedule />} />
        <Route path={PATH_STANDINGS} element={<Standings />} />

        <Route path={PATH_JUNIOR}>
          <Route index element={<Home />} />
          <Route path={PATH_JUNIOR_GAME_LIST} element={<JuniorGameList />} />
          <Route path={PATH_JUNIOR_SCHEDULE} element={<JuniorSchedule />} />
          <Route path={PATH_JUNIOR_STANDINGS} element={<JuniorStandings />} />
        </Route>
      </Route>

      <Route path={PATH_ADMIN_HOME} element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path={PATH_ADMIN_EDITOR_NEWS} element={<NewsEditor />} />
        {/* Tournament */}
        <Route
          path={PATH_ADMIN_EDITOR_GAME_LIST}
          element={<GameListUrlEditor />}
        />
        <Route
          path={PATH_ADMIN_EDITOR_SCHEDULE}
          element={<ScheduleUrlEditor />}
        />
        <Route
          path={PATH_ADMIN_EDITOR_STANDINGS}
          element={<StandingsUrlEditor />}
        />
        {/* Junior Tournament */}
        <Route
          path={PATH_ADMIN_JUNIOR_EDITOR_GAME_LIST}
          element={<JuniorGameListUrlEditor />}
        />
        <Route
          path={PATH_ADMIN_JUNIOR_EDITOR_SCHEDULE}
          element={<JuniorScheduleUrlEditor />}
        />
        <Route
          path={PATH_ADMIN_JUNIOR_EDITOR_STANDINGS}
          element={<JuniorStandingsUrlEditor />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default RouteConfig
