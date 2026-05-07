import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import z from "zod"

const formSchema = z.object({
  contactPerson: z.string().min(3).max(100),
  contactEmail: z.email(),
  teamName: z
    .string()
    .min(3, "The team name must be at least 3 characters.")
    .max(32, "The team name must be at most 32 characters."),
})

export function SignUp() {
  const { t } = useTranslation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactPerson: "",
      contactEmail: "",
      teamName: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    // TODO Do something with the form values.
    console.log(data)
  }

  return (
    <div className="px-2 sm:px-8 md:px-16 lg:px-24 xl:px-48">
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
              <Controller
                name="contactPerson"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-signup.contact-person">
                      {t("signup.contactPerson.label")}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-signup-contact-person"
                      aria-invalid={fieldState.invalid}
                      placeholder={t("signup.contactPerson.placeholder")}
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="contactEmail"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-signup-email">
                      {t("signup.contactEmail.label")}
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      id="form-signup-email"
                      type="email"
                      placeholder={t("signup.contactEmail.placeholder")}
                      autoComplete="email"
                    />
                    <FieldDescription>
                      {t("signup.contactEmail.description")}
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="teamName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-signup-team-name">
                      {t("signup.teamName.label")}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-signup-team-name"
                      aria-invalid={fieldState.invalid}
                      placeholder={t("signup.teamName.placeholder")}
                      autoComplete="off"
                    />
                    <FieldDescription>
                      {t("signup.teamName.description")}
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              variant="default"
              size="sm"
              className="w-full md:w-64"
              type="submit"
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
