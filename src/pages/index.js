import { Inter } from 'next/font/google'
import Title from '@components/title'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <img src='dp.jpg' style={{width:'250px', height:'250px', display:'block', marginLeft:'auto', marginRight:'auto' }} alt="" />
      <Title />


    </>
  )
}
