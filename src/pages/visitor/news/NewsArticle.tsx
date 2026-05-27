import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { NewsItem } from "@/pages/admin/news/model/domain"

interface NewsArticleProps {
  newsItem: NewsItem
  id?: string
  className?: string
}

export function NewsArticle({ id, className, newsItem }: NewsArticleProps) {
  return (
    <Card id={id} className={cn("pt-0", className)}>
      <CardHeader className="border-b bg-secondary py-3 text-3xl font-bold text-secondary-foreground">
        {newsItem.title}
      </CardHeader>
      <CardContent
        className="flex flex-col gap-2"
        dangerouslySetInnerHTML={{ __html: newsItem.content }}
      ></CardContent>
    </Card>
  )
}
