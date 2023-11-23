import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
   <section id="header" className=' d-flex justify-content-centre'>
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto my-5">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h2>{props.gesture}  <strong className='brand-name'>AbiskarLC</strong></h2>
                    <h5 className="my-3">
                        {props.text}
                    </h5>
                    <div className="mt-3">
                        <Link to={props.path} >
                        <button href="" className='btn-get-started'>{props.btnTxt}</button>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.img}  className="image-fluid animated" alt="" />
                </div>
            </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Home
