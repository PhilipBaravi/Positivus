import React from "react";
import ServicesItem from "./ServicesItem";
import { Link } from "react-router-dom";
import { serviceItemObj } from "../../data/serviceItemData";

export default function ServiceItems() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[25px] xl:gap-[15px] lg:flex-row lg:flex-wrap lg:justify-between lg:mx-auto mt-12">
      {serviceItemObj.map((el, i) => {
        return (
          <div key={el.id}>
            {el.id ? (
              <Link to={el.path}>
                <ServicesItem
                  textTop={el.textTop}
                  textUnder={el.textUnder}
                  textBackground={el.textBackground}
                  background={el.background}
                  btn={el.btn}
                  serviceImg={el.serviceImg}
                  moreColor={el.moreColor}
                  decorationColor={el.decorationColor}
                />
              </Link>
            ) : (
              <ServicesItem
                textTop={el.textTop}
                textUnder={el.textUnder}
                textBackground={el.textBackground}
                background={el.background}
                btn={el.btn}
                serviceImg={el.serviceImg}
                moreColor={el.moreColor}
                decorationColor={el.decorationColor}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
