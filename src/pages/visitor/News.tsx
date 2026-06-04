import Alert from "@/components/custom/Alert"
import { useNews } from "@/service/news/useNews"
import { useTranslation } from "react-i18next"
import type { NewsItem } from "../admin/news/model/domain"
import { NewsArticle } from "./news/NewsArticle"

export function News() {
  const { t } = useTranslation()
  const { data: news, isLoading, error } = useNews()

  if (isLoading || !news) {
    return "Loading..."
  }

  return (
    <div className="flex flex-col gap-4">
      {error && <Alert type="error" title="Error" description={error} />}
      <div className="text-2xl font-semibold md:text-3xl">
        {t("news.title")}
      </div>
      <div className="flex flex-col gap-6">
        {news.map((article: NewsItem) => (
          <NewsArticle newsItem={article} className="shadow-xl" />
        ))}
      </div>
    </div>
  )
}

export default News
