import React from 'react'

export default function Childofmiddle(props) {
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
        <card>
            <img src='https://media.gettyimages.com/id/1440911242/photo/icc-mens-t20-world-cup-final-previews.jpg?s=612x612&w=gi&k=20&c=DY2A8E_I4uuGWuxrLllVRJr3oAFke0-Bk-a7G_OpnaE='></img>
            {m.image}
            <button type="button" onClick={()=>Change(m.id)} class="btn btn-danger" style={{marginLeft:"100px"}}>Delete</button>
            </card>
            <card style={{border:"2px solid black"}}>
            <img src='https://media.gettyimages.com/id/1440911242/photo/icc-mens-t20-world-cup-final-previews.jpg?s=612x612&w=gi&k=20&c=DY2A8E_I4uuGWuxrLllVRJr3oAFke0-Bk-a7G_OpnaE='></img>
            {m.image}
            <button type="button" onClick={()=>Change(m.id)} class="btn btn-danger" style={{marginLeft:"100px"}}>Delete</button>
            
            </card>
            <card>
            <img src='https://media.gettyimages.com/id/1440911242/photo/icc-mens-t20-world-cup-final-previews.jpg?s=612x612&w=gi&k=20&c=DY2A8E_I4uuGWuxrLllVRJr3oAFke0-Bk-a7G_OpnaE='></img>
            {m.image}
            <button type="button" onClick={()=>Change(m.id)} class="btn btn-danger" style={{marginLeft:"100px"}}>Delete</button>
            </card>

            <card>
            <img src='https://media.gettyimages.com/id/1440911242/photo/icc-mens-t20-world-cup-final-previews.jpg?s=612x612&w=gi&k=20&c=DY2A8E_I4uuGWuxrLllVRJr3oAFke0-Bk-a7G_OpnaE='></img>
            {m.image}
            <button type="button" onClick={()=>Change(m.id)} class="btn btn-danger" style={{marginLeft:"100px"}}>delete</button>
            </card>




    </div>
   ))


   }
    </div>
  )
}
