import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import type { Rule } from "./model/Rule"
import type { SpiritUrl } from "./model/SpiritUrl"

export function Rules() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold md:text-3xl">{t("rules.title")}</h1>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("rules.general.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {(
            t("rules.general.content", { returnObjects: true }) as string[]
          ).map((paragraph: string, index: number) => (
            <p key={`rule-general-${index}`} className="text-slate-700">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("rules.overview.title")}
          </CardTitle>
          <CardDescription className="text-slate-800">
            {t("rules.overview.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {(t("rules.overview.content", { returnObjects: true }) as Rule[]).map(
            (rule: Rule, index: number) => (
              <div key={`rule-beach-${index}`}>
                <p className="text-lg text-slate-800">{rule.title}</p>
                <p className="text-slate-700">{rule.rule}</p>
              </div>
            )
          )}
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("rules.spirit.title")}
          </CardTitle>
          <CardDescription className="text-slate-800">
            {t("rules.spirit.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {(
            t("rules.spirit.more.content", {
              returnObjects: true,
            }) as SpiritUrl[]
          ).map((reading: SpiritUrl, index: number) => (
            <div key={`rule-spirit-reading-${index}`}>
              <p className="text-lg text-slate-800">{reading.source}</p>
              <Link target="_blank" className="text-blue-700" to={reading.url}>
                {reading.url}
              </Link>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default Rules
