import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import SubscribeWindow from "./subscribeWindow";
import { LinkedinIcon, FacebookIcon, GithubIcon } from "./FooterIcons";
import footerLogo from "/assets/LogoFooter.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = ["Services", "Working Process", "Team", "Pricing", "Blog"];
  const footerIcons = [
    {
      id: "linkedinIcon1",
      footerIcon: LinkedinIcon,
      iconLink: "https://www.linkedin.com/in/philip-baravi-2b2a521a2/",
    },
    {
      id: "facebookIcon2",
      footerIcon: FacebookIcon,
      iconLink: "https://www.facebook.com/filip.baravi",
    },
    {
      id: "githubIcon3",
      footerIcon: GithubIcon,
      iconLink: "https://github.com/PhilipBaravi",
    },
  ];

  const handleScroll = (id) => {
    const elementId = id.toLowerCase().replace(/\s+/g, "-");

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

  const contactInfo = {
    email: "philip.baravi@gmail.com",
    phone: "+34(664)587-841",
    address: "Carrer de la Camèlia, 65, 08912 Badalona, Barcelona",
  };

  return (
    <div
      id="footer"
      className="w-full bg-darkGray flex flex-col justify-center items-center 2xl:w-[80%] 2xl:mx-auto 2xl:rounded-tl-[2.8125rem] 2xl:rounded-tr-[2.8125rem] mt-[3%]"
    >
      <div className="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-start w-full max-w-6xl pt-[3.12rem] px-[1.25rem] 2xl:px-[0] pb-[1.88rem]">
        <div className="2xl:flex-row 2xl:justify-start 2xl:items-start flex flex-col justify-center items-center">
          <div className="cursor-pointer 2xl:scale-[1.1]">
            <img src={footerLogo} alt="Footer Logo" />
          </div>

          <ul className="2xl:flex-row flex flex-col justify-center items-center gap-[0.94rem] 2xl:gap-[2.5rem] text-white font-spaceGrotesk text-[1rem] font-light font-[400] leading-[1.5rem] pt-[2.31rem] 2xl:pt-[0] 2xl:pl-[17.2rem] 2xl:scale-[1.2]">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer underline decoration-white"
                onClick={() =>
                  item === "Pricing" ? navigate("/pricing") : handleScroll(item)
                }
              >
                {item === "Pricing" ? (
                  <Link to="/pricing">{item}</Link>
                ) : (
                  <span>{item}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-[1.25rem] pt-[1.5rem] justify-center 2xl:pt-0 2xl:scale-[1.1]">
          {footerIcons.map((el) => (
            <a href={el.iconLink} key={el.id} target="_blank">
              {el.footerIcon}
            </a>
          ))}
        </div>
      </div>

      {/* Contact us section */}
      <div className="flex flex-col justify-center items-center 2xl:flex-row 2xl:justify-between 2xl:w-full 2xl:max-w-6xl">
        <div className="flex flex-col justify-center items-center 2xl:items-start text-center 2xl:text-left">
          <h2 className="inline-block bg-neonGreen text-black font-spaceGrotesk text-[1.25rem] font-medium font-[500] leading-normal">
            Contact Us
          </h2>
          <div className="flex flex-col justify-center items-center 2xl:items-start gap-[0.94rem] text-white font-spaceGrotesk text-[1rem] font-light font-[400] leading-normal pt-[2.31rem]">
            <p>Email: {contactInfo.email}</p>
            <p>Phone: {contactInfo.phone}</p>
            <p className="text-center 2xl:text-left">
              Address: {contactInfo.address}
            </p>
          </div>
        </div>

        {/* Subscribe window */}
        <div className="flex flex-col justify-center items-center pt-[2.15rem] 2xl:pt-0">
          <SubscribeWindow
            btnText="Subscribe to news"
            btnStyles="2xl:flex-row"
            bookWidth=""
            windowBg="bg-[#292A32]"
          />
        </div>
      </div>

      <div className="w-[80%] pt-[2.31rem] pb-[2.31rem]">
        <hr className="w-full h-[1.5px] bg-white" />
        <div className="flex flex-col 2xl:flex-row 2xl:items-start 2xl:justify-start justify-center items-center gap-[0.94rem] pt-[2rem]">
          <p className="text-white font-spaceGrotesk text-[1rem] font-medium font-[400] leading-[1.5rem]">
            © 2023 "Positivus" Made By Philip Baravi. All Rights Reserved.
          </p>
          <p className="text-white font-spaceGrotesk text-[1rem] font-medium font-[400] leading-[1.5rem] 2xl:pl-[2rem] cursor-pointer underline decoration-white">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
