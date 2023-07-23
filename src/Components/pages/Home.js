import React from "react";
import img3 from '../../images/back_img3.jpeg';
import './home.css';
import Category from './Category'
import JobListing from "../../Filtering-JobListing/JobListing";


export const Home = () => {
  return (
    <>
    
    <div className="container-fluid p-0">
            <div className="owl-carousel header-carousel position-relative">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src={img3} alt="logo" style={{marginLeft:30 , marginRight:20}}/> 
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" >  
                                                                                                        {/* style={{}}  */}
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-3 text-black animated slideInDown mb-4" style={{fontWeight:'bold', textAlign:'center'}}>Find The Perfect Job That You Deserved</h1>
                                    <p className="fs-5 fw-medium mb-4 pb-2" style={{color:'blue', fontWeight:'bold', textAlign:'center'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque possimus voluptates, ut obcaecati quas nemo ex quia at dolorum sunt?
                                    </p>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            <div class="container" style={{marginBottom:20 , marginTop:20, backgroundColor:'blue', alignItems:'center'}}>
                <div class="row g-2">
                    <div class="col-md-10">
                        <div class="row g-2">
                            
                            <div class="col-md-4" >
                                <select class="form-select border-0" >
                                    <option selected>Keyword</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0">
                                    <option selected>Category</option>
                                    <option value="1">Category 1</option>
                                    <option value="2">Category 2</option>
                                    <option value="3">Category 3</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0">
                                    <option selected>Location</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-dark border-0 w-100 " style={{marginBottom:10}}>Search</button>
                    </div>
                </div>
            </div>


            <Category/>
            <JobListing/>
       
    </>
  );
};