import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/** Card with the shadow used on the visitor pages. */
const ShadowCard = ({
  className,
  ...props
}: React.ComponentProps<typeof Card>) => (
  <Card className={cn("shadow-xl", className)} {...props} />
)

export default ShadowCard
