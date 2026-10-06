import { BrowserRouter, Route, Routes } from "react-router"
import { PATHS } from "./consts"
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
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.RULES} element={<Rules />} />
        <Route path={PATHS.SIGN_UP} element={<SignUp />} />
        <Route path={PATHS.SIGN_UP_JUNIOR} element={<JuniorSignUp />} />

        <Route path={PATHS.TOURNAMENT.NEWS} element={<News />} />
        <Route path={PATHS.TOURNAMENT.TEAMS} element={<Teams />} />
        <Route path={PATHS.TOURNAMENT.GAME_LIST} element={<GameList />} />
        <Route path={PATHS.TOURNAMENT.SCHEDULE} element={<Schedule />} />
        <Route path={PATHS.TOURNAMENT.STANDINGS} element={<Standings />} />

        <Route path={PATHS.JUNIOR.HOME}>
          <Route index element={<Home />} />
          <Route path={PATHS.JUNIOR.GAME_LIST} element={<JuniorGameList />} />
          <Route path={PATHS.JUNIOR.SCHEDULE} element={<JuniorSchedule />} />
          <Route path={PATHS.JUNIOR.STANDINGS} element={<JuniorStandings />} />
        </Route>
      </Route>

      <Route path={PATHS.ADMIN.HOME} element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path={PATHS.ADMIN.NEWS} element={<NewsEditor />} />
        {/* Tournament */}
        <Route
          path={PATHS.ADMIN.TOURNAMENT.GAME_LIST}
          element={<GameListUrlEditor />}
        />
        <Route
          path={PATHS.ADMIN.TOURNAMENT.SCHEDULE}
          element={<ScheduleUrlEditor />}
        />
        <Route
          path={PATHS.ADMIN.TOURNAMENT.STANDINGS}
          element={<StandingsUrlEditor />}
        />
        {/* Junior Tournament */}
        <Route
          path={PATHS.ADMIN.JUNIOR.GAME_LIST}
          element={<JuniorGameListUrlEditor />}
        />
        <Route
          path={PATHS.ADMIN.JUNIOR.SCHEDULE}
          element={<JuniorScheduleUrlEditor />}
        />
        <Route
          path={PATHS.ADMIN.JUNIOR.STANDINGS}
          element={<JuniorStandingsUrlEditor />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default RouteConfig
