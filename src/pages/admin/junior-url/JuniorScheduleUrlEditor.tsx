import { UrlEditor } from "@/components/admin/url/UrlEditor"

export function JuniorScheduleUrlEditor() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl">Junior Schedule CSV URL</div>
      <UrlEditor urlId="junior-schedule" />
    </div>
  )
}
