import React, { useState } from "react";
import "./Donate.css";
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";
import Logo from "../../images/Cow_logo2.jpeg";
const URL = `https://gaushala-backend.onrender.com`;
// const URL = `http://localhost:8008`;

const Donate = () => {
  const [formData, setFormData] = useState({
    inputAmount: 0,
  });

  const handleOnClick = (e) => {
    setFormData({
      inputAmount: e.target.value,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitFormProceed = async () => {
    if (!formData.inputAmount) {
      toast.error("Fill all field.", {
        position:"top-center",
      })
      return;
    }
    try {
      const amount = formData.inputAmount;
      const {
        data: { key },
      } = await axios.get(`${URL}/payment/getkey`);

      console.log(key);

      const {
        data: { order },
      } = await axios.post(`${URL}/payment/checkout`, {
        amount,
      });


      const options = {
        key, 
        amount:order.amount,
        currency:"INR",
        name:"33 Koti Devi Devta",
        description:"Now for testing",
        image:Logo,
        order_id:order.id,
        callback_url:`${URL}/payment/paymentverification`,
        prefill:{
          name:"",
          email:"",
          contact:""
        },
        notes:{
          "address":"Rozorpay Corporate Office"
        },
        theme:{
          "color":"#121212"
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (err) {
      console.log("Error in proceeding payment: ", err);
      return;
    }
  };

  console.log(formData);

  return (
    <div className="donate-container">
      <ToastContainer/>
      <div className="donate-section1">
        <div className="donate-heading"> Donate </div>
      </div>
      <div className="donate-section2">
        <div className="donate-cont1">
          <div className="donate-form">
            <div className="donate-form-heading">
              You can Choose these amounts or can add manually.
            </div>
            <div className="donate-choice-btns">
              <button
                className="donate-amount-btn"
                value={11}
                onClick={handleOnClick}
              >
                {" "}
                11{" "}
              </button>
              <button
                className="donate-amount-btn"
                value={21}
                onClick={handleOnClick}
              >
                {" "}
                21{" "}
              </button>
              <button
                className="donate-amount-btn"
                value={51}
                onClick={handleOnClick}
              >
                {" "}
                51{" "}
              </button>
            </div>
            <input
              name="inputAmount"
              value={formData.inputAmount}
              onChange={handleChange}
            />
            <div className="donate-submit-btn">
              <button onClick={handleSubmitFormProceed}> Proceed </button>
            </div>
          </div>
        </div>
      </div>
      <div className="donate-section3">
        <div className="donate-section3-inner">
          <div className="donate-section3-heading">
            You can donate via Cheque / Demand Draft / Bank Transfers 
          </div>
          <div className="donate-section3-details">
            <span>Bank Details:</span>
            <span>Beneficiary: </span>
            <span>Bank: </span>
            <span>Branch: </span>
            <span>Branch Code: </span>
            <span>Savings Account no: </span>
            <span>IFSC Code: </span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
