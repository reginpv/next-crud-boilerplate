import ThemeProvider from "./themeProvider"
import Header from "@/components/globals/Header"
import Footer from "@/components/globals/Footer"

export default async function TemplateDefault({ 
  children 
}:{
  children: React.ReactNode
}) {

  return (
    <ThemeProvider>
      <Header />
      <main className="dark:bg-gray-800 dark:text-white">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}