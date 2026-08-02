import { useTranslation } from "react-i18next"

export function Teams() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold md:text-3xl">
        {t("teams.title")}
      </div>
      <div>{t("teams.comingSoon")}</div>
    </div>
  )
}

export default Teams
