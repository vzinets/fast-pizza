import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import logo from '@/src/static/icons/logo.svg'

const Logo = () => {
  return (
    <Link href="/">
         <Image width={112} height={32} alt='Швидко Піца' src={logo}/>
    </Link>
  )
}

export default Logo;