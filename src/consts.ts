export const PATHS = {
  HOME: "/",
  RULES: "/rules",
  SIGN_UP: "/sign-up",
  SIGN_UP_JUNIOR: "/sign-up-junior",
  TOURNAMENT: {
    NEWS: "/news",
    TEAMS: "/teams",
    GAME_LIST: "/game-list",
    SCHEDULE: "/schedule",
    STANDINGS: "/standings",
  },
  JUNIOR: {
    HOME: "/junior",
    GAME_LIST: "/junior/game-list",
    SCHEDULE: "/junior/schedule",
    STANDINGS: "/junior/standings",
  },
  ADMIN: {
    HOME: "/admin",
    NEWS: "/admin/news",
    TOURNAMENT: {
      GAME_LIST: "/admin/tournament/game-list",
      SCHEDULE: "/admin/tournament/schedule",
      STANDINGS: "/admin/tournament/standings",
    },
    JUNIOR: {
      GAME_LIST: "/admin/junior/game-list",
      SCHEDULE: "/admin/junior/schedule",
      STANDINGS: "/admin/junior/standings",
    },
    CMS: {
        PAGES: "/admin/page"
    }
  },
}

export const DATE_FORMAT = new Intl.DateTimeFormat("fi-FI")
