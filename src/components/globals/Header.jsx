import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-200">
      <div className="container">

        <div className="flex justify-between items-center gap-5">
          <h1>
            <Link href="/">Header</Link>
          </h1>

          <div>
            <Link href="/login">Login</Link>
          </div>
        </div>
        
      </div>
    </header> 
  )
}