import toast from "@/components/custom/toast"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useSaveUrl } from "@/service/url/useSaveUrl"
import { useUrl } from "@/service/url/useUrl"
import { useEffect, useState } from "react"

export function StandingsUrlEditor() {
  const { url: savedUrl, isLoading } = useUrl("standings")
  const { save, loading: isSaving, success, error } = useSaveUrl()
  const [url, setUrl] = useState<string | undefined>(savedUrl)

  useEffect(() => {
    if (success) {
      toast.success("URL saved successfully")
    }
  }, [success])

  useEffect(() => {
    if (error) {
      toast.error("Failed to save URL")
    }
  }, [error])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Field>
        <FieldLabel htmlFor="standings-url">
          Google Sheet URL to display
        </FieldLabel>
        <Input
          id="standings-url"
          className="shadow-sm"
          defaultValue={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <FieldDescription>
          You can acquire an appropriate URL from Google Drive by following
          these steps:
          <br />
          1. Open your Google Sheet table that you'd like to display.
          <br />
          2. "File {">"} Share {">"} Publish to web.
          <br />
          3. Select "Entire document" and "Comma-separated values (.csv)".
          <br />
          4. Copy the link and paste
        </FieldDescription>
      </Field>
      <Button disabled={!url || isSaving} onClick={() => url && save(url)}>
        Save
      </Button>
    </>
  )
}
