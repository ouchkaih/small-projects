import React from 'react'
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react';
import {ChangeBalance} from './reducer/moneyMongerReducer';

function MoneyManager() {
    const accountData = useSelector((state) => state.money);
    const [transaction, setTransaction] = useState({text:"", amount:"",color:"danger"})
    const handleChange = (e)=>{
        if(e.target.name=== 'amount'){
            if(parseFloat(e.target.value)>0){
                setTransaction((oldVal) => ({
                  ...oldVal,
                  color:"text-success"
                }));
            }else{
               setTransaction((oldVal) => ({
                 ...oldVal,
                 color: "text-danger",
               })); 
            }
        }
         
        setTransaction((oldVal) => ({
          ...oldVal,
          [e.target.name]: e.target.value,
        }));
        
    } 
    const dispatch = useDispatch()
    const addTransaction =(e)=>{
        console.log(accountData.history)
        e.preventDefault()
        if(transaction.text !=="" && transaction.amount !==""){
            dispatch(ChangeBalance(transaction))
            setTransaction({ text: "", amount: "", color: "danger" });
        }
    }
  return (
    <div className='d-flex justify-content-center p-4'>
      <div className="">
        <div className='text-center'>
          <h6><b>Your Balance</b></h6>
          <h3>{accountData.balance}$</h3>
        </div>
        <div className="row mt-4 bg-light p-3">
          <div className="col-6 text-center border border-start-0 border-bottom-0 border-top-0 border-2">
            <h6>income</h6>
            <h6 className='text-success'>{accountData.income}$</h6>
          </div>
          <div className="col-6 text-center">
            <h6>expense</h6>
            <h6 className='text-danger'>{accountData.expense}$</h6>
          </div>
        </div>
        
        <div className='mt-3'>
            <h6>Add New Transaction</h6>
            <hr />
            <form action="">
                <label htmlFor="" className='form-label'>Text</label>
                <input type="text" className="form-control" placeholder='Enter text ...' name="text" onChange={handleChange} value={transaction.text}/>
                <label htmlFor="" className='form-label mt-3'>Amount (negative - Expense, positive + income)</label>
                <input type="number" placeholder='Enter Amount ..' className="form-control" name='amount' onChange={handleChange} value={transaction.amount}/>
                <button className="btn btn-primary mt-3 w-100" onClick={addTransaction}>Add transaction</button>
            </form>
        </div>
        <div className='pt-3'>
            <h6>History</h6>
            <hr />
            {
                accountData.history.map(item=>(
                    <div className="row ">
                        <div className="col-6">{item.text}</div>
                        <div className={item.color + " col-6 text-end"}>{item.amount}</div>
                    </div>
                ))
            }
          
          
        </div>
      </div>
    </div>
  );
}

export default MoneyManager