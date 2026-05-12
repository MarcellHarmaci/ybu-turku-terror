import { cn } from "@/lib/utils"
import { Link as ReactRouterLink, type LinkProps } from "react-router"

const Link = (props: LinkProps & React.RefAttributes<HTMLAnchorElement>) => {
  return <ReactRouterLink {...props} className={cn("link", props.className)} />
}

export default Link
