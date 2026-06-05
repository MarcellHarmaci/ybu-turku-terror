import Login from "@/components/admin/auth/Login"
import Register from "@/components/admin/auth/Register"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function AuthPage() {
  const [isLogin, setLogin] = useState(true)

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-lg flex-col gap-6">
        {isLogin ? <Login /> : <Register />}

        <p className="text-center">
          {isLogin ? "Don't have an account yet?" : "Already have an account?"}{" "}
          <Button
            variant="secondary"
            className="inline"
            onClick={() => setLogin((prev) => !prev)}
          >
            {isLogin ? "Register" : "Log in"}
          </Button>
        </p>
      </div>
    </div>
  )
}

export default AuthPage
