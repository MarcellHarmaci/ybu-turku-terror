import CsvTable from "@/components/custom/CsvTable"
import { useTranslation } from "react-i18next"

function JuniorStandings() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold md:text-3xl">
        {t("junior.standings.title")}
      </div>
      <div className="flex flex-col gap-6">
        <CsvTable urlId="junior-standings" />
      </div>
    </div>
  )
}

export default JuniorStandings
