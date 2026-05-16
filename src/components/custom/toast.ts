import { toast as sonnerToast } from "sonner"

type titleT = (() => React.ReactNode) | React.ReactNode
type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center"

const defaultConfig: { position: Position } = {
  position: "top-center",
}

const success = "!border-green-500 !bg-green-100 !text-green-700"
const error = "!border-red-700 !bg-red-100 !text-red-700"

const toast = Object.assign(
  (message: titleT) => sonnerToast.message(message, defaultConfig),
  {
    ...sonnerToast,
    success: (message: titleT) =>
      sonnerToast.success(message, {
        ...defaultConfig,
        className: success,
      }),
    error: (message: titleT) =>
      sonnerToast.error(message, {
        ...defaultConfig,
        className: error,
      }),
  }
)

export default toast
