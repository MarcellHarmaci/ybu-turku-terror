import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IconWorld } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"

const LanguageSelect = () => {
  const { t, i18n } = useTranslation()

  const items = [
    { label: "Suomi", value: "fi" },
    { label: "English", value: "en" },
  ]

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>
        <IconWorld /> {t("sidebar.language")}
      </FieldLabel>
      <Select
        value={i18n.language}
        onValueChange={(value: string) => i18n.changeLanguage(value)}
        defaultValue="en"
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}

export default LanguageSelect
