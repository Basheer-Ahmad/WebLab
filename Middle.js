import React from 'react'
import { useState } from 'react'
import Childofmiddle from './Childofmiddle'

export default function Middle() {
    const [data,setData]=useState([
        {id:"1",image:'khan',image2:'Ahmad',image3:'mahmood',image4:'jamal'},
        
        
    ])   
  return (
    <div>
    <Childofmiddle mydata={data} myset={setData} />
    </div>
  )
}
