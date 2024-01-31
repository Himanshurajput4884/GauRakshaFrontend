import React from "react";
import { useSearchParams } from "react-router-dom";
import "./PaymentSuccess.css";


const PaymentSuccess = () =>{

    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get('reference');

    return (
        <>
            <div className="payment-success-container">
                <div className="payment-success-inner">
                    <div className="payment-success-heading"> Successful Payment </div>
                    <div> Reference Id: {referenceNum} </div>
                </div>
            </div>
        </>
    )
}



export default PaymentSuccess;