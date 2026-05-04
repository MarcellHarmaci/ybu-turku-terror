import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function SignUp() {
  return (
    <>
      <Card>
        <CardHeader>
          <h1 className="text-2xl">Sign-up</h1>
        </CardHeader>
        <CardContent>[TODO form here]</CardContent>
        <CardFooter className="justify-end">
          <Button variant="default" size="sm" className="w-full md:w-64">
            Sign up
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default SignUp
