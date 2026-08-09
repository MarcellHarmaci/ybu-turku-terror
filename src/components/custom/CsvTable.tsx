import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useUrl } from "@/service/url/useUrl"
import Papa from "papaparse"
import { useEffect, useState } from "react"
import { Spinner } from "../ui/spinner"

interface CsvTableProps {
  urlId: string
}

export function CsvTable({ urlId }: CsvTableProps) {
  const { url: csvUrl, isLoading } = useUrl(urlId)
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
    return (
      <div className="flex flex-row items-center gap-2">
        <Spinner />
        {!data ? "Parsing..." : "Loading..."}
      </div>
    )
  }

  return (
    // TODO display error state
    // {error && <Alert type="error" title="Error" description={error} />}
    <Table>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow
            key={`row-${rowIndex}`}
            className={rowIndex % 2 === 1 ? "bg-muted/50" : undefined}
          >
            {row.map((cell, colIndex) => (
              <TableCell key={`row-${rowIndex}-col-${colIndex}`}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CsvTable
