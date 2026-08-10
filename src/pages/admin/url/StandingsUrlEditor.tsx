import { UrlEditor } from "@/components/admin/url/UrlEditor"

export function StandingsUrlEditor() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl">Standings CSV URL</div>
      <UrlEditor urlId="standings" />
    </div>
  )
}
