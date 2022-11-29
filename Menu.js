import { Link } from "react-router-dom";



function Menu() {

  return (
    <div > 
    <nav class="navbar navbar-expand-lg "
    
      style={{ backgroundColor: "#3B9AE1",height:"9vh" }} >
       {/* <img src={logo} alt="logo" style={{ width: "40px", height: "30px",marginLeft:"5vw",marginRight:"5vw" }} /> */}
      <div class="container-fluid">
      <img style={{width:100,height:50}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ESPNCricinfo.png/1200px-ESPNCricinfo.png" alt="none" />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" id="main" style={{fontSize:15}}>
            <Link to="/LiveScore" class="nav-link"  style={{color:"white"}}>Live Score</Link>

            </li>
            <li class="nav-item" style={{fontSize:15,marginLeft:20,}}>
            <Link to="/series" class="nav-link" style={{color:"white"}}>Series</Link>
            </li>
            <li class="nav-item" style={{fontSize:15,marginLeft:20}}>
            <Link to="/teams" class="nav-link" style={{color:"white"}}>Teams</Link>
            </li>
            <li class="nav-item" style={{fontSize:15,marginLeft:20,}}>
            <Link to="/news" class="nav-link" style={{color:"white"}}>News</Link>
            </li>
            <li class="nav-item" style={{fontSize:15,marginLeft:20,}}>
            <Link to="/features" class="nav-link" style={{color:"white"}}>Features</Link>
            </li>
            <li class="nav-item" style={{fontSize:15,marginLeft:20,}}>
            <Link to="/videos" class="nav-link" style={{color:"white"}}>Videos</Link>
            </li>
            <li class="nav-item" style={{fontSize:15,marginLeft:20,}}>
            <Link to="/stats" class="nav-link" style={{color:"white"}}>Stats</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Menu;