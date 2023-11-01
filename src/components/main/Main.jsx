import React from 'react'
import "./main.css"
import { GiCheckMark} from 'react-icons/gi';
import {BsRobot} from 'react-icons/bs'

export default function Main() {
  return (
    <main>
      <div className="block1">
        <div className='left'>
            <h1> <i>Product, product, product</i></h1>
            <ul>
                <li><i>service</i></li>
                <li><i>service</i></li>
                <li><i>service</i></li>            
            </ul>
        </div>
        <div className='right'>
           <div className="box">
           <p><i>Discount up to </i></p>
            <p className='discount'><i>45%</i></p>
            <button><i>Buy now</i></button>
           </div>
        </div>
    </div>

    <div className="block2">
        <div className='rightLeft'>
           <div className="box">
           <p><i>Transaction Completed </i></p>
            <p className='discount'><i><GiCheckMark/></i></p>
            <button><i>Invoice</i></button>
           </div>
        </div>
        <div className='leftRight'>
            <h1> <i>Product, product, product</i></h1>
            <ul>
                <li><i>service</i></li>
                <li><i>service</i></li>
                <li><i>service</i></li>            
            </ul>
        </div>
    </div>

    <div className="block1">
        <div className='left'>
            <h1> <i>Product, product, product</i></h1>
            <ul>
                <li><i>service</i></li>
                <li><i>service</i></li>
                <li><i>service</i></li>            
            </ul>
        </div>
        <div className='right'>
           <div className="box">
           <p style={{fontSize:'25px', textAlign:'start'}}>Hi! <br />
            How i can help you?</p>
            <p className='bot' ><BsRobot/></p>
            
            <button><i>Buy now</i></button>
           </div>
        </div>
    </div>
    </main>
  )
}
