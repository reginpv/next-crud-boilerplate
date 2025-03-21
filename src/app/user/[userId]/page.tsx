import { Metadata } from "next"
import TemplateDefault from "@/templates/Default"
import { getServerSession } from "next-auth"  
import { authOptions } from "@/lib/authOptions"
import { getUser } from "@/lib/actions/user"

export const metadata: Metadata = {
  title: "User single",
  description: "User single"
}

export default async function UserSingle({
  params
}:{
  params: Promise<{
    userId: string
  }>
}) {

  const { userId } = await params

  const session = await getServerSession(authOptions)
  const res = await getUser(userId)
  const user = res.payload

  return (
    <TemplateDefault>
      <section>
        <div className="container">
          
          <div className="flex flex-col gap-5">
            <h1>User: {userId}</h1>

            {
              user && <div>
                <p className="font-bold">User details:</p>
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>CreatedAt: {new Date(user.createdAt).toDateString()}</p>
                <p>LoggedInAt: {new Date(user.loggedInAt).toDateString()} {new Date(user.loggedInAt).toTimeString()}</p>
              </div>
            }

          </div>

        </div>
      </section>
    </TemplateDefault>
  )
}
