
import { Header } from "../common/Header"
import { SearchTop } from "../common/SearchTop"
import Item  from "./Item"
import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../../features/Movie"
import { Footer } from "../common/Footer";
function AdvetisementList (){

    // const [data,setData]=useState([])
    // const [loading ,setLoading]=useState(false)
//     const dispatch=useDispatch()
// let data=useSelector(state=>state?.movies?.movieList);
var loading=false;
let data=[
    {id:1,title:'حسابدار ',img:'', companyTitle:'تفریحات پنج قاره ', des:'هران - امور مالی حسابدار صندوق دار.',},
    {id:2,title:'حسابدار ',img:'', companyTitle:'تفریحات پنج قاره ', des:'هران - امور مالی حسابدار صندوق دار.',},
    {id:3,title:'حسابدار ',img:'', companyTitle:'تفریحات پنج قاره ', des:'هران - امور مالی حسابدار صندوق دار.',},
    {id:4,title:'حسابدار ',img:'', companyTitle:'تفریحات پنج قاره ', des:'هران - امور مالی حسابدار صندوق دار.',}

 ]
 


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

<SearchTop/>
<div className="container">
<div className="row">

{loading? <p className="loading">درحال دریافت داده می باشیم لطفا منتظر بمانید</p>: 

data ?data.map((i,index)=><Item key={index} id={i.id} img={i.img} title={i.title} companyTitle={i.companyTitle} des={i.des}/>):null}
</div></div>
<Footer/>
</>)

}

export default AdvetisementList