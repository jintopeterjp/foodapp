import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

const {getTotalCartAmount} = useContext(StoreContext) 

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fileds">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='last name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder=' Street' />
        <div className="multi-fileds">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fileds">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Contry' />
        </div>
        <input type="text" placeholder=' Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
              <h2>Cart Total</h2>
            <div>
              <hr />
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
         </div>
      </div>
    </form>
  )
}

export default PlaceOrder
