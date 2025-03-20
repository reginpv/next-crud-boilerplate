import { ReactNode } from "react"

export default async function TemplateBlank({ 
  children,
  className
}: {
  children: ReactNode,
  className?: string
}) {
  
  return (
    <>
      <main className={className}>{children}</main>
    </>
  )
}