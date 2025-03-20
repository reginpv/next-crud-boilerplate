import Header from "@/components/globals/Header"
import Footer from "@/components/globals/Footer"

export default async function TemplateDefault({ 
  children 
}:{
  children: React.ReactNode
}) {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}