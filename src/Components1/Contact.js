import React,{useState} from "react";
import Form from "./Form";

const Contact = () => {
  const [value, setValue ] = useState({
    name:"",
    phone:"",
    email:"",
    msg:""
})

const handleOnChange = (e) =>{

    setValue((prev)=>{
       return {
        ...prev,
        [e.target.name] : [e.target.value]
       }
    })
}
  const handleOnSubmit = (e) =>{

  e.preventDefault();
    alert(`Hello  I am ${value.name}.My number is ${value.phone}, you can contact me via email with address ${value.email}.My message is ${value.msg}`);

    setValue({});
  }
  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Welcome Contact</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={handleOnSubmit}>
              <Form title="Full Name" type="text" value={value.name} name="name" handleOnChange={handleOnChange}/>
              <Form title="Phone No" type="text" name="phone" value={value.phone} handleOnChange={handleOnChange}/>
              <Form title="Email Address" type="email" name="email" value={value.email} handleOnChange={handleOnChange}/>
              <Form title="Message" type="textarea" name="msg" value={value.msg} handleOnChange={handleOnChange}/>
              
              <button type="submit" className="btn btn-outline-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
