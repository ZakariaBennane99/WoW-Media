import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Montserrat, Lato } from 'next/font/google'


const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})



export const metadata = {
  title: 'Empowering Women to Share Their Stories',
  description: 'From writing to worldwide tours, we offer the support you need to publish and promote your book.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}