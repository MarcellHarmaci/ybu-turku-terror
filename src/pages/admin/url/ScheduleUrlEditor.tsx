import { UrlEditor } from "@/components/admin/url/UrlEditor"

export function ScheduleUrlEditor() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl">Schedule CSV URL</div>
      <UrlEditor urlId="schedule" />
    </div>
  )
}
