import React,{useContext} from 'react'
import { context } from './App'

export default function ProductList() {

  let x=useContext(context)

  return (
    <div>

       <h1>HELLO Mr.{x.name}{x.age}</h1> 
       <img src={x.c} alt=''/>
    </div>
  )
}
