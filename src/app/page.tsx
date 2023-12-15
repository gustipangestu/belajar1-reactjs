"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


export default function PageHome(){

  const [counter, setCounter] = useState(0);
  
  const increment1 = () =>{
   setCounter(counter+1);
  }

  return (
    <><h1>Hello, ini adalah halaman Home</h1>
    <h1>{counter}</h1>
    <button
    onClick={increment1}
    >Increment</button> 
    <button>
      <Link href={"/dashboard"}>
        dasboard
      </Link>
    </button>
    </>
  )
}
