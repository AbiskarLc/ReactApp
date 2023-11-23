import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {

    const {img,title,desc} = props
  return (
    <div className="col-md-4 col-10 mx-auto">
    <div className="card">
<img src={img} className="card-img-top" height={"200px"} alt="..."/>
<div className="card-body">
 <h5 className="card-title">{title}</h5>
 <p className="card-text">{desc}</p>
 <Link to="/contact" className="btn btn-primary">Contact Us</Link>
</div>
</div>
    </div>
  )
}

export default Card;
