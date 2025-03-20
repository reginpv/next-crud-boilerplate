"use client"

import { useState, useRef } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function FormLogin() {
  
  const router = useRouter()
  const { push:redirect } = router
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState({
    message: "",
    success: false,
    errors: {
      email: "",
      password: ""
    }
  })
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setPending(true)

    const formData = new FormData(formRef.current)
    const email = formData.get("email")?.toString().trim()
    const password = formData.get("password")?.toString().trim()

    if (!email || !password) {
      setState({
        message: null,
        success: false,
        errors: {
          email: !email ? "Email is required." : "",
          password: !password ? "Password is required." : ""
        }
      })
      setPending(false)
      return
    }

    try {

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        
      })

      console.log("res: ", res)

      if (res?.ok === true ) {

        setState({
          message: "Logged in successfully",
          success: true,
          errors: {
            email: "",
            password: ""
          }
        })

        redirect("/")

      } else {

        setState({
          message: "Failed to login",
          success: false,
          errors: {
            email: "",
            password: ""
          }
        })

      }

      setPending(false)

    } catch (error) {
      
      setState({
        message: "Failed to login",
        success: false,
        errors: {
          email: "",
          password: ""
        }
      })
      
    }


  }

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      noValidate 
      className="flex flex-col gap-5"
    >
      {state?.message && <p className={`message ${state.success ? `message--success` : `message--error`}`}>{state?.message}</p>}

      <div className="form-control">
        <label>Email address</label>
        <input
          required
          type="email"
          name="email"
          placeholder="johnthomas@email.com"
          className={`input w-full`}
        />
        {state?.errors?.email && <p className="error">{state?.errors?.email}</p>}
      </div>

      <div className="form-control">
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          placeholder="********"
          className={`input w-full`}
        />
        {state?.errors?.password && <p className="error">{state?.errors?.password}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="w-full"
          disabled={pending}
        >
          {pending ? "Please wait..." : "Login"}
        </button>
      </div>
      
    </form>
  )
}