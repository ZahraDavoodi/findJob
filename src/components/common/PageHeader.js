import slide from "../../assets/image/slide.jpg"
export default function PageHeader ({title}){
 
    return(<>
    <div className="container-fluid rounded-bottom zzzzzzzzzz" 
    
    style={{"height": "200px",
     "background-image": `url("${slide}")`, 
     "background-repeat": "no-repeat", 
     "background-size": "cover"}}
    >
        <div className="container">
          <div className="row g-3 pt-5">
            <h1>   {title}    </h1>
        </div>
        </div>
      </div>
    </>)
    
    }



