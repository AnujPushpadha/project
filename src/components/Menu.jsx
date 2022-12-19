import React, { useState } from 'react'
import { data } from '../data'
import './Menu.css'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addtocart, deleteitem } from '../redux/slice'
const Menu = () => {

    const navigate = useNavigate();
    const reduxArray = useSelector((state) => state.slice)
    const dispatch = useDispatch()
    const [canAdd, setcanAdd] = useState(true)
    const handlecheckout = () => {
        if (reduxArray.length < 2) {
            alert("Add at least two items");

        } else {
            navigate("/cart");
        }
    };

    const addItem = (item) => {
        setcanAdd(false)
        dispatch(addtocart(item));

    };
    const remove = (id) => {
        setcanAdd(true)
        let index = 0;

        for (let i = 0; i < reduxArray.length; i++) {
            if (reduxArray[i].id === id) {
                index = i;
            }
        }
        dispatch(deleteitem(index));

    };
    return (
        <>
            <main>
                {data.map(item => (

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

                            {/* {canAdd ? (
                                <button onClick={() => addItem(item)}>
                                    Add Item
                                </button>
                            ) : (
                                <button onClick={() => remove(item.id)}  >
                                    Remove
                                </button>
                            )} */}
                            <button onClick={() => addItem(item)}>
                                Add Item
                            </button>




                        </div>
                    </div>
                ))}

            </main>

            <div>

                <button
                    className="btn btn-success "
                    style={{ margin: "20px 45% auto 45%" }}
                    onClick={handlecheckout}
                >
                    Check Out
                </button>


            </div>
        </>
    )
}

export default Menu