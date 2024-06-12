import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto ullam itaque architecto fugit iste praesentium dolores, nesciunt hic tenetur doloribus cumque, omnis fuga corporis numquam quidem veritatis nisi deserunt!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
             <h2>Company</h2>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
             </ul>
            </div>
            <div className="footer-content-right">
              <h2>Get in Touch</h2>
              <ul>
                <li>9497347739</li>
                <li>jinto.peter3@gmail.com</li>
              </ul>
            </div>
        </div>
          <hr />
          <p className='footer-content-right'>
            Copyright 2024 Tomato.com-Allright Reserved
          </p>
    </div>
  )
}
export default Footer
