import React from "react";
import './about.css'
import about1 from '../../images/about-11.jpeg';
import {FaCheck} from 'react-icons/fa'


export const About = () => {
  return (
    <div>
      
      <div className="container-xl py-5"  >
            <div className="container" style={{backgroundColor:'white' , marginTop:10 , marginBottom:20 }}>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="row g-0 about-bg rounded overflow-hidden">
                            
                                <img className="img-fluid w-100" src={about1} style={{marginLeft:5 , marginBottom:20 , marginTop:-52}}/>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4"> <b>We Help To Get The Best Job And Find A Talent !!!</b> </h1>
                        <p className="mb-4" style={{fontSize:20 , color:'black'}} >Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p style={{fontSize:20 , color:'black'}}> <FaCheck style={{color:'green' , fontSize:20}} /> Tempor erat elitr rebum at clita</p>
                        <p style={{fontSize:20 , color:'black'}}> <FaCheck style={{color:'green' , fontSize:20}} /> Aliqu diam amet diam et eos</p>
                        <p style={{fontSize:20 , color:'black'}}> <FaCheck style={{color:'green' , fontSize:20}} /> Clita duo justo magna dolore erat amet </p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="" style={{marginBottom:20}}>Read More</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};