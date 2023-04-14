import { Inter } from 'next/font/google'
import Title from '@components/title/message'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Title />
      <p style={{color:'linear-gradient(180deg, red, blue)'}}> huhuhu</p>
    </>
  )
}
