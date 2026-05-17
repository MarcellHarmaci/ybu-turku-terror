export function AdminHome() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Welcome administrators!</h1>
          <p>
            Here you can manage some of the content visible to the users on the
            website.
          </p>
          <p>
            The admin page is a work in progress so you might not find what you
            are looking for.
          </p>
          <p>If you need help contact the IT guys from the team.</p>
        </div>
        <div className="mt-8 text-xs">
          <p>Here's a trick for you</p>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}

export default AdminHome
