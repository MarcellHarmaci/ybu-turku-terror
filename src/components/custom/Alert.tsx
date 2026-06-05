import { cn } from "@/lib/utils"
import { IconExclamationCircle } from "@tabler/icons-react"
import { CheckCircle2Icon } from "lucide-react"
import { AlertDescription, AlertTitle, Alert as ShadcnAlert } from "../ui/alert"

interface AlertProps {
  id?: string
  type: "success" | "error"
  title: string
  description?: string
  className?: string
}

const Alert = (props: AlertProps) => {
  const typeStyle =
    props.type === "success"
      ? {
          icon: <CheckCircle2Icon />,
          card: "border-green-500 bg-green-100 text-green-700",
          description: "text-green-800",
        }
      : props.type === "error"
        ? {
            icon: <IconExclamationCircle />,
            card: "border-red-700 bg-red-100 text-red-700",
            description: "text-red-800",
          }
        : null

  return (
    <ShadcnAlert
      id={props.id}
      className={cn("max-w shadow-xl", typeStyle?.card, props.className)}
    >
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
