import CsvTable from "@/components/custom/CsvTable"
import { useTranslation } from "react-i18next"

function JuniorSchedule() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold md:text-3xl">
        {t("junior.schedule.title")}
      </div>
      <div className="flex flex-col gap-6">
        <CsvTable urlId="junior-schedule" />
      </div>
    </div>
  )
}

export default JuniorSchedule
