
import { Header } from "../common/Header"
import { SearchTop } from "../common/SearchTop"

import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../../features/Movie"
import { Footer } from "../common/Footer";
import PageHeader from "../common/PageHeader";
function ListAdv (){

    
return(<>
<Header/>
<PageHeader title="لیست اگهی ها"/>
<div className="container">
          <div className="col-sm-12">
            <table className="table table-responsive table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">کد آگهی</th>
                    <th scope="col">عنوان آگهی</th>
                    <th scope="col">وضعیت</th>
                    <th scope="col">تاریخ شروع نمایش</th>
                    <th scope="col">تاریخ مسدودی</th>
                    <th scope="col">تعداد بازدید</th>
                    <th scope="col">تعداد رزومه دریافتی</th>
                    <th scope="col">جزئیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>                                                                                                                                          
                  <tr>
                    <th scope="row">8</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-warning"><span className="fa fa-eye text-primary"></span></button></td>
                  </tr> 
                  <tr>
                    <th scope="row">10</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
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

export default ListAdv