import { Inter } from 'next/font/google'
import Title from '@components/title/message3'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Title messageko="haaaaa" />
      <a href="../../../page4">Next</a>
    </>
  )
}
