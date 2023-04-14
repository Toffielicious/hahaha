import { Inter } from 'next/font/google'
import Text from '@components/title/message'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Text messageko="ako to" />

      <p> huhuhu</p>
    </>
  )
}
