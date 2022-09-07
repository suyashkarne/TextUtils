import React, { useState } from 'react'

export default function About() {
    const [btnText, setbtnText] = useState("Enable Dark Mode")
    const [myStyle, setmyStyle] = useState({color:'black',backgroundColor:'white'})
    const toggleStyle=()=>{
        if(myStyle.color==='black')
        {
            setmyStyle({color:'white',backgroundColor:'black',border:'1px solid white'})
            setbtnText("Enable Light Mode")
        }
        else
        {
            setmyStyle({color:'black',backgroundColor:'white'})
            setbtnText("Enable Dark Mode")
        }
    }
  return (
    <div className='container' style={myStyle}><div className="accordion" id="accordionExample">
        <h1 className='my-3'>About Us</h1>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
          <strong>Analyze your text</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Text utils gives you a way to analyze your text quickly and efficiently
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
          <strong>Free to use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Text Utils is a free character counter tool that provides instant results
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
          <strong>Browser Compatible</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Text utils is browser compatible so it works on all browsers
        </div>
      </div>
    </div>
  </div>
  <button className="btn btn-primary my-4" onClick={toggleStyle}>{btnText}</button>
  </div>
  )
}
