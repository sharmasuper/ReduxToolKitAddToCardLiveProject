import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DecreaseItemQuantity, IncreaseItemQuantity, RemoveItem, getCardTotal } from '../Store/Slices/CardSlices';

function CardPage() {


 

  const handleDecreaseQuantity = (event) => {
   dispatch(DecreaseItemQuantity(event))
  };
  
  const handleIncreaseQuantity = (event) => {
     dispatch(IncreaseItemQuantity(event))
  };
    const {card,totalQunently,totalPrice}= useSelector((state)=>state.AllCart)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCardTotal())
     },[card])
  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
              {/* totalQunently */}
                <h5 className="mb-0">Cart - {card.length} items</h5>
              </div>
              <div className="card-body">
                {/* Single item */}
               
              {  card.map((data)=>
                          <div className="row" key={data.id}>
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0"  >
                          {/* Image */}
                          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                            <img src={data.img} className="w-100" alt="Blue Jeans Jacket" />
                            <a href="#!">
                              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                            </a>
                          </div>
                          {/* Image */}
                        </div>
      
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          {/* Data */}
                          <p><strong>{data.title}</strong></p>
                          <p>Color: blue</p>
                          <p>Size: M</p>
                          <button type="button" className="btn btn-primary btn-sm me-1 mb-2"
                       onClick={()=>dispatch(RemoveItem(data.id))}    data-mdb-toggle="tooltip" title="Remove item" >
                            <i className="fas fa-trash"></i>
                          </button>
                          <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                            <i className="fas fa-heart"></i>
                          </button>
                          {/* Data */}
                        </div>
      
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* Quantity */}
                          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <button className="btn btn-primary px-3 me-2" onClick={()=>handleDecreaseQuantity(data.id)}>
                              <i className="fas fa-minus"></i>
                            </button>
                            {/* defaultValue={data.quantity}  */}
                            <div className="form-outline">
                              <input id="form1" min="0" name="quantity" 
                               value={data.quantity} 
                                onChange={()=>null}
                                type="number" className="form-control" />
                              <label className="form-label" htmlFor="form1">Quantity</label>
                            </div>
      
                            <button className="btn btn-primary px-3 ms-2" onClick={()=>handleIncreaseQuantity(data.id)}>
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          {/* Quantity */}
                           
                          {/* Price */}
                          <p className="text-start text-md-center">
                            <strong>$17.99</strong>
                          </p>
                          {/* Price */}
                        </div>
                        </div> 
                    
              )
                
                }
                
              

                <hr className="my-4" />

               
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <p><strong>Expected shipping delivery</strong></p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body">
                <p><strong>We accept</strong></p>
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp" alt="PayPal acceptance mark" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Total-Quantity
                    <span>{totalQunently}</span>
                  </li>
                  {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li> */}
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      {/* <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong> */}
                    </div>
                    <span><strong>{totalPrice}</strong></span>
                  </li>
                </ul>

                <button type="button" className="btn btn-primary btn-lg btn-block">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardPage;
