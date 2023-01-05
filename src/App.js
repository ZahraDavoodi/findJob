import {lazy, Suspense} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
const AdvetisementList=lazy(()=> import('./components/advetisementList/index'));
const AdvetisementDetail=lazy(()=> import("./components/AdvertismentDetail/index.js"));
const JobSeeker=lazy(()=> import("./components/jobseeker/index"));
const Requests=lazy(()=> import("./components/jobseeker/Requests"));

const Employee=lazy(()=> import("./components/employee/index"));
const ListAdv=lazy(()=> import("./components/employee/ListAdv.js"));
const ListJobSeeker=lazy(()=> import("./components/employee/ListJobSeeker.js"));
const NewAdv=lazy(()=> import("./components/employee/NewAdv.js"));




function App(){
  return (
    <div className="App">
       <Suspense  fallback={<p>loading.... please wait . !</p>}>
       <BrowserRouter>
        <Routes>
           
           <Route path="/" exact element={<AdvetisementList/>} />
           <Route path="adv-detail/:id" element={<AdvetisementDetail/>} />
           <Route path="jobseeker" element={<JobSeeker/>} />
           <Route path="requests" element={<Requests/>} />
           <Route path="employee" element={<Employee/>} />
           <Route path="listadv" element={<ListAdv/>} />
           <Route path="list-jobseeker" element={<ListJobSeeker/>} />
           <Route path="new-adv" element={<NewAdv/>} />
           <Route path="/category" exact element={<AdvetisementList/>} />
          
         

           
           


        </Routes>
       
       </BrowserRouter>
       </Suspense> 

       <div id="install_banner">
          <span>آیا مایل به نصب این اپلیکشن هستید ؟</span>
          <button id="yes">بله</button>
          <button id="no">خیر</button>
         </div>  
 </div>
   
  );
}

export default App;
