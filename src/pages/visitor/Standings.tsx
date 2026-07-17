import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import Papa from "papaparse"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export function Standings() {
  const { t } = useTranslation()
  const [data, setData] = useState<string[][]>()
  // TODO steta for errors errors: ParseError[];

  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSL_qQhF1vYQUoSqQe_NAfLnaQYm39bGHFHnn9apFdulcHtEoIhOSfivZlmusW5ejtpvbczMqx2XjAB/pub?output=csv"

  useEffect(() => {
    Papa.parse<string[]>(csvUrl, {
      download: true,
      complete: function (results) {
        setData(results.data)
        // TODO set error state
      },
    })
  }, [csvUrl])

  if (!data) {
    return "Loading..."
  }

  return (
    <div className="flex flex-col gap-4">
      {/* TODO display error state */}
      {/* {error && <Alert type="error" title="Error" description={error} />} */}
      <div className="text-2xl font-semibold md:text-3xl">Standings</div>
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
