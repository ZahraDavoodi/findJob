
import { Header } from "../common/Header"
import { SearchTop } from "../common/SearchTop"

import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../../features/Movie"
import { Footer } from "../common/Footer";
import PageHeader from "../common/PageHeader";

function ListJobSeeker (){

    
return(<>
<Header/>
<PageHeader title="لیست اگهی ها"/>
<div className="container">
          <div className="col-sm-12">
            <table className="table table-responsive table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">تصویر</th>
                    <th scope="col">نام نام خانوادگی</th>
                    <th scope="col">شماره تماس</th>
                    <th scope="col">وضعیت</th>
                    <th scope="col">دلیل رد شدن</th>
                    <th scope="col">یاداشت جهت یاد آوری</th>
                    <th scope="col">جزئیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>                                                                                                                                          
                  <tr>
                    <th scope="row">8</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr> 
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="assest/image/company/banner-3.png" width="100" className="rounded-4 rounded" alt=""></img></td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>                                                                 
                </tbody>
              </table>
        </div>  




</div>
<Footer/>
</>)

}

export default ListJobSeeker