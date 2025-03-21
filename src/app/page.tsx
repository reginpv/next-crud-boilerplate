import TemplateDefault from "@/templates/Default"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { getUsers } from "@/lib/actions/user"
import Link from "next/link"

export default async function Home() {

  const session = await getServerSession(authOptions)
  const res = await getUsers()
  const users = await res.payload

  return (
    <TemplateDefault>
      <section className="h-full">
        <div className="container">

          <div className="flex flex-col gap-5">
            <h1>Home</h1>
            
            {
              session && <div>
                Hello {session.user.name}, you are now logged in.
              </div>
            }

            <div>
              <p>This is a demo project built with Next.js 15, Neon PostgreSQL, Prisma, and Tailwind CSS v4, deployed on Vercel.</p>
            </div>

            {
              users && users.length > 0 && <div className="flex flex-col gap-2">
                <h2>Users</h2>
                <ul className="flex gap-3 flex-wrap">
                  {
                    users.map((user: User) => (
                      <li key={user.id}>
                        <Link href={`/user/${user.id}`} className="bg-gray-200 dark:bg-gray-900 dark:text-white px-2 py-1 rounded-full">{user.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            }

          </div>
         
        </div>
      </section>
    </TemplateDefault>
  )
}
