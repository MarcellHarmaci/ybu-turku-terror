import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconDots, IconEdit, IconEye, IconTrash } from "@tabler/icons-react"
import type { ColumnDef } from "@tanstack/react-table"
import type { NewsItem } from "./model/domain"

export const columns: (
  onDelete: (id: string) => void,
  onPreview: (newsItem: NewsItem) => void,
  onEdit: (newsItem: NewsItem) => void
) => ColumnDef<NewsItem>[] = (onDelete, onPreview, onEdit) => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "timestamp",
      header: "Published at",
      cell: ({ row }) =>
        new Intl.DateTimeFormat("fi-FI").format(row.original.timestamp),
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const newsItem = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <IconDots className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => onEdit(newsItem)}>
                <IconEdit /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                onClick={() => {
                  if (newsItem.id) {
                    onDelete(newsItem.id)
                  }
                }}
              >
                <IconTrash /> Delete
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onPreview(newsItem)}>
                <IconEye /> Preview
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
}
