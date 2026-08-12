import CsvTable from "@/components/custom/CsvTable"
import { useTranslation } from "react-i18next"

function JuniorGameList() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold md:text-3xl">
        {t("junior.gameList.title")}
      </div>
      <div className="flex flex-col gap-6">
        <CsvTable urlId="junior-game-list" />
      </div>
    </div>
  )
}

export default JuniorGameList
