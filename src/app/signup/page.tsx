import FormSignup from "@/components/forms/FormSignup"
import Link from "next/link"

export default function Signup() {
  return (
    <section className="h-dvh">
      <div className="h-full">
        
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-5 flex flex-col gap-5 items-center justify-center">

            <h1>Signup</h1>

            <div>
              <FormSignup />
            </div>

            <div className="mt-7 flex flex-col gap-3 text-center">
              <p><Link href="/">Home</Link></p>
              <p>Already have an account? <Link href="/login">Login here</Link></p>
            </div>

          </div>
          <div className="flex-1 bg-gray-300 p-5 flex items-center justify-center">
            <div className="max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
