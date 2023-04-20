import React from 'react'
import './detail.css'
export default function Detail(props) {
  let x=props.state?{color:"black"}:{color:"white"}
  return (
    <div className='detail'>
        <div className="profile">
          <div className="profiledetail">
    <div className="profileimage">
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
           <div className="name">
            <h3>KARAN ARORA</h3>
            <p>38 years old</p>
           </div>
          
    </div>
    <div className="profiledetailtype">
           <div className="nameType">
            <h4>height</h4>
            <p >185</p>
            </div>
            <div className="nameType">
            <h4>weight</h4>
            <p>83</p>
            </div>
            <div className="nameType">
            <h4>Blood type</h4>
            <p>A+</p>
            </div>
           </div>
            
          </div>
          <div className="profileinformation"style={props.state?{backgroundColor:"white"}:{backgroundColor:"black"}}>
            <div className="topprofileinformation" >
              <div className="wrapper">
                <h4>Phone Number</h4>
                <p style={x}>+44 7887 665 588</p>
              </div>
              <div className="wrapper">
                <h4>Email</h4>
                <p style={x}>karanarora@gmail.com</p>
              </div>
              <div className="wrapper">
                <h4>Passport</h4>
                <p style={x}>000345678</p>
              </div>
            </div>
            <div className="bottomprofileinformation">
              <div className="wrapper2">
              <h4>Card Number</h4>
                <p style={x}>1267678</p>
              </div>
              <div className="wrapper2">
              <h4>Medical Condition</h4>
                <p style={x}>Alergies,Asthma,Coronary Heart Disease</p>
              </div>
          
            </div>
          </div>
        </div>
        <div className="information">
          <div className="calendar">
            
  
      
       </div>
        </div>
    </div>
  )
}
