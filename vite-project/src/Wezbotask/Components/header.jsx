import React from 'react'
import "./mains.css"
const Headerone = () => {
  return (
    <>
    <header>
    <div className="navcontainer">
        <div className="left">
            <img src="./logo.png" alt="logo" />
        </div>
        <div className="right">
           <a href=""> <p className='pp'>Browse fundraisers</p></a>
            <p className='pp'>Fundraiser for</p>
            <p className='pp'>How it works</p>
            <p className='pp'>|</p>
            <p className='pp'>search</p>
            
        </div>
        <div className='extremeright'>
            
            <p className='firstbutton'>Start a fundraiser</p>
            <p className='Secondbutton'>Sign in</p>
            
        </div>

    </div>

        <div className="catagories">
            <div className="maincata">
               <a href="" className="maincata"> Catagories</a>
            </div>
            <div className="catagorylist">
                <h6>Education</h6>
                <h6>Medical</h6>
                <h6>Women & Girls</h6>
                <h6>Animals</h6>
                <h6>Creative</h6>
                <h6>Food & Hunger</h6>
                <h6>Environment</h6>
                <h6>Children</h6>
                <h6>Memorial</h6>
                <h6>Community Development</h6>
                <h6>Others</h6>
                
            </div>
        </div>


    </header>
   
    </>
  )
}

export default Headerone