"use client"

import { useMode } from "@/store/useMode"

export default function Mode() {

  const { mode, toggleMode } = useMode()

  return (
    <div>
      <button onClick={()=>toggleMode()}>Mode {mode}</button>
    </div>
  )
}