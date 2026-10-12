import ShadowCard from "@/components/custom/ShadowCard"
import type {
  ComponentRegistry,
  RegistryEntry,
} from "@/components/ui/ui-builder/types"
import { complexComponentDefinitions } from "@/lib/ui-builder/registry/complex-component-definitions"
import { primitiveComponentDefinitions } from "@/lib/ui-builder/registry/primitive-component-definitions"

const definitions: ComponentRegistry = {
  ...primitiveComponentDefinitions,
  ...complexComponentDefinitions,
  Card: { ...complexComponentDefinitions.Card, component: ShadowCard },
}

const entry = (
  type: string,
  category: string,
  label: string
): [string, RegistryEntry<React.ComponentType>] => {
  const definition = definitions[type]
  if (!definition) {
    throw new Error(`Unknown ui-builder component: ${type}`)
  }
  return [type, { ...definition, category, label }]
}

/**
 * Components available in the CMS page builder, one per line.
 * The add component popover shows the categories as tabs and lists the
 * components in the order they appear here. Delete a line to remove a component.
 * Child-only components (e.g. Card Title) only appear when adding into their parent.
 * The visitor CMS page renders with this registry too, so removing a component
 * also stops it from rendering on existing pages.
 */
export const componentRegistry: ComponentRegistry = Object.fromEntries([
  // Layout
  entry("div", "Layout", "Container"),
  entry("Flexbox", "Layout", "Flex Layout"),
  entry("Grid", "Layout", "Grid Layout"),

  // Text
  entry("h1", "Text", "Heading 1"),
  entry("h2", "Text", "Heading 2"),
  entry("h3", "Text", "Heading 3"),
  entry("p", "Text", "Paragraph"),
  entry("span", "Text", "Inline Text"),
  entry("Markdown", "Text", "Rich Text (Markdown)"),
  entry("a", "Text", "Link"),
  entry("Badge", "Text", "Badge"),

  // Lists
  entry("ul", "Lists", "Bulleted List"),
  entry("ol", "Lists", "Numbered List"),
  entry("li", "Lists", "List Item"),

  // Media
  entry("img", "Media", "Image"),
  entry("Icon", "Media", "Icon"),
  entry("iframe", "Media", "Embed (iframe)"),

  // Buttons
  entry("Button", "Buttons", "Button"),
  entry("button", "Buttons", "Plain Button"),

  // Cards
  entry("Card", "Cards", "Card"),
  entry("CardHeader", "Cards", "Card Header"),
  entry("CardTitle", "Cards", "Card Title"),
  entry("CardDescription", "Cards", "Card Description"),
  entry("CardContent", "Cards", "Card Content"),
  entry("CardFooter", "Cards", "Card Footer"),

  // Accordion
  entry("Accordion", "Accordion", "Accordion"),
  entry("AccordionItem", "Accordion", "Accordion Item"),
  entry("AccordionTrigger", "Accordion", "Accordion Trigger"),
  entry("AccordionContent", "Accordion", "Accordion Content"),

  // Forms
  entry("form", "Forms", "Form"),
  entry("label", "Forms", "Label"),
  entry("input", "Forms", "Input"),
  entry("textarea", "Forms", "Text Area"),
  entry("select", "Forms", "Select"),

  // Developer
  entry("CodePanel", "Developer", "Code Panel"),
])
