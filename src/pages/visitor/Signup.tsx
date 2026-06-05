import Select from "@/components/custom/form/Select"
import TextInput from "@/components/custom/form/TextInput"
import toast from "@/components/custom/toast"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FieldGroup } from "@/components/ui/field"
import { useSignup } from "@/service/signup/useSignup"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import {
  levelOfPlayOptions,
  signupSchema,
  type SignUpData,
} from "./model/SignupData"

export function SignUp() {
  const { t } = useTranslation()

  const form = useForm<SignUpData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      teamName: "",
      playerCount: 0,
      levelOfPlay: undefined,
      contactEmail: "",
      contactPerson: "",
      contactPhone: "",
    },
  })

  const { insert, loading, success, error } = useSignup()

  function onSubmit(data: SignUpData) {
    insert(data)
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mb-6 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              {t("signup.title")}
            </CardTitle>
            <CardDescription>{t("signup.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <TextInput
                control={form.control}
                name="email"
                id="form-signup-email"
                label={t("signup.email.label")}
                type="email"
                autoComplete="email"
              />
              <TextInput
                control={form.control}
                name="teamName"
                id="form-signup-team-name"
                label={t("signup.teamName.label")}
                description={t("signup.teamName.description")}
                autoComplete="off"
              />
              <TextInput
                control={form.control}
                name="playerCount"
                id="form-signup-player-count"
                label={t("signup.playerCount.label")}
                autoComplete="off"
                type="number"
              />
              <Select
                control={form.control}
                name="levelOfPlay"
                id="form-signup-player-count"
                label={t("signup.levelOfPlay.label")}
                description={t("signup.levelOfPlay.description")}
                autoComplete="off"
                items={levelOfPlayOptions}
              />
              <TextInput
                control={form.control}
                name="contactPerson"
                id="form-signup-contact-person"
                label={t("signup.contactPerson.label")}
                description={t("signup.contactPerson.description")}
                autoComplete="off"
              />
              <TextInput
                control={form.control}
                name="contactEmail"
                id="form-signup-contact-email"
                label={t("signup.contactEmail.label")}
                description={t("signup.contactEmail.description")}
                type="email"
                autoComplete="email"
              />
              <TextInput
                control={form.control}
                name="contactPhone"
                id="form-signup-contact-phone"
                label={t("signup.contactPhone.label")}
                autoComplete="tel"
              />
            </FieldGroup>
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              variant="default"
              size="sm"
              className="w-full lg:w-48"
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

export default SignUp
