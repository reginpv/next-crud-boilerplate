"use client"

import { signIn, signOut } from "next-auth/react"

export function ButtonSignIn({
  className,
  label = "Login"
}:{
  className?: string
  label?: string
}) {
  return <button type="button" className={className} onClick={() => signIn()}>{label}</button> 
}

export function ButtonSignOut({
  className
}:{
  className?: string
}) {
  return <button className={className} onClick={() => {

    signOut()

  }}>Logout</button>
}