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
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { schema, type LoginFormData } from "./schema"

export function Login() {
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

    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => console.log("Successfully logged in!"))
      .catch((reason) => {
        if (reason instanceof FirebaseError) {
          const firebaseError = reason as FirebaseError
          toast.error(firebaseError.code)
          console.error("FirebaseError:", firebaseError)
        } else {
          toast.error("An unknown error occured.")
          console.error("Login failed!", reason)
        }
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mb-6 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Login</CardTitle>
            <CardDescription>Log in as an administrator.</CardDescription>
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
                autoComplete="current-password"
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
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default Login
