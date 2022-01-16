import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const MyAccordion = (props) => {
    const [show, setShow] = useState(false);
    return (
        <>

            <div className="myAccordion">
                {show ?    <Fab color="primary" aria-label="add" size="small" onClick={() => {
                    setShow(!show)
                }} >
                    <RemoveIcon />
                </Fab> : <Fab color="primary" aria-label="add" size="small" onClick={() => {
                    setShow(!show)
                }} >
                    <AddIcon />
                </Fab>}
                
                <h3 style={{ marginLeft: "10px" }}>{props.question}</h3 >
            </div>
            {show && <p className="para">{props.answer}</p>}


        </>
    )
}
export default MyAccordion;