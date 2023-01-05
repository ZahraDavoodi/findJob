
import { Header } from "../common/Header"
import { SearchTop } from "../common/SearchTop"

import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../../features/Movie"
import { Footer } from "../common/Footer";
import PageHeader from "../common/PageHeader";
function JobSeeker (){

   
return(<>
<Header/>

<PageHeader title="مشخصات من " />

      <div className="container">
        <form action="/action_page.php">
            <div className="row">
                <div className="form-group p-3 col-md-2">
                    <input type="file" name="profile_photo" id="profile_photo" hidden=""/>
                    <label for="profile_photo" className="fa fa-user-o border rounded fa-5x p-5"></label>
                </div>
                <div className="col-md-8">
                    <div className="row pt-4">
                        <div className="form-group p-3 col-md-6">
                            <label for="text">نام:<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="نام را وارد کنید"/>
                          </div>
                          <div className="form-group p-3 col-md-6">
                            <label for="pwd">نام خوانوادگی:<span className="text-danger">*</span></label>
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
                            <label for="pwd">شماره تماس:<span className="text-danger">*</span></label>
                            <input type="password" placeholder="نام را وارد کنید" className="form-control" id="pwd"/>
                          </div>                  
                    </div>                        
                </div>
                <div className="form-group p-3 col-md-6">
                    <label for="text">ایمیل:<span className="text-danger">*</span></label>
                    <input type="text" placeholder="نام را وارد کنید" className="form-control" id="text"/>
                  </div>
                  <div className="form-group p-3 col-md-6">
                    <label for="text">شهر محل سکونت:<span className="text-danger">*</span></label>
                    <select name="" id="" className="form-control">
                        <option value="">تهران</option>
                        <option value="">مشهد</option>
                    </select>
                  </div>
                  <div className="form-group p-3 col-md-6">
                    <label for="text">نام محله:<span className="text-danger">*</span></label>
                    <input type="text" placeholder="نام را وارد کنید" className="form-control" id="text"/>
                  </div>
                  <div className="form-group p-3 col-md-6">
                    <label for="pwd">حقوق در خواستی به تومان:<span className="text-danger">*</span></label>
                    <input type="password" placeholder="نام را وارد کنید" className="form-control" id="pwd" />
                  </div>                  
                  <div className="form-group p-3 col-md-6">
                    <label for="text">میزان تحصیلات:<span className="text-danger">*</span></label>
                    <select name="" id="" className="form-control">
                        <option value="">کارشناسی</option>
                        <option value="">کارشناسی ارشد</option>
                    </select>
                  </div>
                  <div className="form-group p-3 col-md-6">
                    <label for="text">نوع همکاری:<span className="text-danger">*</span></label>
                    <select name="" id="" className="form-control">
                        <option value="">پاره وقت</option>
                        <option value="">تمام وقت</option>
                    </select>
                  </div>      
                  <label for="text">رشته تحصیلی در مقاطع مختلف:</label>
                  <div className="form-group p-3 col-md-2">
                    <label for="text">دیپلوم:<span className="text-danger">*</span></label>
                    <input type="text" placeholder="نام را وارد کنید" className="form-control" id="text" />
                  </div>
                  <div className="form-group p-3 col-md-2">
                    <label for="text">فوق دیپلوم:<span className="text-danger">*</span></label>
                    <input type="text" placeholder="نام را وارد کنید" className="form-control" id="text" />
                  </div>                  
                  <div className="form-group p-3 col-md-2">
                    <label for="text">لیسانس:<span className="text-danger">*</span></label>
                    <input type="text" placeholder="نام را وارد کنید" className="form-control" id="text" />
                  </div>
                  <div className="form-group p-3 col-md-2">
                    <label for="text">فوق لیسانس:<span className="text-danger">*</span></label>
                    <input type="text" placeholder="نام را وارد کنید" className="form-control" id="text" />
                  </div>
                  <div className="form-group p-3 col-md-2">
                    <label for="text">دکترا:<span className="text-danger">*</span></label>
                    <input type="text" placeholder="نام را وارد کنید" className="form-control" id="text" />
                  </div>                  
                <div className="form-group p-3 col-md-12">
                    <label for="exampleFormControlTextarea1" className="form-label">شرح کامل دوره ها و تخصصهای کسب شده  اعم از اینکه مرتبط با نوع شغل مورد درخواست باشند یا نباشند.<span className="text-danger">*</span></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>   
                <div className="form-group p-3 col-md-12">
                    <label for="exampleFormControlTextarea1" className="form-label">شرح کامل سوابق کاری<span className="text-danger">*</span></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div> 
                <div className="form-group p-3 col-md-12">
                    <label for="exampleFormControlTextarea1" className="form-label">توضیخات در مورد علائق شغلی و خصوصیات فردی<span className="text-danger">*</span></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default JobSeeker