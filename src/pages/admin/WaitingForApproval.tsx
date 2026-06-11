export function WaitingForApproval() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex flex-col gap-4 text-sm leading-loose">
        <h1 className="text-4xl">Waiting for approval...</h1>
        <p>
          New administrators need approval before they are allowed to edit the
          page contents.
        </p>
        <p>
          Notify the YBU organizers and request approval to become a site
          administrator!
        </p>
      </div>
    </div>
  )
}

export default WaitingForApproval
