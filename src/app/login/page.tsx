import FormLogin from "@/components/forms/FormLogin";
import Link from "next/link";

export default function Login() {
  return (
    <section className="h-dvh">
      <div className="h-full">
        
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-5 flex flex-col gap-5 items-center justify-center">

            <h1>Login</h1>

            <div>
              <FormLogin />
            </div>

            <p className="mt-10">
              <Link href="/signup">Create an account</Link>
            </p>

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
