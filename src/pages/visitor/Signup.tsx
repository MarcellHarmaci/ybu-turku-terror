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
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Sign-up</CardTitle>
            <CardDescription>
              Register your team for the 2026 Yyteri Beach Ultimate tournament!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Controller
                name="contactPerson"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-signup-contact-person">
                      Contact person
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-signup-contact-person"
                      aria-invalid={fieldState.invalid}
                      placeholder="The team contact person's name"
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
                      Contact email
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      id="form-signup-email"
                      type="email"
                      placeholder="email@example.com"
                      autoComplete="email"
                    />
                    <FieldDescription>
                      An address where the organizers can reach you. This will
                      not be shared with other teams.
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
                      Team name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-signup-team-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Your awesome team name"
                      autoComplete="off"
                    />
                    <FieldDescription>
                      The name of your team. This will be visible to other teams
                      on the tournament website.
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
              Sign up
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default SignUp
