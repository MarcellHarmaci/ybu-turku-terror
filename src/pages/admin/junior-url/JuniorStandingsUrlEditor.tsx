import { UrlEditor } from "@/components/admin/url/UrlEditor"

export function JuniorStandingsUrlEditor() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl">Junior Standings CSV URL</div>
      <UrlEditor urlId="junior-standings" />
    </div>
  )
}
