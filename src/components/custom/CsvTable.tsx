import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useUrl } from "@/service/url/useUrl"
import Papa from "papaparse"
import { useEffect, useState } from "react"
import { Spinner } from "../ui/spinner"
import Alert from "./Alert"

interface CsvTableProps {
  urlId: string
}

export function CsvTable({ urlId }: CsvTableProps) {
  const { url: csvUrl, isLoading, error: urlFetchError } = useUrl(urlId)
  const [data, setData] = useState<string[][]>()
  const [csvError, setCsvError] = useState<"download" | "parse" | undefined>()

  const errorDescription = urlFetchError
    ? "Failed to fetch CSV URL."
    : csvError === "download"
      ? "Failed to load CSV data."
      : csvError === "parse"
        ? "Failed to parse CSV data. The CSV format is incorrect."
        : "An unknown error occurred."

  useEffect(() => {
    if (!csvUrl) {
      return
    }

    Papa.parse<string[]>(csvUrl, {
      download: true,
      error: () => setCsvError("download"),
      complete: (results) => {
        if (results.errors.length > 0) {
          setCsvError("parse")
        }
        setData(results.data)
      },
    })
  }, [csvUrl])

  if (isLoading) {
    return (
      <div className="flex flex-row items-center gap-2">
        <Spinner />
        Loading...
      </div>
    )
  }

  if (urlFetchError || csvError) {
    return <Alert type="error" title="Error" description={errorDescription} />
  }

  return (
    <>
      <Table>
        <TableBody>
          {(data ?? []).map((row, rowIndex) => (
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
    </>
  )
}

export default CsvTable
