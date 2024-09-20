import React, { useState } from "react";
import SectionHeading from "../services/SectionHeading";
import AboutButton from "../about/AboutButton";
const contactImage = `${import.meta.env.BASE_URL}assets/contactus.png`;
import AlertModal from "./AlertModal";

export default function ContactUs() {
  const [contactType, setContactType] = useState("sayHi");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // Moved showModal here

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const formData = { name, email, message, contactType };
      localStorage.setItem("contactFormData", JSON.stringify(formData));

      console.log("Form submitted:", formData);

      setName("");
      setEmail("");
      setMessage("");
      setErrors({});

      setShowModal(true); // Show the modal upon successful submission
    }
  };

  return (
    <div
      id="contact-us"
      className="w-full mt-[3%] flex flex-col justify-center items-center font-['Space_Grotesk'] text-sm text-black"
    >
      <div className="w-[80%]">
        <SectionHeading
          sectionName="Contact Us"
          sectionDescription="Connect with Us: Let's discuss Your Digital Marketing Needs"
        />
      </div>

      <div className="w-[80%] bg-lightGray flex flex-col 2xl:flex-row justify-between items-center rounded-[2.8125rem] mt-[3%]">
        <div className="w-full flex flex-col justify-between py-[2.5rem] px-[2rem] 2xl:w-1/2">
          <div className="flex justify-between w-[70%] md:w-[50%] xl:w-[35%]  2xl:ml-0 mx-auto">
            {["sayHi", "getQuote"].map((type) => (
              <label
                className="flex items-center space-x-2 cursor-pointer text-black font-spaceGrotesk text-[1rem] font-medium"
                key={type}
              >
                <div className="relative">
                  <input
                    type="radio"
                    value={type}
                    checked={contactType === type}
                    onChange={() => setContactType(type)}
                    className="sr-only"
                  />
                  <div className="w-4 h-4 border border-black rounded-full bg-white"></div>
                  {contactType === type && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#B9FF66] rounded-full"></div>
                    </div>
                  )}
                </div>
                <span className="capitalize">
                  {type === "sayHi" ? "Say Hi" : "Get a Quote"}
                </span>
              </label>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="pt-[2.12rem] flex flex-col gap-[1.25rem]"
          >
            {/* Name Field */}
            <div className="flex flex-col gap-[0.62rem]">
              <label
                htmlFor="name"
                className="text-black font-spaceGrotesk text-[0.875rem] font-medium"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-2 rounded-full border ${
                  errors.name ? "border-red-500" : "border-black"
                } focus:outline-none focus:ring-1 ${
                  errors.name ? "focus:ring-red-500" : "focus:ring-[#B9FF66]"
                } focus:border-black`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-[0.62rem]">
              <label
                htmlFor="email"
                className="text-black font-spaceGrotesk text-[0.875rem] font-medium"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 rounded-full border ${
                  errors.email ? "border-red-500" : "border-black"
                } focus:outline-none focus:ring-1 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-[#B9FF66]"
                } focus:border-black`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-[0.62rem]">
              <label
                htmlFor="message"
                className="text-black font-spaceGrotesk text-[0.875rem] font-medium"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full px-3 py-2 rounded-2xl border ${
                  errors.message ? "border-red-500" : "border-black"
                } focus:outline-none focus:ring-1 ${
                  errors.message ? "focus:ring-red-500" : "focus:ring-[#B9FF66]"
                } focus:border-black resize-none h-32`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-[2rem] w-full">
              <AboutButton btnText="Send Message" type="submit" />
            </div>
          </form>
        </div>

        <div className="hidden 2xl:block 2xl:w-1/2 2xl:h-full">
          <img src={contactImage} alt="Contact Us" className="float-right" />
        </div>
      </div>

      {/* Modal Alert */}
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Thank you!"
        message="Your message has been sent successfully. We will get back to you soon."
      />
    </div>
  );
}
