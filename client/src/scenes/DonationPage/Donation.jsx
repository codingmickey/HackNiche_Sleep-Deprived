import React, { useState, useCallback } from 'react';
import Navbar1 from '../navbar/Navbar1';
import { useNavigate } from 'react-router-dom';

import useRazorpay from 'react-razorpay';
export const Donation = () => {
  const [step, setStep] = useState(0);
  const [price, setPrice] = useState();
  const [res, setRes] = useState();

  const navigate = useNavigate();

  const Razorpay = useRazorpay();

  const handlePayment = useCallback(async () => {
    fetch('http://localhost:3001/donate', {
      method: 'POST',
      body: JSON.stringify({ amount: price })
    })
      .then((results) => results.json())
      .then((data) => {
        const res = data;
        setRes(res);
        // console.log(res);
        // setBlog([...res]);
        console.log(res);

        const options = {
          key: 'rzp_test_71ifT7shoxSTLN',
          amount: price,
          currency: 'INR',
          name: 'Sainik Suvidha',
          description: 'Donate your amount',
          image: 'https://example.com/your_logo',
          order_id: res.op.id,
          handler: (res) => {
            console.log(res);
            navigate('/success');
          },
          prefill: {
            name: 'Piyush Garg',
            email: 'youremail@example.com',
            contact: '9999999999'
          },
          notes: {
            address: 'Razorpay Corporate Office'
          },
          theme: {
            color: '#3399cc'
          }
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(res);
  }, [Razorpay]);

  return (
    <>
      <Navbar1 />
      {step == 0 && (
        <div className="mt-32 border-[0.02rem] border-gray-300 w-[65%] mx-auto shadow-xl">
          <div className="bg-grey flex justify-between w-full px-5 py-2">
            <div className="flex">
              <div className="w-7 h-7 text-lg text-center rounded-full bg-white text-orange -pl-2">1</div>
              <div className="font-medium text-xl ml-5 w-max text-orange">Support by Donation</div>
            </div>
            {price != 0 && (
              <div className="px-3 py-1 text-lg text-center rounded-full bg-white text-orange">₹{price} once</div>
            )}
          </div>
          <div className=" px-5 py-2">
            <div className="mt-5 text-[1.0rem]">
              To support the concern and sentiments of spirited citizens like you Indian Army is operating two accounts
              viz Army Central Welfare Fund and Army Battle Casualties Welfare Fund, which accepts donation /
              contribution, for serving and retired soldiers and their families
            </div>
            <div className="font-medium text-[1rem] mt-7">Select Amount</div>
            <div className="grid grid-cols-4 gap-20 mt-4">
              <div
                className={`cursor-pointer text-center border-gray-300 rounded-md border-[0.09rem] text-[1rem] py-[0.5rem] ${
                  price == '200' ? 'bg-blue-400 text-white hover:bg-blue-400' : 'hover:bg-slate-50'
                }`}
                onClick={() => setPrice(200)}
              >
                ₹ 200
              </div>
              <div
                className={`cursor-pointer text-center border-gray-300 rounded-md border-[0.09rem] text-[1rem] py-[0.5rem] ${
                  price == '1000' ? 'bg-blue-400 text-white hover:bg-blue-400' : 'hover:bg-slate-50'
                }`}
                onClick={() => setPrice(1000)}
              >
                ₹ 1000
              </div>
              <div
                className={`cursor-pointer text-center border-gray-300 rounded-md border-[0.09rem] text-[1rem] py-[0.5rem] ${
                  price == '2400' ? 'bg-blue-400 text-white hover:bg-blue-400' : 'hover:bg-slate-50'
                }`}
                onClick={() => setPrice(2400)}
              >
                ₹ 2400
              </div>
              <div
                className={`cursor-pointer text-center border-gray-300 rounded-md border-[0.09rem]  text-[1rem] py-[0.5rem] ${
                  price == '5000' ? 'bg-blue-400 text-white' : 'hover:bg-slate-50'
                }`}
                onClick={() => setPrice(5000)}
              >
                ₹ 5000
              </div>
            </div>
            <div className="mt-4 mb-4 flex justify-end">
              <div className="">
                <button
                  className="px-5 py-1 bg-blue-500 text-white hover:bg-blue-400 text-lg rounded-full"
                  onClick={() => setStep(1)}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {step == 1 && (
        <div className="mt-32 border-[0.02rem] border-gray-300 w-[65%] mx-auto shadow">
          <div className="bg-grey flex justify-between w-full px-5 py-2">
            <div className="flex">
              <div className="w-7 h-7 text-lg text-center rounded-full bg-white text-orange -pl-2">2</div>
              <div className="font-medium text-xl ml-5 w-max text-orange">Add Contact Details</div>
            </div>
            {price != 0 && (
              <div className="px-3 py-1 text-lg text-center rounded-full bg-white text-orange">₹{price} once</div>
            )}
          </div>
          <div className=" px-5 py-2">
            <div className="mt-5 text-[1.0rem]">Invoice will be sent to this phone number.</div>
            <div className="grid grid-cols-2 gap-10">
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-grey outline-none py-[0.7rem] px-4 mt-2 border-gray-300 border-[0.08rem]"
                placeholder="First Name"
              />
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-grey outline-none py-[0.7rem] px-4 mt-2 border-gray-300 border-[0.08rem]"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-grey outline-none py-[0.7rem] px-4 mt-2 border-gray-300 border-[0.08rem]"
                placeholder="Email"
              />
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-grey outline-none py-[0.7rem] px-4 mt-2 border-gray-300 border-[0.08rem]"
                placeholder="Phone Number"
              />
            </div>
            <div className="mt-4 mb-4 flex justify-end">
              <div className="">
                <button
                  className="px-5 py-1 bg-blue-500 text-white hover:bg-blue-400 text-lg rounded-full"
                  onClick={() => setStep(2)}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="mt-32 border-[0.02rem] border-gray-300 w-[65%] mx-auto shadow">
          <div className="bg-grey flex justify-between w-full px-5 py-2">
            <div className="flex">
              <div className="w-7 h-7 text-lg text-center rounded-full bg-white text-orange -pl-2">3</div>
              <div className="font-medium text-xl ml-5 w-max text-orange">Review & Pay</div>
            </div>
            {price != 0 && (
              <div className="px-3 py-1 text-lg text-center rounded-full bg-white text-orange">₹{price} once</div>
            )}
          </div>
          <div className=" px-5 py-2">
            <div className="mt-5 text-[1.0rem] text-center">
              {/* Invoice will be sent to this email address. */}
              Thankyou for support us with <span className="font-medium"> ₹ {price}</span>
            </div>
            <div className="mt-2 text-[1.0rem] text-center">
              This amount will be charged once from your payment method. Your invoice will be sent to
            </div>
            <div className="mt-2 text-[1.0rem] text-center">registered phone number</div>

            <div className="mt-4 mb-4 flex justify-center">
              <div className="">
                <button
                  className="px-5 py-1 bg-blue-500 text-white hover:bg-blue-400 text-lg rounded-full"
                  onClick={handlePayment}
                >
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
