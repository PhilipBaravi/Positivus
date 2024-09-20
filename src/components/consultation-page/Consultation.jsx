import React, { useState } from "react";
import CalendarItem from "./CalendarItem";
import TimeSlotSelector from "./TimeDropdown";
import AboutButton from "../about/AboutButton";
import AlertModal from "../contactUs/AlertModal";

export default function Consultation() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "Full Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!consultationType)
      newErrors.consultationType = "Consultation Type is required";
    if (!selectedDate) newErrors.selectedDate = "Consultation Date is required";
    if (!selectedTimeSlot) newErrors.selectedTimeSlot = "Time Slot is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const consultationData = {
      fullName,
      email,
      consultationType,
      consultationDate: selectedDate ? selectedDate.toString() : null,
      consultationTime: selectedTimeSlot,
    };

    localStorage.setItem("consultationData", JSON.stringify(consultationData));

    console.log("Consultation data saved:", consultationData);

    setFullName("");
    setEmail("");
    setConsultationType("");
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setErrors({});

    setShowModal(true);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center mt-[20%] sm:mt-[18%] md:mt-[16%] lg:mt-[14%] xl:mt-[6%]">
      <div className="flex flex-col w-[80%] justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[80%] gap-[10px]">
          <h1 className="text-black font-spaceGrotesk text-[2.5rem] font-medium font-[500] leading-normal inline-block bg-neonGreen">
            Book a consultation
          </h1>
          <p className="text-black font-spaceGrotesk text-[1.7rem] font-light font-[400] leading-normal text-center">
            Fill out the form below to schedule your consultation with one of
            our experts.
          </p>
        </div>

        <div className="w-[80%] 2xl:w-[65%] mt-[3%]">
          <form onSubmit={handleBooking}>
            <div className="flex 2xl:flex-row 2xl:justify-center 2xl:gap-[10%] flex-col justify-center items-center">
              {/* Name Field */}
              <div className="mb-4 2xl:w-[45%] w-[100%]">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-black text-spaceGrotesk"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="border-darkGray mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  autoComplete="name"
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4 2xl:w-[45%] w-[100%]">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black text-spaceGrotesk"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-darkGray mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>

            {/* Consultation Type Field */}
            <div className="mb-4">
              <label
                htmlFor="consultationType"
                className="block text-sm font-medium text-black text-spaceGrotesk"
              >
                Consultation Type
              </label>
              <select
                id="consultationType"
                name="consultationType"
                className="border-darkGray mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black text-spaceGrotesk"
                value={consultationType}
                onChange={(e) => setConsultationType(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Select consultation type
                </option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="sales">Sales Consultation</option>
              </select>
              {errors.consultationType && (
                <p className="text-red-500">{errors.consultationType}</p>
              )}
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 mb-4">
              {/* Date Field */}
              <div>
                <label
                  htmlFor="consultationDate"
                  className="block text-sm font-medium text-black text-spaceGrotesk"
                >
                  Consultation Date
                </label>
                <div className="mt-1 p-2 block w-full">
                  <CalendarItem
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                </div>
                {errors.selectedDate && (
                  <p className="text-red-500">{errors.selectedDate}</p>
                )}
              </div>

              {/* Time Field */}
              <div>
                <label
                  htmlFor="timeSlot"
                  className="block text-sm font-medium text-black text-spaceGrotesk"
                >
                  Time Slot
                </label>
                <TimeSlotSelector
                  selectedTimeSlot={selectedTimeSlot}
                  setSelectedTimeSlot={setSelectedTimeSlot}
                />
                {errors.selectedTimeSlot && (
                  <p className="text-red-500">{errors.selectedTimeSlot}</p>
                )}
              </div>
            </div>

            <div>
              <AboutButton btnText="Book a consultation" type="submit" />
            </div>
          </form>
        </div>
      </div>

      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Consultation Booked"
        message="Your consultation has been successfully booked. We will contact you soon."
      />
    </div>
  );
}
