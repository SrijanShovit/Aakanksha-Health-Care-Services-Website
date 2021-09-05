import React from 'react'

const Footer = () => {
    return (
        <>
             <footer className="page-footer  pt-4 bg-dark">
        <div className="container text-center text-md-left mt-5">
          <div className="row">
            <div className="col-md-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">About</h6>
              <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '125px', height: '2px'}} />
              <p className="mt-2">AAKANKSHA is an MSME consumer service E-commerce company started with the intention of making
                people's life more comfortable. We provide a door-to-door delivery service facility .We provide a wide range
                of services and products.</p>
            </div>
            <div className="col-md-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Product</h6>
              <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '85px', height: '2px'}} />
              <ul className="list-unstyled">
                <li className="my-2"><a href="#">Medical Safety Product</a></li>
                <li className="my-2"><a href="#">Nutritious Product</a></li>
                <li className="my-2"> <a href="#">Top Medicine Brands</a></li>
              </ul>
            </div>
            <div className="col-md-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '85px', height: '2px'}} />
              <ul className="list-unstyled">
                <li className="my-2"><a href="#">Knock Knock Medico</a></li>
                <li className="my-2"><a href="#">Doctors' Consultation</a></li>
                <li className="my-2"><a href="#">Medical Camp Location</a></li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '75px', height: '2px'}} />
              <ul className="list-unstyled">
                <li className="my-2"> <i className="fa fa-home  mr-3" aria-hidden="true" /> Delhi,India</li>
                <li className="my-2"><i className="fa fa-envelope" aria-hidden="true" /> helthcare@gmail.com</li>
                <li className="my-2"><i className="fa fa-phone" aria-hidden="true" /> + 01 234 567 88</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          <p>Terms and conditions</p>
          <p>© Copyright@2021
            <a href="#">Helthcare.com.All Rights Reserved</a></p>
        </div>
      </footer>
        </>
    )
}

export default Footer
