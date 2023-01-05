
import { Header } from "../common/Header"
import { SearchTop } from "../common/SearchTop"

import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../../features/Movie"
import { Footer } from "../common/Footer";
import PageHeader from "../common/PageHeader";
function Requests (){

    // const [data,setData]=useState([])
    // const [loading ,setLoading]=useState(false)
//     const dispatch=useDispatch()
// let data=useSelector(state=>state?.movies?.movieList);

// let data=[
//     {id:1,title:'حسابدار ',img:'', companyTitle:'تفریحات پنج قاره ', des:'هران - امور مالی حسابدار صندوق دار.',},
//     {id:2,title:'حسابدار ',img:'', companyTitle:'تفریحات پنج قاره ', des:'هران - امور مالی حسابدار صندوق دار.',},
//     {id:3,title:'حسابدار ',img:'', companyTitle:'تفریحات پنج قاره ', des:'هران - امور مالی حسابدار صندوق دار.',},
//     {id:4,title:'حسابدار ',img:'', companyTitle:'تفریحات پنج قاره ', des:'هران - امور مالی حسابدار صندوق دار.',}

//  ]
 


// const loading=useSelector(state=>state?.movies?.loading)


// console.log(loading);
// console.log(data);
// //in mount and pending phase data is an empty array 
// if(!Array.isArray(data)){
//     data=data.results
// }
// useEffect(()=>{
//         if(data){
//             dispatch(fetchMovie())
//         }

//     },[])

    
return(<>
<Header/>

<PageHeader title="درخواستی های من " />
<div className="container">
        <ul className="nav nav-tabs py-3" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#home">همه<span className="badge badge-secondary text-warning">100</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#menu1">ارسال به کارفرما<span className="badge badge-secondary text-warning">100</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#menu1">برسی شده<span className="badge badge-secondary text-warning">100</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#menu1">مصاحبه<span className="badge badge-secondary text-warning">100</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#menu1">استخدام<span className="badge badge-secondary text-warning">100</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#menu1">رد شده<span className="badge badge-secondary text-warning">100</span></a>
            </li>                                                      
          </ul>   
        
          <div className="tab-content">
            <div id="home" className="container tab-pane active"><br/>
            <div className="col-sm-12">
                <table className="table table-responsive table-sm">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">کد آگهی</th>
                        <th scope="col">عنوان آگهی</th>
                        <th scope="col">وضعیت</th>
                        <th scope="col">شرکت</th>
                        <th scope="col">تاریخ ارسال</th>
                        <th scope="col">توضیحات</th>
                        <th scope="col">مشاهد آگهی</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
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
            <div id="menu1" className="container tab-pane fade"><br/>
              <div className="col-sm-12">
                <input type="text" className="form-control" id="firstName" placeholder="ایمیل خود را وارد کنید." value="" required="" />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>  
            </div>
    </div>

 
</div>
<Footer/>
</>)

}

export default Requests