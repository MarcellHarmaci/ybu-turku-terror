import { DataTable } from "@/components/custom/DataTable"
import { columns } from "./columns"
import { data } from "./mock-data"

export function News() {
  return (
    <div className="">
      <DataTable className="w-full" columns={columns} data={data} />
    </div>
  )
}

export default News
