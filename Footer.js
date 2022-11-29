import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
       
<footer class="text-center text-lg-start bg-white text-muted" >
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{backgroundColor:"#EFF5F5"}}>
    
    <div class="me-5 d-none d-lg-block" style={{backgroundColor:"#EFF5F5"}}>
      <span>Get connected with us on social networks:</span>
    </div>
  </section>
  <section class="" style={{backgroundColor:"#EFF5F5"}}>
    <div class="container text-center text-md-start mt-5" >
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"> 
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Key Series:
          </h6>
          <p> WBBL 2022</p>
         <Link to="/QEA"> <p>QEA trophy</p></Link>
          <p>Marsh Cup</p>
          <p>World Cup Super League</p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Quick Links
          </h6>
          <p>T20 Timeout</p>
          <p>Fantasy Pick</p>
          <p>ICC Rankings</p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            ESPNcricinfo Apps
          </h6>
          <p>Android Apps</p>
          <p>ios Apps</p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Follow ESPNcricinfo</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i>Instagram</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            Twitter
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i>Facebook</p>
          <p><i class="fas fa-print me-3 text-secondary"></i>YouTube</p>
        </div>
      </div>
    </div>
  </section>
  <div class="text-center p-4" style={{backgroundColor: "#D6E4E5"}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">ESPNcricinfo.com</a>
  </div>
</footer>
    </div>
  )
}
