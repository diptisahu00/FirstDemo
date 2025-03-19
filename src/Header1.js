import React from 'react'
import './head.css'
import logo from './loginlogo.jpg'
import logo2 from './admin4.jpg'
import bgimg from './clg2.jpg'
import bgimg2 from './clg3.jpg'
import { Carousel } from 'antd'
function Header1() {
  return (
    <div>
    <div className="head">
      <div className="maind">
        <h1>Welcome to College Hiring Portal</h1>
      </div>
      <div className="head2">
        <div>
          <img src={logo} className="logo1" alt=""></img>
          <p>SignUp</p>
        </div>
        <div>
          <img src={logo2} className="logo1" alt=""></img>
          <p>Admin</p>
        </div>
      </div>
      
    </div>
    <div > 
    <Carousel autoplay autoplaySpeed={2000}>
<img src={bgimg} alt="" ></img>
<img src={bgimg2} alt=""></img>
    </Carousel>
    </div>
    </div>
  )

}

export default Header1