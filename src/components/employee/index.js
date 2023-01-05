
import { Header } from "../common/Header"


import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../../features/Movie"
import { Footer } from "../common/Footer";
import PageHeader from "../common/PageHeader";
function Employee (){
 
return(<>
<Header/>
<PageHeader title="مشخصات شرکت "/>
<div className="container my-5">
        <div className="row">
            <div className="form-group p-3 col-md-2">
                <input type="file" name="profile_photo" id="profile_photo" hidden="" />
                <label htmlFor="profile_photo" className="fa fa-user-o border rounded fa-5x p-5"></label>
            </div>
            <div className="col-md-8">
                <div className="row pt-4">
                    <div className="form-group p-3 col-md-6">
                        <label htmlFor="text">نام:<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="نام را وارد کنید" />
                      </div>
                      <div className="form-group p-3 col-md-6">
                        <label htmlFor="pwd">شماره تماس:<span className="text-danger">*</span></label>
                        <input type="password" placeholder="نام را وارد کنید" className="form-control" id="pwd" />
                      </div>  
                      <div className="form-group p-3 col-md-6">
                        <label htmlFor="text">ایمیل:<span className="text-danger">*</span></label>
                        <input type="text" placeholder="نام را وارد کنید" className="form-control" id="text" />
                      </div>
                      <div className="form-group p-3 col-md-6">
                        <label htmlFor="text">نام محله:<span className="text-danger">*</span></label>
                        <input type="text" placeholder="نام را وارد کنید" className="form-control" id="text"/>
                      </div>                                      
                </div>                        
            </div>
            <div className="form-group p-3 col-md-12">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">توضیحات درمورد شرکت.<span className="text-danger">*</span></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>   
        </div>
        <div className="col-md-12 pb-5">
            <button type="submit" className="btn btn-primary">ثبت</button>
            <button type="submit" className="btn btn-danger">انصراف</button>                
        </div>        
    </div>
<Footer/>
</>)

}

export default Employee