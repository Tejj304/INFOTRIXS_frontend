import React from "react";
import './category.css'
import 'bootstrap/dist/css/bootstrap.css';
import {FaMailBulk} from 'react-icons/fa';
import {FaHeadset} from 'react-icons/fa';
import {FaUserTie} from 'react-icons/fa';
import {FaTasks} from 'react-icons/fa';
import {FaChartLine} from 'react-icons/fa';
import {FaHandsHelping} from 'react-icons/fa';
import {FaBookReader} from 'react-icons/fa';
import {FaDraftingCompass} from 'react-icons/fa';

function Category() {
  
  return (
    <>



      <div className="container" style={{backgroundColor:'white' ,}}>
            <div className="container">
                <h1 className="text-center mb-5 wow" data-wow-delay="0.1s" style={{marginTop:20, textAlign : 'center'}}><b>Explore By Category</b></h1>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow " data-wow-delay="0.1s" >
                        <a className="cat-item rounded p-4" href="" style={{color: 'inherit' , textDecoration: 'none'}}>                            
                            <FaMailBulk style={{color: 'green', size: '50px'}}/>
                            <h6 className="mb-3" style={{fontSize:20}}><b>Marketing</b></h6>
                            <p className="mb-0" style={{fontSize:15}}>123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item rounded p-4" href="" style={{color: 'inherit' , textDecoration: 'none'}}>
                            <FaHeadset style={{color: 'green', size: '50px'}}/>
                            <h6 className="mb-3" style={{fontSize:20}} > <b>Customer Service</b> </h6>
                            <p className="mb-0" style={{fontSize:15}}>123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item rounded p-4" href="" style={{color: 'inherit' , textDecoration: 'none'}}>
                            <FaUserTie style={{color: 'green', size: '50px'}}/>
                            <h6 className="mb-3" style={{fontSize:20}}> <b>Human Resource</b> </h6>
                            <p className="mb-0" style={{fontSize:15}}>123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item rounded p-4" href="" style={{color: 'inherit' , textDecoration: 'none'}}>
                            <FaTasks style={{color: 'green', size: '50px'}}/>
                            <h6 className="mb-3"  style={{fontSize:20}}> <b>Project Management</b> </h6>
                            <p className="mb-0"  style={{fontSize:15}}>123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item rounded p-4" href="" style={{color: 'inherit' , textDecoration: 'none'}}>
                            <FaChartLine style={{color: 'green', size: '50px'}}/>
                            <h6 className="mb-3"  style={{fontSize:20}}> <b>Business Development</b> </h6>
                            <p className="mb-0" style={{fontSize:15}}>123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item rounded p-4" href="" style={{color: 'inherit' , textDecoration: 'none'}}>
                            <FaHandsHelping style={{color: 'green', size: '50px'}}/>
                            <h6 className="mb-3"  style={{fontSize:20}}> <b>Sales & Communication</b> </h6>
                            <p className="mb-0"  style={{fontSize:15}}>123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item rounded p-4" href="" style={{color: 'inherit' , textDecoration: 'none'}}>
                           <FaBookReader style={{color: 'green', size: '50px'}}/>
                            <h6 className="mb-3"  style={{fontSize:20}}>  <b>Teaching & Education</b> </h6>
                            <p className="mb-0"  style={{fontSize:15}}>123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item rounded p-4" href="" style={{color: 'inherit', textDecoration: 'none'}}>
                           <FaDraftingCompass style={{color: 'green', size: '50px'}}/>
                            <h6 className="mb-3"  style={{fontSize:20}}> <b>Design & Creative</b> </h6>
                            <p className="mb-0"  style={{fontSize:15}}>123 Vacancy</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Category;