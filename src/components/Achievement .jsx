import React from 'react'
import './nav.css'
function Achievement () {
    const Achei=[
        {id:1,title:'Insta Award from Infosys based on the best Performance'},
        {id:2,title:'Infosys Certified React Devloper'},
        {id:3,title:'Infosys Certified junior Network admin Professional'},
        {id:4,title:'Infosys Certified Basic EUC Administartor'},
        {id:5,title:'Certified AWS-DGL-SAP on AWS'},
        {id:6,title:'Career edge certificate-TCS iON'},
        {id:7,title:'Secured 1st prize in state level Tamil oratorical competition'},
        {id:8,title:'Secured 2nd prize in state level Yoga competition'},
        {id:9,title:'Secured prize as runner in district carrom competition'},
        
       ];
  return (
    <div id='Achievment'   className='Achievment' >
        <div className='Achievment-title'>
            <h1>Achievement</h1>
        </div>
        <div className='acheivement-container'>
            {Achei.map((awards,index)=>{
                return <div key={index} className='format'>
                    <h3>{awards.id}</h3>
                    <h2>{awards.title}</h2>
                </div>
            })}

        </div>
    </div>
  )
}

export default Achievement 