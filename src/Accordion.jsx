import React, { useState } from 'react';
import './index.css';
import { questions } from './AccordionData';
import MyAccordion from './MyAccordion';


const Accordion=()=>{
       const [Data, setData]=useState(questions);
    return(
        <>
        
        <section className="center_div">
          <h1 style={{textAlign:"center" ,fontSize:"32px",marginBottom:"40px"}}>React Interview Questions</h1>
          {
              Data.map((currElem)=>{
                  const {id}=currElem;
                    return <MyAccordion key={id} {...currElem} />
              })
          }
        </section>

        </>
    )

}
export default Accordion;