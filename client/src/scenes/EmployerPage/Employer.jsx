import React, { useEffect, useState } from 'react';
import Navbar1 from '../navbar/Navbar1';

export const Employer = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <Navbar1 />
      {step == 1 && (
        <>
          {' '}
          <div className="text-center text-4xl font-medium mt-24">Organization Details</div>
          <div className="mx-auto border-[0.09rem] border-gray-300 bg-white rounded-md py-5 px-10 w-[50%] text-lg mt-10">
            <div className="">Organization name</div>
            <input
              type="text"
              className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
              placeholder="Enter name here"
            />
            <div className="mt-5">Organization description</div>
            <textarea
              rows={4}
              className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full "
              placeholder="Enter description here"
            />
            <div className="mt-5">Organization logo (Recommended)</div>
            <input type="file" className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full" />

            <div className=""></div>
          </div>
          <div className="text-center text-4xl font-medium mt-24">Organization verification</div>
          <div className="mx-auto border-[0.09rem] border-gray-300 bg-white rounded-md py-5 px-10 w-[50%] text-lg mt-10">
            <div className="text-base">
              Using any one of the options below, get your organization verified and start posting internships/jobs
            </div>
            <div className="mt-5">
              <input
                type="radio"
                name="radio"
                id="1"
                className="rounded-full h-4 w-4 border border-gray-300  cursor-pointer mr-3"
              />
              <label htmlFor="1" className="">
                Organization's website
              </label>
            </div>
            <div className="ml-7 text-sm text-gray-500">
              Verify using your organization's active & functional website
            </div>
            <div className="ml-7 mt-4">
              <div className="text-sm">Enter website URL</div>
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
                placeholder="Enter url here"
              />
            </div>
            <div className="mt-10">
              <input
                type="radio"
                name="radio"
                id="2"
                className="rounded-full h-4 w-4 border border-gray-300  cursor-pointer mr-3"
              />
              <label htmlFor="2" className="">
                Active social media page
              </label>
            </div>
            <div className="ml-7 text-sm text-gray-500">
              Connect your most active social media profile of which you are an admin with minimum 900-1100
              likes/followers
            </div>
            <div className="ml-7 mt-4">
              <div className="text-sm">Enter Link URL</div>
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
                placeholder="Enter link here"
              />
            </div>
            <div className="mt-10">
              <input
                type="radio"
                name="radio"
                id="3"
                className="rounded-full h-4 w-4 border border-gray-300  cursor-pointer mr-3"
              />
              <label htmlFor="3" className="">
                Official company documents
              </label>
            </div>
            <div className="ml-7 text-sm text-gray-500">
              Verify using Corporate Identification Number (CIN) or any govt. issued business registration document
            </div>
            <div className="ml-7 mt-4">
              <div className="text-sm">Enter documents</div>
              <input type="file" className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full" />
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <a href="#post-job">
              <button
                className="px-5 py-1 bg-blue-500 hover:bg-blue-400 text-white text-lg rounded"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </a>
          </div>
        </>
      )}
      {step == 2 && (
        <>
          <div id="post-job">
            <div className="text-center text-4xl font-medium mt-24">Post internship/job</div>
            <div className="mx-auto border-[0.09rem] border-gray-300 bg-white rounded-md py-5 px-10 w-[50%] text-lg mt-10">
              <div className="">Opportunity type</div>
              <div className="flex items-center mt-3">
                <div className="flex item-start">
                  <input
                    type="radio"
                    name="type"
                    id="i1"
                    className="rounded-full h-4 w-4 border border-gray-300  cursor-pointer mr-3 mt-1"
                  />
                  <label htmlFor="i1" className="cursor-pointer">
                    Internship
                  </label>
                </div>
                <div className="flex item-start ml-10">
                  <input
                    type="radio"
                    name="type"
                    id="i2"
                    className="rounded-full h-4 w-4 border border-gray-300  cursor-pointer mr-3 mt-1"
                  />
                  <label htmlFor="i2" className="cursor-pointer">
                    Fresher job
                  </label>
                </div>
              </div>
            </div>
            <div className="mx-auto border-[0.09rem] border-gray-300 bg-white rounded-md py-5 px-10 w-[50%] text-lg mt-10">
              <div className="">Internship profile</div>
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
                placeholder="Enter profile here"
              />
              <div className="mt-5">Skills required (Optional)</div>
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
                placeholder="Enter skills here"
              />
              <div className="mt-5">Internship type</div>
              <div className="flex items-center mt-2">
                <div className="flex item-start">
                  <input
                    type="radio"
                    name="in-type"
                    id="it1"
                    className="rounded-full h-4 w-4 border border-gray-300  cursor-pointer mr-3 mt-1"
                  />
                  <label htmlFor="it1" className="cursor-pointer">
                    In office
                  </label>
                </div>
                <div className="flex item-start ml-10">
                  <input
                    type="radio"
                    name="in-type"
                    id="it2"
                    className="rounded-full h-4 w-4 border border-gray-300  cursor-pointer mr-3 mt-1"
                  />
                  <label htmlFor="it2" className="cursor-pointer">
                    Remote
                  </label>
                </div>
              </div>
              <div className="mt-5">City/Cities</div>
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
                placeholder="Enter city here"
              />
              <div className="mt-5">Number of openings</div>
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
                placeholder="Enter openings here"
              />
              <div className="mt-5">Job duration (in months)</div>
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
                placeholder="Enter duration here"
              />

              <div className=""></div>
            </div>

            <div className="mx-auto border-[0.09rem] border-gray-300 bg-white rounded-md py-5 px-10 w-[50%] text-lg mt-10">
              <div className="text-xl font-medium">Salary & Stipend</div>
              <div className="mt-5">Stipend</div>
              <input
                type="text"
                className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
                placeholder="Enter stipend here"
              />
            </div>
            <div className="mt-5 flex justify-center">
              <button
                className="px-5 py-1 bg-blue-500 hover:bg-blue-400 text-white text-lg rounded"
                onClick={() => {
                  setStep(3);
                  alert('Job request posted');
                }}
              >
                Post
              </button>
            </div>
          </div>
        </>
      )}
      <div className="mt-10 h-20"></div>
    </>
  );
};
