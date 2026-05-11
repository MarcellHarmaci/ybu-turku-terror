import Alert from "@/components/custom/alert"
import Select from "@/components/custom/form/Select"
import TextInput from "@/components/custom/form/TextInput"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FieldGroup } from "@/components/ui/field"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { useJuniorSignup } from "./hooks/useJuniorSignup"
import {
  juniorSignupSchema,
  playerType,
  type JuniorSignupData,
} from "./model/JuniorSignupData"

export function JuniorSignUp() {
  const { t } = useTranslation()

  const form = useForm<JuniorSignupData>({
    resolver: zodResolver(juniorSignupSchema),
    defaultValues: {
      email: "",
      playerType: undefined,
      teamOrPlayerName: "",
      contactPerson: "",
      contactPhone: undefined,
      contactEmail: undefined,
      comment: undefined,
    },
  })

  const { insert, loading, success, error } = useJuniorSignup()

  function onSubmit(data: JuniorSignupData) {
    insert({
      ...data,
      contactPhone: data.contactPhone ?? null,
      contactEmail: data.contactEmail ?? null,
      comment: data.comment ?? null,
    })
  }

  useEffect(() => {
    console.log(success, error)
  }, [success, error])

  useEffect(() => {
    if (success) {
      form.reset()
    }
  }, [success, form])

  return (
    <div className="flex flex-col gap-8 px-2 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              Junnu-YBU 2026 ilmoittautuminen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <TextInput
                control={form.control}
                name="email"
                id="form-j-signup-email"
                label="Email"
                type="email"
                autoComplete="email"
                required
              />
              <Select
                control={form.control}
                name="playerType"
                id="form-j-signup-player-type"
                label="Joukkue vai yksittäinen pelaaja"
                items={playerType}
                autoComplete="off"
                required
              />
              <TextInput
                control={form.control}
                name="teamOrPlayerName"
                id="form-j-signup-team-player-name"
                label="Joukkueen/pelaajan nimi (paikkakunta)"
                autoComplete="off"
                required
              />
              <TextInput
                control={form.control}
                name="contactPerson"
                id="form-j-signup-contact-person"
                label="Yhteyshenkilön nimi"
                autoComplete="off"
                required
              />
              <TextInput
                control={form.control}
                name="contactPhone"
                id="form-j-signup-contact-phone"
                label="Yhteyshenkilön puhelinnumero"
                autoComplete="tel"
                required
              />
              <TextInput
                control={form.control}
                name="contactEmail"
                id="form-j-signup-contact-email"
                label="Yhteyshenkilön sähköposti"
                description="(jos eri kuin lomakkeen täyttäjä)"
                type="email"
                autoComplete="email"
              />
              <TextInput
                control={form.control}
                name="comment"
                id="form-j-signup-comment"
                label="Kommentteja tai kysymyksiä"
                autoComplete="off"
              />
            </FieldGroup>
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              variant="default"
              size="sm"
              className="w-full md:w-64"
              type="submit"
              disabled={loading}
            >
              {t("signup.submit")}
            </Button>
          </CardFooter>
        </Card>
      </form>
      {success && <Alert type="success" title={t("signup.success")} />}
      {error && <Alert type="error" title={t("signup.error")} />}
    </div>
  )
}

export default JuniorSignUp
