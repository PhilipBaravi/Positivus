import React, { useState } from "react";
import AlertModal from "../contactUs/AlertModal";

export default function SubscribeWindow({
  btnText,
  btnStyles,
  bookWidth,
  windowBg,
  btnFunction,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    console.log("Subscribed");
    setShowModal(true);
  };

  return (
    <div
      className={`p-[1.88rem] flex flex-col gap-[1.38rem] justify-center items-center ${windowBg} rounded-[0.8715rem] 2xl:h-[200px] ${bookWidth}`}
    >
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Subscription Successful"
        message="You have successfully subscribed!"
      />

      <form
        onSubmit={handleSubscription}
        className={`flex flex-col ${btnStyles} items-center gap-[1.38rem]`}
      >
        <input
          type="email"
          placeholder="Email"
          className="bg-[#292A32] w-[20.625rem] py-[1.31rem] px-[1.56rem] border border-white rounded-[0.875rem] text-white font-spaceGrotesk text-[1rem] font-light leading-[1.5rem]"
          required
        />
        <button
          onClick={btnFunction}
          type="submit"
          className="w-[330px] relative px-[2.19rem] py-[1.25rem] flex justify-center items-center font-spaceGrotesk cursor-pointer text-black bg-neonGreen text-l 2xl:text-[1.2rem] font-medium leading-9 rounded-[0.875rem] border border-[1px] border-darkGray overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:bg-lightGray before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black z-10"
        >
          <span className="relative z-10">{btnText}</span>
        </button>
      </form>
    </div>
  );
}
