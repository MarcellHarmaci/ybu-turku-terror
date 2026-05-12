import Link from "@/components/custom/Link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { AccommodationOption } from "@/model/AccommodationOption"
import type { ScheduleItem } from "@/model/ScheduleItem"
import type { TravelOption } from "@/model/TravelOption"
import { Trans, useTranslation } from "react-i18next"

export function Home() {
  const { t } = useTranslation()

  const travelOptions = t("home.travel.options", {
    returnObjects: true,
  }) as TravelOption[]
  const accommodationOptions = t("home.accommodation.options", {
    returnObjects: true,
  }) as AccommodationOption[]
  const preliminarySchedule = t("home.schedule.preliminarySchedule", {
    returnObjects: true,
  }) as ScheduleItem[]

  return (
    <div className="flex flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-semibold md:text-3xl">
          Yyteri Beach Ultimate Tournament 2026
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>Hosted by Turku Terror</span>
          <span>|</span>
          <span>Location: Yyteri, Pori</span>
          <span>|</span>
          <span>Sign-up deadline: 1.8.2026</span>
        </div>
      </div>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("home.main.overview")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p>{t("home.main.description")}</p>
          <Separator />
          <p>
            <Trans
              i18nKey="home.main.contact"
              components={[
                <Link target="_blank" to={"mailto:turkuterror@gmail.com"} />,
                <Link
                  target="_blank"
                  className="text-blue-700"
                  to={"https://www.instagram.com/turkuterror/"}
                />,
                <Link
                  target="_blank"
                  className="text-blue-700"
                  to={"https://chat.whatsapp.com/LTRNlILID6YFXxtWhCzRWY"}
                />,
              ]}
            />
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("home.general.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {(t("home.general.content", { returnObjects: true }) as string[]).map(
            (paragraph: string, index: number) => (
              <p key={`general-info-${index}`}>{paragraph}</p>
            )
          )}
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("home.fees.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {(t("home.fees.content", { returnObjects: true }) as string[]).map(
            (paragraph: string, index: number) => (
              <p key={`fees-${index}`}>{paragraph}</p>
            )
          )}
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("home.travel.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {travelOptions.map((travelOption: TravelOption, index: number) => (
            <div key={`travel-option-${index}`}>
              <h5 className="mb-1 text-xl">{travelOption.travel}</h5>
              <ul className="flex flex-col gap-2 pl-6">
                {travelOption.modes.map((mode, modeIndex) => (
                  <li
                    key={`travel-option-${index}-${modeIndex}`}
                    className="list-disc"
                  >
                    <div className="">{mode.name}</div>
                    <div className="flex flex-col">
                      {mode.urls.map((url, urlIndex) => (
                        <Link
                          key={`travel-option-${index}-${modeIndex}-${urlIndex}`}
                          to={url}
                          target="_blank"
                        >
                          {url}
                        </Link>
                      ))}
                    </div>
                    {mode.description && <p>{mode.description}</p>}
                  </li>
                ))}
              </ul>
              <Separator className="mt-4" />
            </div>
          ))}
          <p>{t("home.travel.note")}</p>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("home.accommodation.title")}
          </CardTitle>
          <CardDescription>
            {t("home.accommodation.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {accommodationOptions.map(
            (accommodation: AccommodationOption, index: number) => (
              <div key={`accommodation-option-${index}`}>
                <h5 className="mb-1 text-xl">{accommodation.name}</h5>
                <Link to={accommodation.url} target="_blank">
                  {accommodation.url}
                </Link>
                {accommodation.comment && <p>{accommodation.comment}</p>}
                {index < accommodationOptions.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            )
          )}
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            {t("home.schedule.title")}
          </CardTitle>
          <CardDescription>{t("home.schedule.description")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {preliminarySchedule.map(
            (scheduleItem: ScheduleItem, index: number) => (
              <div key={`schedule-item-${index}`}>
                <h5 className="mb-1 text-xl">{scheduleItem.day}</h5>
                {scheduleItem.events.map((event, eventIndex) => (
                  <div
                    key={`schedule-event-${eventIndex}`}
                    className="flex flex-row gap-1.5"
                  >
                    <div>{event.time}:</div>
                    <div>{event.event}</div>
                  </div>
                ))}
                {index < preliminarySchedule.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            )
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Home
