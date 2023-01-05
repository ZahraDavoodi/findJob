
import { Header } from "../common/Header"
import { SearchTop } from "../common/SearchTop"

import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../../features/Movie"
import { Footer } from "../common/Footer";
import PageHeader from "../common/PageHeader";
function AdvetisementList (){

 


    
return(<>
<Header/>
<PageHeader title="آگهی جدید"/>
<div className="container">
        <form action="/action_page.php">
            <div className="row">
                <div className="col-md-8">
                    <div className="row pt-4">
                        <div className="form-group p-3 col-md-6">
                            <label for="text">عنوان شغلی:<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="نام را وارد کنید"/>
                          </div>
                          <div className="form-group p-3 col-md-6">
                            <label for="pwd">دسته بندی شلغی:<span className="text-danger">*</span></label>
                            <input type="password" placeholder="نام را وارد کنید" className="form-control" id="pwd"/>
                          </div>
                          <div className="form-group p-3 col-md-6">
                            <label for="text">جنسیت:<span className="text-danger">*</span></label>
                            <select name="" id="" className="form-control">
                                <option value="">آقا</option>
                                <option value="">خانوم</option>
                            </select>
                          </div>
                          <div className="form-group p-3 col-md-6">
                            <label for="text">نوع همکاری:<span className="text-danger">*</span></label>
                            <select name="" id="" className="form-control">
                                <option value="">تمام وقت</option>
                                <option value="">پاره وقت</option>
                            </select>
                          </div>
                          <div className="form-group p-3 col-md-6">
                            <label for="pwd">حقوق به تومان:<span className="text-danger">*</span></label>
                            <input type="texr" placeholder="نام را وارد کنید" className="form-control" id="pwd"/>
                          </div>  
                          <div className="form-group p-3 col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">شرح موقعیت شغلی<span className="text-danger">*</span></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div> 
                        <div className="form-group p-3 col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">مهارت‌های مورد نیاز<span className="text-danger">*</span></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div> 
                        <div className="form-group p-3 col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">شرح وظایف<span className="text-danger">*</span></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>                                                                                                                    
                    </div>                        
                </div>                                                                    
            </div>
            <div className="col-md-12 pb-5">
                <button type="submit" className="btn btn-primary">ثبت</button>
                <button type="submit" className="btn btn-danger">انصراف</button>                
            </div>
          </form>
    </div>
<Footer/>
</>)

}

export default AdvetisementList