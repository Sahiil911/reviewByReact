import People from "./data";
import { FaChevronLeft, FaChevronCircleRight, FaQuoteRight, FaChevronRight } from 'react-icons/fa';


import React, { useState } from "react";
const App = () => {

  const[index, setIndex]= useState(0);
  const{id, name, job, image, text}= People[index];

const nextPerson=()=>{
setIndex((currIndex)=>{
  const newIndex= currIndex +1;
  if(newIndex>People.length-1){
    return 0;
  }
 return newIndex;
})}

const prevPerson=()=>{
setIndex((currIndex)=>{
  const newIndex = currIndex-1;
  if(newIndex<0){
    return People.length-1;
  }
  return (newIndex);
})
}

  return(
    <main>
      <article className='review' key={id}>
        <div className="img-container">
      <img className='person-img' src={image}/>
      <span className="quote-icon"><FaQuoteRight/></span>
        </div>
      </article>
    <div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    <button className="prev-btn" type="btn" onClick={prevPerson}><FaChevronLeft/></button>
    <button className="next-btn" type="btn" onClick={nextPerson}><FaChevronRight/></button>

    </div>
   
    </main>
  )
};
export default App;
