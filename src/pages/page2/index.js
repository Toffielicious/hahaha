import { Inter } from 'next/font/google'
import Title from '@components/title'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <img src='ss.png' style={{width:'500px', height:'730px', display:'block', marginLeft:'auto', marginRight:'auto' }} />
      <a style={{  textAlign:'center' ,width: '150px' }} href="../../../page3">Next</a>


    </>
  )
}
