import FormLogin from "@/components/forms/FormLogin";

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
