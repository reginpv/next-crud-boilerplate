import { Metadata } from "next"
import TemplateDefault from "@/templates/Default"

export const metadata: Metadata = {
  title: "User",
  description: "User"
}

export default function user() {
  return (
    <TemplateDefault>
      <section>
        <div className="container">
          <h1>User</h1>
        </div>
      </section>
    </TemplateDefault>
  )
}
