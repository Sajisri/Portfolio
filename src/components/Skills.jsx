import React from 'react'
import './nav.css'

function Skills() {
  return (
    <div id='skill' className='skills'>
     <div className='skill-title'>
        <h1>Skills</h1>
     </div>
     <div className='skill-section'>
        <div className='skill-right'>
            <div className='skill-para'>
            <p>Frontend Technology : HTML,CSS,JavaScript,React</p>
            </div>
            <div className='skill-para'>
            <p>Backend Technology : Java</p>
            </div>
            <div className='skill-para'>
            <p>DataBase Technology : SQL</p> 
            </div>
            <div className='skill-para'>
              <p>Technical Technology : Servicenow ITSM,System Troubleshooting,MS-office </p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Skills