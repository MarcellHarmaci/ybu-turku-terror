import { cn } from "@/lib/utils"
import { IconExclamationCircle } from "@tabler/icons-react"
import { CheckCircle2Icon } from "lucide-react"
import { AlertDescription, AlertTitle, Alert as ShadcnAlert } from "../ui/alert"

interface AlertProps {
  type: "success" | "error"
  title: string
  description?: string
}

const Alert = (props: AlertProps) => {
  const typeStyle =
    props.type === "success"
      ? {
          icon: <CheckCircle2Icon />,
          title: "border-green-500 bg-green-100 text-green-700",
          description: "text-green-800",
        }
      : props.type === "error"
        ? {
            icon: <IconExclamationCircle />,
            title: "border-red-700 bg-red-100 text-red-700",
            description: "text-red-800",
          }
        : null

  return (
    <ShadcnAlert className={cn("max-w shadow-xl", typeStyle?.title)}>
      {typeStyle?.icon}
      <AlertTitle>{props.title}</AlertTitle>
      {props.description && (
        <AlertDescription className={typeStyle?.description}>
          {props.description}
        </AlertDescription>
      )}
    </ShadcnAlert>
  )
}

export default Alert
