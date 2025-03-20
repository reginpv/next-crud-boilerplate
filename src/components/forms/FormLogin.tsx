"use client"

import { useActionState, useState, useRef } from "react"
import { loginUser } from "@/lib/actions/user"


export default function FormLoginContent() {
  
  const formRef = useRef<HTMLFormElement>(null)
  const [state, handleSubmit, pending] = useActionState(loginUser, {})

  return (
    <form 
      ref={formRef}
      action={handleSubmit} 
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