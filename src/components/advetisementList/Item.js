import  {Link } from 'react-router-dom';

export default function({img,title,des,companyTitle,id}){
    
     return(
        <div className="col-sm-3 mt-5">
        <div className="card shadow">
          <img src="slide.jpg" className="card-img-top" alt="..."></img>
          <div className="card-body m-2">
            <h4 className="card-title">{title}</h4>
            <h6 className="card-title text-primary">{companyTitle} </h6>
            <p className="card-text">{des}</p>
            <Link className="btn btn-primary btn-sm" to={"/adv-detail/1"}>مشخصات من</Link>
            <a href="#" >جزئیات</a>
          </div>
        </div>
      </div>
     )
}