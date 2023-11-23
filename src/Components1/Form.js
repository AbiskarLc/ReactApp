import React from 'react'

const Form = (props) => {

   
    
        if (props.type==='textarea') {
            return(
                <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                name={props.name}
                value={props.value}
                onChange={props.handleOnChange}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3" required></textarea>
              </div>
            )
        }else{
            return (
                <>
                    
                  <div className="mb-3">
                              <label htmlFor="exampleInputName" className="form-label">
                               {props.title}
                              </label>
                              <input type={props.type} name={props.name} value={props.value} onChange={props.handleOnChange}  className="form-control" required/>
                            </div>
                            </>
                )
        }
    
  
}

export default Form
