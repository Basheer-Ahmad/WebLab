import React from 'react'

export default function Child(props) {
  const Change=(id)=>{
    const update = props.mydata.filter((d)=>(
      d.id !=id
    ))
    props.myset(update);
  }
  return (
    <div>
     {
     props.mydata.map((m)=>(
     <div>

     
       <h5>{m.name}</h5> 
     
     <div style={{width:"30vw",height:"22vh",border:"1px solid black",borderRadius:"8px"}}>
        
        <h6 style={{color:"red",marginLeft:"-150px",padding:"5px"}}>
            <b>{m.name2}</b></h6>
        <h6 style={{}}>{m.name3}</h6>
        <h6 style={{}}>{m.name4}</h6>
        <h6 style={{padding:8}}><b>{m.name5}</b>
        </h6>
        {/* <button type="button" onClick={()=>Change(m.id)} class="btn btn-danger" style={{marginLeft:"100px"}}>Danger</button> */}

     </div>


     </div>
     ))
     }



    </div>
  )
}
