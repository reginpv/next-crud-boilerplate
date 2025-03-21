"use client"

import { useMode } from "@/store/useMode"
import { Icon } from "@/components/Icons"

export default function Mode() {

  const { mode, toggleMode } = useMode()

  return (
    <button onClick={()=>toggleMode()}>
      <Icon icon="mode" className="dark:fill-white" />
    </button>
  )
}