import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useUrl } from "@/service/standings/useUrl"
import Papa from "papaparse"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export function Standings() {
  const { t } = useTranslation()
  const { url: csvUrl, isLoading } = useUrl()
  const [data, setData] = useState<string[][]>()
  // TODO state for errors: ParseError[];

  useEffect(() => {
    if (!csvUrl) {
      return
    }

    Papa.parse<string[]>(csvUrl, {
      download: true,
      complete: function (results) {
        setData(results.data)
        // TODO set error state
      },
    })
  }, [csvUrl])

  if (isLoading || !data) {
    return "Loading..."
  }

  return (
    <div className="flex flex-col gap-4">
      {/* TODO display error state */}
      {/* {error && <Alert type="error" title="Error" description={error} />} */}
      <div className="text-2xl font-semibold md:text-3xl">
        {t("standings.title")}
      </div>
      <div className="flex flex-col gap-6">
        <Table>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={`row-${rowIndex}`}>
                {row.map((cell, colIndex) => (
                  <TableCell key={`row-${rowIndex}-col-${colIndex}`}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Standings
