import Link from "@/components/custom/Link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { AccommodationOption } from "@/model/AccommodationOption"
import type { FeedbackItem } from "@/model/FeedbackItem"
import type { FoodOption, FoodPlace } from "@/model/FoodOption"
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
  const foodOptions = t("home.food.options", {
    returnObjects: true,
  }) as FoodOption[]
  const feedbackItems = t("home.feedback.items", {
    returnObjects: true,
  }) as FeedbackItem[]
  const preliminarySchedule = t("home.schedule.preliminarySchedule", {
    returnObjects: true,
  }) as ScheduleItem[]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold md:text-3xl">
          {t("home.header.title")}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
          <Badge variant="secondary">{t("home.header.host")}</Badge>
          <Badge variant="outline">{t("home.header.location")}</Badge>
          <Badge variant="default">{t("home.header.deadline")}</Badge>
        </div>
      </div>

      <Card className="shadow-xl">
        <img src="ybu-header.jpg" alt="YBU Design Header" />
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
          <img src="beach-map.png" alt="Beach Map" />
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
            {t("home.food.title")}
          </CardTitle>
          <CardDescription>{t("home.food.description")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {foodOptions.map((foodOption: FoodOption, index: number) => (
            <div key={`food-option-${index}`}>
              {"group" in foodOption ? (
                <>
                  <h5 className="mb-1 text-xl">{foodOption.group}</h5>
                  <ul className="flex flex-col gap-2 pl-6">
                    {foodOption.places.map((place, placeIndex) => (
                      <li
                        key={`food-option-${index}-${placeIndex}`}
                        className="list-disc"
                      >
                        <FoodPlaceDetails place={place} />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <FoodPlaceDetails place={foodOption} />
              )}
              {index < foodOptions.length - 1 && (
                <Separator className="mt-4" />
              )}
            </div>
          ))}
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
              <div key={`schedule-item-${index}`} className="w-full">
                <h5 className="mb-1 text-xl">{scheduleItem.day}</h5>
                <table className="w-full table-fixed">
                  <tbody>
                    {scheduleItem.events.map((event, eventIndex) => (
                      <tr key={`schedule-event-${eventIndex}`}>
                        <td className="w-28 border-y border-primary p-1 pr-2 text-right">
                          {event.time}:
                        </td>
                        <td className="border-y border-primary p-1">
                          {event.event}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {index < preliminarySchedule.length - 1 && (
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
            {t("home.feedback.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {feedbackItems.map((feedbackItem: FeedbackItem, index: number) => (
            <div key={`feedback-item-${index}`}>
              <p>{feedbackItem.description}</p>
              <Link to={feedbackItem.url} target="_blank">
                {feedbackItem.url}
              </Link>
              {index < feedbackItems.length - 1 && (
                <Separator className="mt-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function FoodPlaceDetails({ place }: { place: FoodPlace }) {
  return (
    <>
      <div className="font-medium">{place.name}</div>
      {place.note && <div>{place.note}</div>}
      <div>{place.hours}</div>
      {place.description && <p>{place.description}</p>}
      {place.discount && <p>{place.discount}</p>}
      {place.address && <p>{place.address}</p>}
    </>
  )
}

export default Home
