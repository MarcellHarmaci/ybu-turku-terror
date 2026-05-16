import Select from "@/components/custom/form/Select"
import TextInput from "@/components/custom/form/TextInput"
import Link from "@/components/custom/Link"
import toast from "@/components/custom/toast"
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
    if (success) {
      form.reset()
      toast.success(t("signup.success"))
    }
  }, [success, form, t])

  useEffect(() => {
    if (error) {
      toast.error(t("signup.error"))
    }
  }, [error, form, t])

  return (
    <div className="flex flex-col gap-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Junnu-YBU 2026</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1.5">
          <p>Milloin: Lauantaina 15.8.2026, 11:00 alkaen</p>
          <p>
            Missä: Yyterin Hiekkaranta - konttiravintoloiden kohdalla rannalla
          </p>{" "}
          <p>
            Yyteri Beach Ultimate -tapahtuman yhteydessä lauantaina järjestetään
            historian toinen Junnu-YBU. 🎉
          </p>
          <p>
            Tarkoituksena on saada kaiken ikäisille junioreille hauskoja ja
            mielekkäitä beach-pelejä.
          </p>
          <ul className="mx-5 list-disc">
            <li>Pelataan 5 vs 5, hieman normaalia pienemmällä kentällä</li>
            <li>
              Peliaika noin 25 min (esim. 11 pisteeseen) - tarkennetaan kun
              joukkeiden määrä varmistuu
            </li>
            <li>Vapaa määrä tyttöjä ja poikia kentällä</li>
          </ul>
          <p>
            Keräämme ilmoittautumisia sekä juniorijoukkueilta että yksittäisiltä
            junioripelaajilta (pick-up). Yksittäiset pelaajat joko kootaan
            omaksi joukkueekseen tai yhdistetään sopiviin joukkueisiin.
          </p>
          <p>
            Pelit on tarkoitus pelata aikavälillä 11-17, kerrothan jos on
            aikatauluhaasteita.
          </p>
          <p>Ilmoittautuminen 1.7. mennessä.</p>
          <p>
            Pelaajamaksu 5€ per pelaaja - maksu Mobile Pay 045 123 1246 (Asmo
            Soinio) - viestiin joukkueen nimi
          </p>
          <p>
            TD: Asmo Soinio -{" "}
            <Link target="_blank" to="mailto:asmo.soinio@gmail.com">
              asmo.soinio@gmail.com
            </Link>{" "}
            /{" "}
            <Link target="_blank" to="tel:045 123 1246">
              045 123 1246
            </Link>
          </p>
        </CardContent>
      </Card>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mb-6 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              Ilmoittautuminen
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
    </div>
  )
}

export default JuniorSignUp
