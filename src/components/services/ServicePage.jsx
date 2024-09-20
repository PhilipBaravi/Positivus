import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AboutButton from "../about/AboutButton";
import { Link } from "react-router-dom";

export default function ServicePage({
  servicePageName,
  servicePageNameBg,
  servicePageDescription,
  serviceInfoName,
  serviceInfoDescription,
  servicePageImg,
  serviceFeatures,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContactUs = () => {
    const elementId = "contact-us";

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-[20%] sm:mt-[18%] md:mt-[16%] lg:mt-[14%] xl:mt-[6%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            {servicePageName}{" "}
            <span className="text-black bg-neonGreen">{servicePageNameBg}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {servicePageDescription}
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-16 transform transition-all duration-300 hover:scale-105">
          <div className="md:flex">
            <div className="md:flex-1 p-8 md:p-12 justify-center items-center flex flex-col">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {serviceInfoName}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {serviceInfoDescription}
              </p>

              <Link to="/consultation" className="w-[80%]">
                <AboutButton btnText="Book a consultation" />
              </Link>
            </div>
            <div className="md:flex-1 bg-lightGray md:p-12 flex items-center justify-center">
              <div className="w-full h-full">
                <img
                  src={servicePageImg}
                  alt="SEO Illustration"
                  className="w-full h-full object-cover rounded-[2.251rem]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <feature.icon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to improve your search rankings?
          </h2>
          <AboutButton btnText="Get Started" btnFunction={goToContactUs} />
        </div>
      </div>
    </div>
  );
}
