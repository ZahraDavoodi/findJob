import { useState } from "react"
import slide from './../../assets/image/slide.jpg'
 export function SearchTop(){
    
   
   return (

    <div className="container-fluid rounded-bottom" style={{height: '200px',  backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundImage:'url('+slide+')' }}>
    <div className="container">
      <div className="row g-3 pt-5">
        <div className="col-sm-4">
          <label for="firstName" className="form-label">انتخاب شهر</label>
          <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
          <div className="invalid-feedback">
            Valid first name is required.
          </div>
        </div>
    
        <div className="col-sm-4">
          <label for="lastName" className="form-label">نوع آگهی</label>
          <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
          <div className="invalid-feedback">
            Valid last name is required.
          </div>
        </div>
      <div className="col-sm-3">
          <label for="lastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
          <div className="invalid-feedback">
            Valid last name is required.
          </div>
        </div>     
        <div className="col-sm-3">
          <label for="lastName" className="form-label"> </label>
          <button className="btn btn-primary col-md-12 mt-2"> جستجو</button>
        </div>      
    </div>
    </div>
    </div>
   );

 }