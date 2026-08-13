import Link from "@/components/custom/Link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useTranslation } from "react-i18next"
import type { Rule } from "./model/Rule"
import type { SpiritUrl } from "./model/SpiritUrl"

export function Rules() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-6">
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
            <p key={`rule-general-${index}`}>{paragraph}</p>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("rules.overview.title")}
          </CardTitle>
          <CardDescription>{t("rules.overview.description")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {(t("rules.overview.content", { returnObjects: true }) as Rule[]).map(
            (rule: Rule, index: number) => (
              <div key={`rule-beach-${index}`}>
                <p className="text-lg">{rule.title}</p>
                <p>{rule.rule}</p>
                {rule.bullets && (
                  <ul className="list-inside list-disc ml-4">
                    {rule.bullets.map((bullet: string, bulletIndex: number) => (
                      <li key={`rule-beach-${index}-bullet-${bulletIndex}`}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {rule.ending && <p>{rule.ending}</p>}
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
          <CardDescription>{t("rules.spirit.description")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {(
            t("rules.spirit.more.content", {
              returnObjects: true,
            }) as SpiritUrl[]
          ).map((reading: SpiritUrl, index: number) => (
            <div key={`rule-spirit-reading-${index}`}>
              <p className="text-lg">{reading.source}</p>
              <Link target="_blank" to={reading.url}>
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
