import Alert from "@/components/custom/Alert"
import { DataTable } from "@/components/custom/DataTable"
import { columns } from "./columns"
import { useNews } from "./hooks/useNews"

export function News() {
  const { data: news, isLoading, error } = useNews()

  return (
    <div className="flex flex-col gap-4">
      {error && <Alert type="error" title="Error" description={error} />}
      <DataTable className="w-full" columns={columns} data={news ?? []} />
    </div>
  )
}

export default News
