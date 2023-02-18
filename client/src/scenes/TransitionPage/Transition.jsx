import React, { useState } from 'react';
import Navbar1 from '../navbar/Navbar1';
import img from '../TransitionPage/transition.svg';
export const Transition = () => {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(1);
  const changeNavbarColor = () => {
    if (window.scrollY >= 0) {
      setStep(1);
    } else {
      setStep(2);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <Navbar1 />
      <div
        style={{
          // height: '45vh',
          width: '100%',
          backgroundColor: '#F3963B',
          margin: '0',
          paddingLeft: '50px',
          paddingTop: '40px',
          paddingBottom: '40px',
          display: 'flex',
          justifyContent: 'space-around',
          alignContent: 'flex-start'
        }}
      >
        <div>
          <h1 style={{ color: 'white', fontSize: '5em', margin: '0' }}>
            <p style={{ margin: '0' }}>Transition</p>
          </h1>
          <h3
            style={{
              margin: '0',
              color: 'white',
              maxWidth: '600px',
              fontSize: '1.25em'
            }}
          >
            Prior to leaving the military, a service member should create a plan for their transition to civilian life.
            This includes thinking about career options, education, housing, and financial stability.
          </h3>
        </div>
        <div>
          <img src={img} height="300px" width="300px" alt="" style={{ marginLeft: '50px' }} />
        </div>
      </div>
      <div className="w-[90%] sm:w-[65%] mx-auto mt-14">
        {/* <div className="text-center text-4xl tracking-wider ">Transition</div> */}
        <nav className="sticky top-0 flex gap-32 text-xl items-center  bg-gray-100 w-full">
          {/* <a href="#step1"> */}
          <div
            className={`${
              step == 1 ? 'font-semibold underline underline-offset-[0.44rem] text-orange' : 'font-normal'
            } cursor-pointer `}
            onClick={() => setStep(1)}
          >
            Step 1
          </div>
          {/* </a>
          <a href="#step2"> */}
          <div
            className={`${
              step == 2 ? 'font-semibold underline underline-offset-[0.44rem] text-orange' : 'font-normal'
            } cursor-pointer `}
            onClick={() => setStep(2)}
          >
            Step 2
          </div>
          {/* </a>
          <a href="#step3"> */}
          <div
            className={`${
              step == 3 ? 'font-semibold underline underline-offset-[0.44rem] text-orange' : 'font-normal'
            } cursor-pointer `}
            onClick={() => setStep(3)}
          >
            Step 3
          </div>
          {/* </a>
          <a href="#step4"> */}
          <div
            className={`${
              step == 4 ? 'font-semibold underline underline-offset-[0.44rem] text-orange' : 'font-normal'
            } cursor-pointer `}
            onClick={() => setStep(4)}
          >
            Step 4
          </div>
          {/* </a> */}
        </nav>
        {step == 1 && (
          <div className="text-lg mt-10 leading-relaxed" id="step1">
            <div className="text- tracking-widest">Job search:</div>
            <div>
              <div className="">
                A significant aspect of transitioning from military to civilian life is finding a job. Veterans may have
                access to job placement services and resources through government agencies or veteran service
                organizations. It is important for the veteran to update their resume, network with potential employers
                and prepare for job interviews.
              </div>
            </div>
          </div>
        )}
        {step == 2 && (
          <div className="mt-10 text-lg leading-relaxed" id="step2">
            <div className="text- tracking-widest">Dealing with emotions:</div>
            <div className="">
              The transition from military to civilian life can be an emotional experience. Some veterans may experience
              anxiety, depression or post-traumatic stress disorder (PTSD) during this time. Seeking support from mental
              health professionals or peer support groups can be helpful.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas.
              Mauris eu pharetra sem. Aliquam faucibus venenatis velit, eget aliquam purus feugiat eget. Donec non massa
              vel lorem laoreet consequat egestas eu lectus. Vestibulum
            </div>
          </div>
        )}
        {step == 3 && (
          <div className="mt-10 text-lg leading-relaxed" id="step3">
            <div className="text- tracking-widest">Reconnecting with family and friends:</div>
            <div className="">
              Service members often spend long periods of time away from their families and friends. The transition to
              civilian life provides an opportunity to reconnect and strengthen these relationships.
            </div>
            <div className="">
              Military service can take a toll on personal relationships. During the transition to civilian life,
              veterans should take the opportunity to reconnect with family and friends, who can provide a source of
              emotional support and stability.
            </div>
          </div>
        )}
        {step == 4 && (
          <div className="mt-10 text-lg leading-relaxed" id="step4">
            <div className="text- tracking-widest">Adjusting to civilian culture:</div>
            <div className="">
              After spending years in a structured military environment, it can be challenging to adapt to the less
              regimented civilian world. Veterans may find it helpful to connect with other veterans or join a community
              organization to help them adjust.
            </div>
            <div className="text- tracking-widest mt-4">Navigating benefits and resources:</div>
            <div className="">
              Veterans may be eligible for a range of benefits, including education assistance, healthcare, and
              disability compensation. It is important to explore the resources and benefits available to them and to
              learn how to navigate the system.
            </div>
          </div>
        )}
      </div>
    </>
  );
};
