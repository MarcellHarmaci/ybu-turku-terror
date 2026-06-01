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
import { auth } from "@/firebase"
import { zodResolver } from "@hookform/resolvers/zod"
import { FirebaseError } from "firebase/app"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { schema, type LoginFormData } from "./schema"

export function Register() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: LoginFormData) {
    setLoading(true)

    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((credentials) => {
        // TODO Insert unapproved user into admin collection
        console.log("User registered with UID:", credentials.user.uid)
      })
      .catch((reason) => {
        if (reason instanceof FirebaseError) {
          const firebaseError = reason as FirebaseError
          toast.error(firebaseError.message)
          console.error("FirebaseError:", firebaseError)
        } else {
          toast.error("An unknown error occured.")
          console.error("Registration failed!", reason)
        }
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mb-6 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Registration</CardTitle>
            <CardDescription>
              Registered administrators need manual approval before they are
              allowed to make modifications!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <TextInput
                control={form.control}
                name="email"
                id="login-email"
                label="Email"
                type="email"
                autoComplete="email"
              />
              <TextInput
                control={form.control}
                name="password"
                id="login-password"
                label="Password"
                description={t("signup.teamName.description")}
                type="password"
                autoComplete="new-password"
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
              Register
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default Register
