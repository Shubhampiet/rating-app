import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
function App() {
  const[rating,setRating]=useState()
  const[comment,setComment]=useState("")

  const handleRatingChange=(star)=>{
    setRating(star)
  }
  useEffect(()=>{
      if(rating<3){setComment("poor")}
      else if(rating===3){setComment("fair")}
      else if(rating>3){setComment("Good")}
      else{setComment("not given")}
  },[rating])

  return (
    <div className="App">
    <h3>Your current rating score is: {rating}</h3>
<h1>Rating:{comment}</h1>
 <div>  {  [1,2,3,4,5].map((star)=>(
<span className="stars"
key={star}
onClick={()=>{handleRatingChange(star)}}
style={{color:star<=rating?'yellow':'gray',cursor:'pointer'}}
>
  <FontAwesomeIcon icon={faStar}/>
</span>
     ))}
     </div>
    </div>
  );
}

export default App;
