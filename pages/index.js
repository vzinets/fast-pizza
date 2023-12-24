import Head from 'next/head'
import Location from '@/src/components/Location'
import Header from '@/src/components/Header'
import NavBar from '@/src/components/NavBar'
import Banners from '@/src/components/Banners'
import AdressCheck from '@/src/components/AdressCheck'
import ProductList from '@/src/components/ProductList'
import { dataPizza } from '@/src/data/dataPizza'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Location/> 
        <Header/>
        <NavBar/>
        <Banners/>
        <AdressCheck/>
        <ProductList title='Піца' data={dataPizza}/>
      </main>
    </>
  )
}