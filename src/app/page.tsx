import TemplateDefault from "@/templates/Default"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"

export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <TemplateDefault>
      <section>
        <div className="container">
          <h1>Home</h1>
          <div>
            {JSON.stringify(session, null, 2)}
          </div>
        </div>
      </section>
    </TemplateDefault>
  )
}
