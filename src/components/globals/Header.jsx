import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { ButtonSignOut } from "@/components/ButtonsAuth"
import Mode from "@/components/Mode"

export default async function Header() {

  const session = await getServerSession(authOptions)

  return (
    <header className="bg-gray-200 dark:bg-gray-900 dark:text-white">
      <div className="container">

        <div className="flex justify-between items-center gap-5">
          <h1>
            <Link href="/">Header</Link>
          </h1>

          <div className="flex items-center gap-5">
            <Mode />
            {session ? 
              <div className="flex items-center gap-5">
                <Link href="/user">User</Link>
                <ButtonSignOut />
              </div> :
              <div>
                <Link href="/login">Login</Link>
              </div>
            }
          </div>
          
        </div>
        
      </div>
    </header> 
  )
}