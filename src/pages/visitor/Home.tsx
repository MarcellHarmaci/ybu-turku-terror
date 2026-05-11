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
import { Link } from "react-router"

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
          <p className="text-slate-700">{t("home.main.description")}</p>
          <Separator />
          <p className="text-slate-700">
            <Trans
              i18nKey="home.main.contact"
              components={[
                <Link
                  target="_blank"
                  className="text-blue-700"
                  to={"mailto:turkuterror@gmail.com"}
                />,
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
              <p key={index} className="text-slate-700">
                {paragraph}
              </p>
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
              <p key={index} className="text-slate-700">
                {paragraph}
              </p>
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
              <ul className="flex flex-col gap-2 pl-6" my-6>
                {travelOption.modes.map((mode, modeIndex) => (
                  <li
                    key={`travel-option-${index}-${modeIndex}`}
                    className="list-disc"
                  >
                    <div className="">{mode.name}</div>
                    <div className="flex flex-col">
                      {mode.urls.map((url, urlIndex) => (
                        <a
                          key={`travel-option-${index}-${modeIndex}-${urlIndex}`}
                          href={url}
                          target="_blank"
                          className="text-blue-700"
                        >
                          {url}
                        </a>
                      ))}
                    </div>
                    {mode.description && (
                      <p className="text-slate-700">{mode.description}</p>
                    )}
                  </li>
                ))}
              </ul>
              <Separator className="mt-4" />
            </div>
          ))}
          <p className="text-slate-700">{t("home.travel.note")}</p>
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
                <a
                  href={accommodation.url}
                  target="_blank"
                  className="text-blue-700"
                >
                  {accommodation.url}
                </a>
                {accommodation.comment && (
                  <p className="text-slate-700">{accommodation.comment}</p>
                )}
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
                    <div className="text-slate-700">{event.event}</div>
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

      {/*
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
      <section className="rounded-lg bg-white p-5 shadow">
        <h2 className="mb-2 text-lg font-medium">{t("home.main.overview")}</h2>
        <p className="text-slate-700">{t("home.main.description")}</p>
        <Separator className="my-2" />
        <p className="text-slate-700">
          <Trans
            i18nKey="home.main.contact"
            components={[
              <Link
                target="_blank"
                className="text-blue-700"
                to={"mailto:turkuterror@gmail.com"}
              />,
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
      </section>

          <section className="rounded-lg bg-white p-5 shadow">
            <h2 className="mb-3 text-lg font-medium">Rules</h2>
            <ol className="list-inside list-decimal space-y-2 text-sm text-slate-700">
              <li>[Rule 1]</li>
              <li>[Rule 2]</li>
              <li>[Rule 3]</li>
            </ol>
          </section>

          <section className="rounded-lg bg-white p-5 shadow">
            <h2 className="mb-3 text-lg font-medium">Format & Judging</h2>
            <div className="space-y-2 text-sm text-slate-700">
              <p>[Details about submission format]</p>
              <p>[Judging criteria]</p>
            </div>
          </section>

          <section className="rounded-lg bg-white p-5 shadow">
            <h2 className="mb-3 text-lg font-medium">FAQ</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <details className="rounded border p-3">
                <summary className="cursor-pointer">Question 1</summary>
                <div className="mt-2">Answer 1</div>
              </details>
              <details className="rounded border p-3">
                <summary className="cursor-pointer">Question 2</summary>
                <div className="mt-2">Answer 2</div>
              </details>
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <div className="sticky top-6 rounded-lg bg-white p-4 shadow">
            <div className="mb-3 text-sm text-slate-500">Status</div>
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                Open
              </span>
              <div className="text-sm text-slate-600">Entries: 123</div>
            </div>

            <div className="flex flex-col gap-2">
              <Button>Submit Entry</Button>
              <Button variant="outline">Save for later</Button>
            </div>

            <Separator className="my-4" />

            <div className="text-xs text-slate-500">
              <div>Prize: $X,XXX</div>
              <div>Eligibility: [e.g., worldwide]</div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 shadow">
            <h3 className="mb-2 text-sm font-medium">Key Dates</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <strong>Start:</strong> YYYY-MM-DD
              </li>
              <li>
                <strong>Deadline:</strong> YYYY-MM-DD
              </li>
              <li>
                <strong>Winners announced:</strong> YYYY-MM-DD
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-4 shadow">
            <h3 className="mb-2 text-sm font-medium">Contact</h3>
            <div className="text-sm text-slate-700">email@example.com</div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Home
