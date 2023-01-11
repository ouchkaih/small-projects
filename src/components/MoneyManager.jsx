import React from 'react'
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function MoneyManager() {
  return (
    <div className='d-flex justify-content-center p-4'>
      <div className="">
        <div className='text-center'>
          <h6>Your Balance</h6>
          <h3>$4000</h3>
        </div>
        <div className="row mt-4 bg-light p-3">
          <div className="col-6 text-center border border-start-0 border-bottom-0 border-top-0 border-2">
            <h6>income</h6>
            <h6 className='text-success'>500$</h6>
          </div>
          <div className="col-6 text-center">
            <h6>expense</h6>
            <h6 className='text-danger'>200$</h6>
          </div>
        </div>
        
        <div className='mt-3'>
            <h6>Add New Transaction</h6>
            <hr />
            <form action="">
                <label htmlFor="" className='form-label'>Text</label>
                <input type="text" className="form-control" placeholder='Enter text ...'/>
                <label htmlFor="" className='form-label mt-3'>Amount (negative - Expense, positive + income)</label>
                <input type="text" placeholder='Enter Amount ..' className="form-control" />
                <button className="btn btn-primary mt-3 w-100">Add transaction</button>
            </form>
        </div>
        <div className='pt-3'>
          <h6>History</h6>
          <hr />
          <div className="row">
            <div className="col-6">book</div>
            <div className="col-6 text-end">-555</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoneyManager