import React from 'react'
import { useState } from 'react'
import Child from './Child'
export default function RightSide() {
    const [data,setData]=useState([
        {id:"1",name2:"Stumps",name3:"England  (75over) 501/7d",name4:"Engaland Lions    (77overs) 412/9",name5:"Day2- Eng Lions trail by 89 runs"},
        {id:"2",name2:"Inings Break",name3:"India   (50 ov) 306/7",name4:"new zeland"
        ,name5:"new Zeland chose to fieled"},
    ])   
  return (
    <div>
        
     <Child mydata={data} myset={setData} />
    
    </div>
  )
}
