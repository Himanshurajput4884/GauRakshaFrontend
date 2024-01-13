import React, { useState } from "react";
import "./Donate.css";
import axios from "axios";
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
      alert("Enter the amount");
      return;
    }
    try {
      const amount = formData.inputAmount;
      const {
        data: { key },
      } = await axios.get("http://localhost:8008/payment/getkey");

      const {
        data: { order },
      } = await axios.post("http://localhost:8008/payment/checkout", {
        amount,
      });


      const options = {
        key, 
        amount:order.amount,
        currency:"INR",
        name:"Gaushala",
        description:"Now for testing",
        image:"",
        order_id:order.id,
        callback_url:"http://localhost:8008/payment/paymentverification",
        prefill:{
          name:"Himanshu",
          email:"himanshu@example.com",
          contact:"9090909090"
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
      <div className="sponsor-section1">
        <div className="sponsor-heading"> Donate </div>
      </div>
      <div className="donate-section2">
        <div className="donate-cont1">
          <div className="donate-form">
            <label htmlFor="Choose an amount"> Choose an amount </label>
            <div className="donate-choice-btns">
              <button
                className="donate-amount-btn"
                value={500}
                onClick={handleOnClick}
              >
                {" "}
                500{" "}
              </button>
              <button
                className="donate-amount-btn"
                value={1000}
                onClick={handleOnClick}
              >
                {" "}
                1000{" "}
              </button>
              <button
                className="donate-amount-btn"
                value={1500}
                onClick={handleOnClick}
              >
                {" "}
                1500{" "}
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
    </div>
  );
};

export default Donate;
