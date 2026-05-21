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

export const columns: ColumnDef<NewsItem>[] = [
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
            <DropdownMenuItem
              onClick={() => {
                // TODO display edit dialog
                console.log("Edit item: ", newsItem.id)
              }}
            >
              <IconEdit /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                // TODO send delete request
                console.log("Delete item: ", newsItem.id)
              }}
            >
              <IconTrash /> Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                // TODO display preview
                console.log("Preview item: ", newsItem.id)
              }}
            >
              <IconEye /> Preview
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
