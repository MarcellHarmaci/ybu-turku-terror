import Alert from "@/components/custom/alert"
import TextInput from "@/components/custom/form/TextInput"
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { useSignup } from "./hooks/useSignup"
import { signupSchema, type SignUpData } from "./model/SignupData"

export function SignUp() {
  const { t } = useTranslation()

  const form = useForm<SignUpData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      contactPerson: "",
      contactEmail: "",
      teamName: "",
    },
  })

  const { insert, loading, success, error } = useSignup()

  function onSubmit(data: SignUpData) {
    insert(data)
  }

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
              {t("signup.title")}
            </CardTitle>
            <CardDescription>{t("signup.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <TextInput
                control={form.control}
                name="contactPerson"
                id="form-signup-contact-person"
                label={t("signup.contactPerson.label")}
                placeholder={t("signup.contactPerson.placeholder")}
                autoComplete="off"
              />
              <TextInput
                control={form.control}
                name="contactEmail"
                id="form-signup-email"
                label={t("signup.contactEmail.label")}
                placeholder={t("signup.contactEmail.placeholder")}
                type="email"
                autoComplete="email"
              />
              <TextInput
                control={form.control}
                name="teamName"
                id="form-signup-team-name"
                label={t("signup.teamName.label")}
                placeholder={t("signup.teamName.placeholder")}
                description={t("signup.teamName.description")}
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

export default SignUp
