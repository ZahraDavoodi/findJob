import { useState } from "react"
import  {Link } from 'react-router-dom';
 export function Header(){
  const [toggleDropUser,setToggleDropUser]=useState(false)
  const [toggleOffcanvas,setToggleOffcanvas]=useState(false)
  const [toggleEmployeeModal,seTtoggleEmployeeModal]=useState(false)
  const [toggleEmployerModal,seTtoggleEmployerModal]=useState(false)
  const [toggleLoginModal,seTtoggleLoginModal]=useState(false)
  
  function toggleDrop(){

     setToggleDropUser(!toggleDropUser);
  }
  function toggleOffcanvasFunc(){
    
     setToggleOffcanvas(!toggleOffcanvas);
  }

  function toggleEmployeeModalFunc(){
    
    
    seTtoggleEmployeeModal(!toggleEmployeeModal);
 }
 function toggleEmployerModalFunc(){
 
  seTtoggleEmployerModal(!toggleEmployerModal);
}
 function toggleLoginModalFunc(){
 
  seTtoggleLoginModal(!toggleLoginModal);
}

   return (<>

       <div className="header">


<nav className="navbar bg-light sticky-top">
  <div className="container">
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link"  onClick={e =>toggleOffcanvasFunc(e)} role="button" aria-controls="offcanvasExample"><span className="fa fa-align-right fa-2x text-muted pt-2"></span></Link> 
      </li>

      <li className="nav-item">
        <Link className="nav-link active"aria-current="page" onClick={e =>toggleEmployeeModalFunc(e)}><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#employeeModal">
          ثبت کارجو
        </button></Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link active"aria-current="page" onClick={e =>toggleEmployerModalFunc(e)}><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#employerModal">
          ثبت کارفرما
        </button></Link>
      </li>      
    </ul>   
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active"aria-current="page" onClick={e =>toggleLoginModalFunc(e)}><button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
          ورود
        </button></Link>
        
      </li>   
      <li class="nav-item">
            <div class="dropdown ">
              <button type="button" className="btn btn-primary dropdown-toggle"  onClick={e =>toggleDrop(e)}>
              علی محمدی
              </button>
              <div  className={`dropdown-menu  p-2 ${toggleDropUser ? "show" : ""}`} >
                
              <li><Link to={"/jobseeker/"}>مشخصات من</Link></li>
              <li> <Link to={"/requests"}>در خواستی های من</Link></li>
              <li><Link to={""}>خروج</Link></li>

            </div>
            </div>
            
          </li>
          <li class="nav-item">
            <div class="dropdown">
            <button type="button" className="btn btn-primary dropdown-toggle"  onClick={e =>toggleDrop(e)}>
             تفریحات 5 قاره
              </button>
              <div  className={`dropdown-menu  p-2 ${toggleDropUser ? "show" : ""}`} >
              <li><Link to={"/employee"}>مشخصات شرکت</Link></li>
              <li><Link to={"/new-adv"}>آگهی جدید</Link></li>
              <li><Link to={"/listadv"}>لیست آگهی ها</Link></li>
              <li><Link to={"/list-jobseeker"}>لیست کارجو</Link></li>
              <li><Link to={"/requests"}>خروج</Link></li>

              </div>
            </div>
            
          </li>
    </ul>      
  </div>
</nav>   
 
     </div>
     <div className={`offcanvas offcanvas-start ${toggleOffcanvas ? "show" : ""}`}   tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
     <div class="offcanvas-header">
       <h5 class="offcanvas-title" id="offcanvasExampleLabel">دسته بندی ها</h5>
       <button type="button" class="btn-close" onClick={e =>toggleOffcanvasFunc(e)}  data-bs-dismiss="offcanvas" aria-label="Close"></button>
     </div>
     <div class="offcanvas-body">
       <div class="border p-3">
         <span class="">شهر</span>
         <hr/>
        <div><Link to={"/category"}>تهران</Link></div>
        <div><Link to={"/category"}>مشهد</Link></div>
        <div><Link to={"/category"}>اصفهان</Link></div>
       </div>        
       <div class="border p-3">
         <span class="">استخدام</span>
         <hr/>
        <div><Link to={"/category"}>حسابدار</Link></div>
        <div><Link to={"/category"}>برنامه نویسی</Link></div>
        <div><Link to={"/category"}>منشی</Link></div>
       </div>  
       <div class="border p-3">
         <span class="">پروژه دور کاری</span>
         <hr/>
        <div><Link to={"/category"}>مقاله نویسی</Link></div>
        <div><Link to={"/category"}>برنامه نویسی</Link></div>
        <div><Link to={"/category"}>گرافیک</Link></div>
       </div>    
       <div class="border p-3">
         <span class="">استخدام دورکاری</span>
         <hr/>
        <div><Link to={"/category"}>مقاله نویسی</Link></div>
        <div><Link to={"/category"}>برنامه نویسی</Link></div>
        <div><Link to={"/category"}>گرافیک</Link></div>
       </div> 
       <div class="border p-3">
         <span class="">آماده بکار</span>
         <hr/>
        <div><Link to={"/category"}>مقاله نویسی</Link></div>
        <div><Link to={"/category"}>برنامه نویسی</Link></div>
        <div><Link to={"/category"}>گرافیک</Link></div>
       </div>                       
     </div>
   </div>


   {/* modals */}
   <div onClick={e =>toggleEmployeeModalFunc(e)}  className={`modal fade ${toggleEmployeeModal ? "show d-block bg-opacity-50 bg-dark" : ""}`}  id="employeeModal" aria-modal="true" role="dialog" >
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">کارجو عزیز</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={e =>toggleEmployeeModalFunc(e)}></button>
      </div>

     
      <div class="modal-body">
        <h5>اطاعات خود را وارد کنید</h5>
        <div class="col-sm-12">
          <label for="firstName" class="form-label">نام و نام خانوادگی</label>
          <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
          <div class="invalid-feedback">
            Valid first name is required.
          </div>
        </div>        
       
        <ul class="nav nav-tabs py-3" role="tablist">
          <li class="nav-item">
            <Link class="nav-link active" data-bs-toggle="tab" href="#home">شماره تماس</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" data-bs-toggle="tab" href="#menu1">ایمیل</Link>
          </li>
        </ul>   
      
        <div class="tab-content">
          <div id="home" class="container tab-pane active"><br/>
          <div class="col-sm-12">
            <input type="text" class="form-control" id="firstName" placeholder="شماره تماس  خود را وارد کنید." value="" required=""/>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>    
          </div>
          <div id="menu1" class="container tab-pane fade"><br/>
            <div class="col-sm-12">
              <input type="text" class="form-control" id="firstName" placeholder="ایمیل خود را وارد کنید." value="" required=""/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>  
          </div>
          <button class="btn btn-primary col-12 mt-5"> دریافت کد تائید</button>
        </div>          
      </div>
     

    </div>
  </div>
</div>


 {/* modals employer */}
 <div onClick={e =>toggleEmployerModalFunc(e)} className={`modal fade ${toggleEmployerModal ? "show d-block bg-opacity-50 bg-dark" : ""}`}   id="employerModal">
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">کارفرما عزیز</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={e =>toggleEmployerModalFunc(e)}></button>
      </div>

      
      <div class="modal-body">
        <h5>اطاعات خود را وارد کنید</h5>
        <div class="col-sm-12">
          <label for="firstName" class="form-label">نام و نام خانوادگی</label>
          <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
          <div class="invalid-feedback">
            Valid first name is required.
          </div>
        </div>        
     
        <ul class="nav nav-tabs py-3" role="tablist">
          <li class="nav-item">
            <Link class="nav-link active" data-bs-toggle="tab" href="#home">شماره تماس</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" data-bs-toggle="tab" href="#menu1">ایمیل</Link>
          </li>
        </ul>   
        
        <div class="tab-content">
          <div id="home" class="container tab-pane active"><br/>
          <div class="col-sm-12">
            <input type="text" class="form-control" id="firstName" placeholder="شماره تماس  خود را وارد کنید." value="" required=""/>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>    
          </div>
          <div id="menu1" class="container tab-pane fade"><br/>
            <div class="col-sm-12">
              <input type="text" class="form-control" id="firstName" placeholder="ایمیل خود را وارد کنید." value="" required=""/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>  
          </div>
          <button class="btn btn-primary col-12 mt-5"> دریافت کد تائید</button>
        </div>          
      </div>
    

    </div>
  </div>
</div>


 {/* login modal */}
<div onClick={e =>toggleLoginModalFunc(e)} className={`modal fade ${toggleLoginModal ? "show d-block bg-opacity-50 bg-dark" : ""}`}  id="loginModal">
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title"> ورود کاربر</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={e =>toggleLoginModalFunc(e)} ></button>
      </div>
      
      
        <ul class="nav nav-tabs py-3" role="tablist">
          <li class="nav-item">
            <Link class="nav-link active" data-bs-toggle="tab" href="#loginPhone">شماره تماس</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" data-bs-toggle="tab" href="#loginEmail">ایمیل</Link>
          </li>
        </ul>   
       
        <div class="tab-content">
          <div id="loginPhone" class="container tab-pane active"><br/>
          <div class="col-sm-12">
            <input type="text" class="form-control" id="firstName" placeholder="شماره تماس  خود را وارد کنید." value="" required=""/>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>    
          </div>
          <div id="loginEmail" class="container tab-pane fade"><br/>
            <div class="col-sm-12">
              <input type="text" class="form-control" id="firstName" placeholder="ایمیل خود را وارد کنید." value="" required=""/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>  
          </div>
          <button class="btn btn-primary col-12 mt-5 mb-2"> دریافت کد تائید</button>
        </div>          
      </div>
    </div>
  </div>
   </>
   );

 }