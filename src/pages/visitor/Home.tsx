import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Trans, useTranslation } from "react-i18next"
import { Link } from "react-router"

export function Home() {
  const { t } = useTranslation()

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold md:text-3xl">
          Yyteri Beach Ultimate Tournament 2026
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>Hosted by Turku Terror</span>
          <span>|</span>
          <span>Sign-up deadline: 1.8.2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-lg bg-white p-5 shadow">
            <h2 className="mb-2 text-lg font-medium">
              {t("home.main.overview")}
            </h2>
            <p className="text-slate-700">{t("home.main.description")}</p>
            <Separator className="my-2" />
            <p className="text-slate-700">
              <Trans
                i18nKey="home.main.contact"
                components={[
                  <Link
                    target="_blank"
                    className="text-blue-700"
                    to={"mailto:turkuterror@gmail.com"}
                  />,
                  <Link
                    target="_blank"
                    className="text-blue-700"
                    to={"https://www.instagram.com/turkuterror/"}
                  />,
                  <Link
                    target="_blank"
                    className="text-blue-700"
                    to={"https://chat.whatsapp.com/LTRNlILID6YFXxtWhCzRWY"}
                  />,
                ]}
              />
            </p>
          </section>

          <section className="rounded-lg bg-white p-5 shadow">
            <h2 className="mb-3 text-lg font-medium">Rules</h2>
            <ol className="list-inside list-decimal space-y-2 text-sm text-slate-700">
              <li>[Rule 1]</li>
              <li>[Rule 2]</li>
              <li>[Rule 3]</li>
            </ol>
          </section>

          <section className="rounded-lg bg-white p-5 shadow">
            <h2 className="mb-3 text-lg font-medium">Format & Judging</h2>
            <div className="space-y-2 text-sm text-slate-700">
              <p>[Details about submission format]</p>
              <p>[Judging criteria]</p>
            </div>
          </section>

          <section className="rounded-lg bg-white p-5 shadow">
            <h2 className="mb-3 text-lg font-medium">FAQ</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <details className="rounded border p-3">
                <summary className="cursor-pointer">Question 1</summary>
                <div className="mt-2">Answer 1</div>
              </details>
              <details className="rounded border p-3">
                <summary className="cursor-pointer">Question 2</summary>
                <div className="mt-2">Answer 2</div>
              </details>
            </div>
          </section>
        </div>

        {/* Right: sidebar with CTA and metadata */}
        <div className="space-y-4">
          <div className="sticky top-6 rounded-lg bg-white p-4 shadow">
            <div className="mb-3 text-sm text-slate-500">Status</div>
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                Open
              </span>
              <div className="text-sm text-slate-600">Entries: 123</div>
            </div>

            <div className="flex flex-col gap-2">
              <Button>Submit Entry</Button>
              <Button variant="outline">Save for later</Button>
            </div>

            <Separator className="my-4" />

            <div className="text-xs text-slate-500">
              <div>Prize: $X,XXX</div>
              <div>Eligibility: [e.g., worldwide]</div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 shadow">
            <h3 className="mb-2 text-sm font-medium">Key Dates</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <strong>Start:</strong> YYYY-MM-DD
              </li>
              <li>
                <strong>Deadline:</strong> YYYY-MM-DD
              </li>
              <li>
                <strong>Winners announced:</strong> YYYY-MM-DD
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-4 shadow">
            <h3 className="mb-2 text-sm font-medium">Contact</h3>
            <div className="text-sm text-slate-700">email@example.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
