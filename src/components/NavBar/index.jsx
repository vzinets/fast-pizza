import React from 'react'
import css from './style.module.css'
import { categories } from '@/src/constants/index'
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className={css.navBar}>
        <div className='container'>
            <ul className={css.navBar_inner}>
                {categories.map( ({ id, name, image, slug })=> (
                    
                    <li className={css.category_item} key={id}> 
                    <Link className={css.category_link} href={slug}>
                    <Image className={css.category_image} src={image} width="24" heght="15" alt={name}></Image>
                    {name}</Link>
                    </li>
                
                ))}
            </ul>
        </div>
    </div>
  )
}

export default NavBar