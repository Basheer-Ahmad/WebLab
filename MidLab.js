
import React from "react";
import RightSide from "./RightSide";
import Menu from "./Menu";
import Footer from "./Footer";
import Child from "./Child";
import { Link } from "react-router-dom";
import Middle from "./Middle";
function Lab(){
    return(

    <div className="row">
      <Menu/>
        <div className='col-md-2' style={{border:"1px solid black",borderRadius:"8px"}}>
    

        <div class="card bg-light mb-3" style={{maxWidth: 288,margin:5}}>
  <div class="card-header">Quick Links</div>
  <div class="card-body">
   <ul>T20 Time out</ul>
   <ul>Fantasy Pick</ul>
   <ul>ICC Rankings</ul>
  </div>
  </div>



  <div class="card bg-light mb-3" style={{maxWidth: 288,margin:5}}>
  <div class="card-header">ESPNcricinfo Apps</div>
  <div class="card-body">
   <ul>  Android App</ul>
   <Link to="/Ios"><ul>ios App</ul></Link>
  </div>
  </div>




  <div class="card bg-light mb-3" style={{maxWidth: 288,margin:5}}>
  <div class="card-header">Follow ESPNcricinfo</div>
  <div class="card-body">
   <ul>Instagram</ul>
   <ul>Twitter</ul>
   <ul>Facebook</ul>
   <ul>YouTube</ul>
  </div>
  </div>

  <div class="card bg-light mb-3" style={{maxWidth: 288,margin:5}}>
  <div class="card-header"> ESPN Sites</div>
  <div class="card-body">
   <ul>The cricket monthly</ul>
   <ul>ESPN</ul>
   
  </div>
  </div>
  


division 0</div>
  <div className='col-md-6' style={{border:"1px solid black"}}>
    <Middle/>
  <h4 style={{marginLeft:-300}}><b>AFGHANISTAN NEWS</b></h4>
  <div class="card mb-3">
  <img src="https://media.gettyimages.com/id/1349004225/photo/afghanistan-v-scotland-icc-mens-t20-world-cup-2021.jpg?s=612x612&w=gi&k=20&c=xvbGqQfQyfZScE8jV29PFN-fOnpoqbgY2d4adESSWlI=" class="card-img-top" alt="Wild Landscape"/>
  <div class="card-body" style={{backgroundColor:"black"}}>
    <h5 class="card-title" style={{color:"white"}}><b>Rashid Khan stand on his position</b></h5>
    <p class="card-text" style={{color:"white"}}>
      He became the first positioner of T20 format in bowling Side
      And aswell the thired in Allrounder all over the world
    </p>
  </div>
</div>
<div class="card mb-3" style={{width: 620}} >
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:"180px"}} src="https://imgs.search.brave.com/K9cBvwiSD6A5WBQLPdGA6c_0TJ3pP79Z7KR_msaHczs/rs:fit:706:393:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlkL2Vk/LzkyLzlkZWQ5Mjc1/MDI5OGUyZTJiZDI5/Y2RmNzRlOTZhNDll/LmpwZw" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Afghanistan tour of Srilanka</h5>
        <p class="card-text">3 ODIs</p>
        <p class="card-text"><small class="text-muted">
          <p>First ODI 25 Nov(friday)|2:30pm</p>
          <p>Second ODI 27 NOV(sunday)|2:30pm</p>
          <p>thired ODI 30th NOV(Widnesday)</p>
          </small></p>
      </div>
    </div>
  </div>
</div>

    <h4 style={{marginLeft:-300}}>Pakistan News</h4>
<div class="card mb-3">
  <img src="https://media.gettyimages.com/id/1440911242/photo/icc-mens-t20-world-cup-final-previews.jpg?s=612x612&w=gi&k=20&c=DY2A8E_I4uuGWuxrLllVRJr3oAFke0-Bk-a7G_OpnaE=" class="card-img-top" alt="Wild Landscape"/>
  <div class="card-body">
    <h5 class="card-title"><b>Pakistan reached The final</b></h5>
    <p class="card-text">
      Pakistan national team reached final after a great semi final against 
      newzeland
    </p>
    <p class="card-text">
      <small class="text-muted">Last updated 3 mins ago</small>
    </p>
    <div class="card mb-3" style={{width: 620}} >
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:"200px"}} src="https://imgs.search.brave.com/0gNYM3_2k3EqNsm5yn_HNymniQZxS8aKs4F6FkeW8sM/rs:fit:1200:1010:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vYmF0dGlu/Z3dpdGhiaW1hbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDcvMjkxNzgw/LmpwZz9zc2w9MQ" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><b>Shaheen 'feeling better' after understanding appendectomy</b></h5>
        <p class="card-text">He is also currently undergoing a tow-week rehab for his knee injury</p>
        <p class="card-text"><small class="text-muted">
          </small></p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    
    
    division 1</div>
      <div className='col-md-4' style={{border:"1px solid black",borderRadius:"8px"}}>
        <RightSide/>
{/*         
      <div class="card">
  <h6 class="card-header">QAIDE-AZAM TROPHY</h6>
  <div class="card-body">
   <h6 style={{color:"red",marginLeft:-120}}>NOT CONVERED LIVE</h6>
   <p style={{marginLeft:-167,fontSize:20}}>Sindh</p>
   <p style={{marginLeft:150,marginTop:-43}}>(75overs) 349/1</p>
   <p style={{marginLeft:-115,fontSize:20}}>Balochistan</p>
   <p  style={{marginLeft:-100}}>Sindh chose to bat</p>
  </div>
</div>

<div class="card">
  <h6 class="card-header">QAIDE-AZAM TROPHY</h6>
  <div class="card-body">
   <h6 style={{color:"red",marginLeft:-120}}>NOT CONVERED LIVE</h6>
   <p style={{marginLeft:-150,fontSize:25}}>Sindh</p>
   <p style={{marginLeft:100,marginTop:-50}}>(75overs) 349/1</p>
   <p style={{marginLeft:-115,fontSize:25}}>Balochistan</p>
   <p  style={{marginLeft:-100}}>Sindh chose to bat</p>
  </div>
</div>


<div class="card">
  <h6 class="card-header">QAIDE-AZAM TROPHY</h6>
  <div class="card-body">
   <h6 style={{color:"red",marginLeft:-180}}>NOT CONVERED LIVE</h6>
   <p style={{marginLeft:-150,fontSize:20}}>southern punjab</p>
   <p style={{marginLeft:240,marginTop:-40}}>(74.3 ov) 270/3</p>
   <p style={{marginLeft:-170,fontSize:20}}>central punjab</p>
   <p  style={{marginLeft:-100}}>central Pngb chose to feiled</p>
  </div>
</div>
         */}
        
        
        
        division 2</div>
        <Footer/>
    </div>
    )
}
export default Lab;
