import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { NewsItem } from "@/pages/admin/news/model/domain"

interface NewsArticleProps {
  newsItem: NewsItem
}

export function NewsArticle({ newsItem }: NewsArticleProps) {
  return (
    <Card>
      <CardHeader>{newsItem.title}</CardHeader>
      <CardContent
        className="flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: newsItem.content }}
      ></CardContent>
    </Card>
  )
}
