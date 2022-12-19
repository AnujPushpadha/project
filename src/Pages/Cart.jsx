import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteitem } from '../redux/slice'
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orderArray = useSelector((state) => state.slice);
    const [total, setTotal] = useState();
    // console.log(orderArray)
    const handledelete = (i) => {

        dispatch(deleteitem(i));


    };

    useEffect(() => {
        setTotal(
            orderArray.reduce(
                (acc, curr) => acc + Number(curr.price),
                0
            )
        );
    }, [orderArray]);

    const orderEvent = () => {
        navigate("/");
        alert("Order Placed");

    }

    return (
        <>
            <main>
                {orderArray.map((item, i) => (

                    <div key={item.id} className='item'>
                        <img src={item.image} alt='food' />
                        <div className='item-head_desc'>
                            <p className='head_desc-name'>{item.name}</p>
                            <p className='head_desc-info'>
                                <small>{item.description}</small>
                            </p>
                        </div>
                        <div className='item-foot_desc'>
                            <span className='foot_desc-price'>₹{item.price}</span>


                            <button onClick={() => handledelete(i)}  >
                                Remove
                            </button>



                        </div>
                    </div>
                ))}

            </main>

            <div className="thaliItems">
                <table
                    className="table table-light"
                    style={{ width: "70%", margin: " 50px auto auto auto", backgroundColor: "yellow", boxShadow: " 0 0 10px rgba(14, 13, 13, 0.959)" }}
                >
                    <thead>
                        <tr>
                            <th>Index No</th>
                            <th>Image</th>
                            <th>Name</th>

                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {orderArray.map((ele, index) => {
                            return (
                                <tr key={ele.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={ele.image}
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "50px", height: "50px" }}
                                        />
                                    </td>
                                    <td>{ele.name}</td>

                                    <td>
                                        <span>total {ele.price}</span>
                                    </td>

                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handledelete(index)}
                                        >
                                            remove
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td></td>

                            <td>Rs-{total}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <button
                className="btn btn-success "
                style={{ float: "right", marginRight: "15%" }}
                onClick={orderEvent}
            >
                Order Now
            </button>
        </>

    )
}

export default Cart