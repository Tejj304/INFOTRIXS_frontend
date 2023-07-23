import React from 'react' 
import cognizant1 from '../images/cognizant1.png';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa';
import {FaMoneyBillAlt} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {FaCalendarAlt} from 'react-icons/fa';



    


const MenuCard = ( {menuData} ) => {
    console.log(menuData);

  return (
    <>
      <div className="container-xxl py-5" style={{backgroundColor:'white' , marginTop:20,}}>
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s"> <b>Job Listing</b> </h1>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                <h6 className="mt-n1 mb-0" style={{color: 'black' , textDecoration: 'none' , fontSize:25}} >All</h6>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                <h6 className="mt-n1 mb-0" style={{color: 'black' , textDecoration: 'none' , fontSize:25}} >Full Time</h6>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                <h6 className="mt-n1 mb-0"  style={{color: 'black' , textDecoration: 'none' , fontSize:25}} >Part Time</h6>
                            </a>
                        </li>
                    </ul>
                    
                    <div className="tab-content">

                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={cognizant1} alt="" style={{width: 80 , height: 80}} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3"> 
                                            <b>Software Engineer</b> </h5>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaMapMarkerAlt style={{color:'green'}} /> New York, USA</span>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaClock style={{color:'green'}}/> Full Time</span> 
                                            <span className="text-truncate me-0" style={{fontSize:15}}> <FaMoneyBillAlt style={{color:'green'}}/> $123 - $456</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href="" style={{backgroundColor:'lightgreen'}}> <FaHeart style={{borecolordr:'green'}}/> </a>
                                            <a className="btn btn-primary" href="" style={{}}>Apply Now</a>
                                        </div>
                                        <small className="text-truncate" style={{fontSize:15}}> <FaCalendarAlt style={{color:'green' , fontSize:13}}/> Date Line: 01 Jan, 2045 </small>
                                    </div>
                                </div>
                            </div>

                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={cognizant1} alt="" style={{width: 80 , height: 80}} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3"> 
                                            <b>Marketing Manager</b> </h5>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaMapMarkerAlt style={{color:'green'}} /> New York, USA</span>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaClock style={{color:'green'}}/> Full Time</span> 
                                            <span className="text-truncate me-0" style={{fontSize:15}}> <FaMoneyBillAlt style={{color:'green'}}/> $123 - $456</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href="" style={{backgroundColor:'lightgreen'}}> <FaHeart style={{borecolordr:'green'}}/> </a>
                                            <a className="btn btn-primary" href="" style={{}}>Apply Now</a>
                                        </div>
                                        <small className="text-truncate" style={{fontSize:15}}> <FaCalendarAlt style={{color:'green' , fontSize:13}}/> Date Line: 01 Jan, 2045 </small>
                                    </div>
                                </div>
                            </div>

                
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={cognizant1} alt="" style={{width: 80 , height: 80}} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3"> 
                                            <b>Wordpress Developer</b> </h5>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaMapMarkerAlt style={{color:'green'}} /> New York, USA</span>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaClock style={{color:'green'}}/> Full Time</span> 
                                            <span className="text-truncate me-0" style={{fontSize:15}}> <FaMoneyBillAlt style={{color:'green'}}/> $123 - $456</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href="" style={{backgroundColor:'lightgreen'}}> <FaHeart style={{borecolordr:'green'}}/> </a>
                                            <a className="btn btn-primary" href="" style={{}}>Apply Now</a>
                                        </div>
                                        <small className="text-truncate" style={{fontSize:15}}> <FaCalendarAlt style={{color:'green' , fontSize:13}}/> Date Line: 01 Jan, 2045 </small>
                                    </div>
                                </div>
                            </div>

                            <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                        </div>

                        

                        <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={cognizant1} alt="" style={{width: 80 , height: 80}} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3"> 
                                            <b>Software Engineer</b> </h5>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaMapMarkerAlt style={{color:'green'}} /> New York, USA</span>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaClock style={{color:'green'}}/> Full Time</span> 
                                            <span className="text-truncate me-0" style={{fontSize:15}}> <FaMoneyBillAlt style={{color:'green'}}/> $123 - $456</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href="" style={{backgroundColor:'lightgreen'}}> <FaHeart style={{borecolordr:'green'}}/> </a>
                                            <a className="btn btn-primary" href="" style={{}}>Apply Now</a>
                                        </div>
                                        <small className="text-truncate" style={{fontSize:15}}> <FaCalendarAlt style={{color:'green' , fontSize:13}}/> Date Line: 01 Jan, 2045 </small>
                                    </div>
                                </div>
                            </div>

                

                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={cognizant1} alt="" style={{width: 80 , height: 80}} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3"> 
                                            <b>Product Engineer</b> </h5>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaMapMarkerAlt style={{color:'green'}} /> New York, USA</span>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaClock style={{color:'green'}}/> Full Time</span> 
                                            <span className="text-truncate me-0" style={{fontSize:15}}> <FaMoneyBillAlt style={{color:'green'}}/> $123 - $456</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href="" style={{backgroundColor:'lightgreen'}}> <FaHeart style={{borecolordr:'green'}}/> </a>
                                            <a className="btn btn-primary" href="" style={{}}>Apply Now</a>
                                        </div>
                                        <small className="text-truncate" style={{fontSize:15}}> <FaCalendarAlt style={{color:'green' , fontSize:13}}/> Date Line: 01 Jan, 2045 </small>
                                    </div>
                                </div>
                            </div>

                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={cognizant1} alt="" style={{width: 80 , height: 80}} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3"> 
                                            <b>Wordpress Developer</b> </h5>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaMapMarkerAlt style={{color:'green'}} /> New York, USA</span>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaClock style={{color:'green'}}/> Full Time</span> 
                                            <span className="text-truncate me-0" style={{fontSize:15}}> <FaMoneyBillAlt style={{color:'green'}}/> $123 - $456</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href="" style={{backgroundColor:'lightgreen'}}> <FaHeart style={{borecolordr:'green'}}/> </a>
                                            <a className="btn btn-primary" href="" style={{}}>Apply Now</a>
                                        </div>
                                        <small className="text-truncate" style={{fontSize:15}}> <FaCalendarAlt style={{color:'green' , fontSize:13}}/> Date Line: 01 Jan, 2045 </small>
                                    </div>
                                </div>
                            </div>


                            <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                        </div>

                        <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={cognizant1} alt="" style={{width: 80 , height: 80}} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3"> 
                                            <b>Software Engineer</b> </h5>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaMapMarkerAlt style={{color:'green'}} /> New York, USA</span>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaClock style={{color:'green'}}/> Full Time</span> 
                                            <span className="text-truncate me-0" style={{fontSize:15}}> <FaMoneyBillAlt style={{color:'green'}}/> $123 - $456</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href="" style={{backgroundColor:'lightgreen'}}> <FaHeart style={{borecolordr:'green'}}/> </a>
                                            <a className="btn btn-primary" href="" style={{}}>Apply Now</a>
                                        </div>
                                        <small className="text-truncate" style={{fontSize:15}}> <FaCalendarAlt style={{color:'green' , fontSize:13}}/> Date Line: 01 Jan, 2045 </small>
                                    </div>
                                </div>
                            </div>

                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={cognizant1} alt="" style={{width: 80 , height: 80}} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3"> 
                                            <b>Marketing Manager</b> </h5>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaMapMarkerAlt style={{color:'green'}} /> New York, USA</span>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaClock style={{color:'green'}}/> Full Time</span> 
                                            <span className="text-truncate me-0" style={{fontSize:15}}> <FaMoneyBillAlt style={{color:'green'}}/> $123 - $456</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href="" style={{backgroundColor:'lightgreen'}}> <FaHeart style={{borecolordr:'green'}}/> </a>
                                            <a className="btn btn-primary" href="" style={{}}>Apply Now</a>
                                        </div>
                                        <small className="text-truncate" style={{fontSize:15}}> <FaCalendarAlt style={{color:'green' , fontSize:13}}/> Date Line: 01 Jan, 2045 </small>
                                    </div>
                                </div>
                            </div>

                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={cognizant1} alt="" style={{width: 80 , height: 80}} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3"> 
                                            <b>Wordpress Developer</b> </h5>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaMapMarkerAlt style={{color:'green'}} /> New York, USA</span>
                                            <span className="text-truncate me-3" style={{fontSize:15}}> <FaClock style={{color:'green'}}/> Full Time</span> 
                                            <span className="text-truncate me-0" style={{fontSize:15}}> <FaMoneyBillAlt style={{color:'green'}}/> $123 - $456</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href="" style={{backgroundColor:'lightgreen'}}> <FaHeart style={{borecolordr:'green'}}/> </a>
                                            <a className="btn btn-primary" href="" style={{}}>Apply Now</a>
                                        </div>
                                        <small className="text-truncate" style={{fontSize:15}}> <FaCalendarAlt style={{color:'green' , fontSize:13}}/> Date Line: 01 Jan, 2045 </small>
                                    </div>
                                </div>
                            </div>

                            <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


export default MenuCard

