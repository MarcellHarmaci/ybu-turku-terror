import { UrlEditor } from "@/components/admin/url/UrlEditor"

export function JuniorGameListUrlEditor() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl">Junior Game List CSV URL</div>
      <UrlEditor urlId="junior-game-list" />
    </div>
  )
}
