import CsvTable from "@/components/custom/CsvTable"
import { useTranslation } from "react-i18next"

function Schedule() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold md:text-3xl">
        {t("schedule.title")}
      </div>
      <div className="flex flex-col gap-6">
        <CsvTable urlId="schedule" />
      </div>
    </div>
  )
}

export default Schedule
