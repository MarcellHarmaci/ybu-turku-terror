import { UrlEditor } from "@/components/admin/url/UrlEditor"

export function GameListUrlEditor() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl">Game List CSV URL</div>
      <UrlEditor urlId="game-list" />
    </div>
  )
}
