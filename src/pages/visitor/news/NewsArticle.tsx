import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { DATE_FORMAT } from "@/consts"
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
      <CardHeader className="bg-secondary py-2! text-center text-secondary-foreground">
        <div className="text-2xl font-semibold md:text-3xl">
          {newsItem.title}
        </div>
        <CardDescription>
          {DATE_FORMAT.format(newsItem.timestamp)}
        </CardDescription>
      </CardHeader>
      <CardContent
        className="flex flex-col gap-2 px-8 py-4"
        dangerouslySetInnerHTML={{ __html: newsItem.content }}
      ></CardContent>
    </Card>
  )
}
