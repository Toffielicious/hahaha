import { Inter } from 'next/font/google'
import Title from '@components/title/message4'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Title />
      <p style={{backgroundImage:'linear-gradient(to right, yellow,red)', color:'black'}}>i am a dog</p>
    </>
  )
}
