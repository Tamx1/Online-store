import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Cart() {

    const [cart, setCart] = useState([]);

      useEffect(() => {
        axios
        .get("http://localhost:8080/cart")
        .then((response) => {
            console.log(response.data)
            setCart(response.data)
        })
        .catch((err) => {
        console.log(err);
        });
        }, []);
    
    const confirmOrder = (data) => {
        axios
            .post("http://localhost:8080/orders", { 
                "orders": 
                    {
                        "date": "2021-12-3"
                    },
                "product_id": data.product_id,
                "user_id":2
            })
            .then((response) => {
            console.log(response)
            })
            .catch((err) => {
            console.log(err);
            });
            // navigate("/favorite")
    }

    return (
        <>
        {  cart === undefined ? '' :
        <div class="parent">
            <h1 id="heading">Order Summary</h1>
            <div class="summary_card">
                {cart.map(element => {
                    return(
                        <>
                    <div className="item-cart">
                        <h4>{element.products.title}</h4>
                        <h4 className="price-left">
                            {element.products.price}
                        </h4>
                    </div>
                    <div className="buttons-cart">
                   <button type="button" id="cartbtn" onClick={()=>confirmOrder(element)}>
                           Confirm order
                   </button>
                    </div>
                    </>
                    )
                    
                })}
               {/* <div className="buttons-cart">
                   <button type="button" id="cartbtn" onClick={()=>confirmOrder(element)}>
                           Confirm order
                   </button>
               </div> */}
            </div>
        </div>
        }
        </>
    )
}

export default Cart;