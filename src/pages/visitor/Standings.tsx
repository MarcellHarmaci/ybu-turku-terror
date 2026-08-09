import CsvTable from "@/components/custom/CsvTable"
import { useTranslation } from "react-i18next"

export function Standings() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold md:text-3xl">
        {t("standings.title")}
      </div>
      <div className="flex flex-col gap-6">
        <CsvTable urlId="standings" />
      </div>
    </div>
  )
}

export default Standings
