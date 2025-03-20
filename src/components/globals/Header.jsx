import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { ButtonSignOut } from "../ButtonsAuth"

export default async function Header() {

  const session = await getServerSession(authOptions)

  return (
    <header className="bg-gray-200">
      <div className="container">

        <div className="flex justify-between items-center gap-5">
          <h1>
            <Link href="/">Header</Link>
          </h1>

          {session ? 
            <ButtonSignOut /> :
            <div>
              <Link href="/login">Login</Link>
            </div>
          }
        </div>
        
      </div>
    </header> 
  )
}