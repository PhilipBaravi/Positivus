import React from "react";
import { Route } from "react-router-dom";
import ServicePage from "./ServicePage";
import { servicePageObj } from "../../data/serviceData";

const ServicePageRoutes = () => {
  return servicePageObj.map((service, index) => (
    <Route
      key={index}
      path={service.path}
      element={
        <ServicePage
          servicePageName={service.servicePageName}
          servicePageNameBg={service.servicePageNameBg}
          servicePageDescription={service.servicePageDescription}
          serviceInfoName={service.serviceInfoName}
          serviceInfoDescription={service.serviceInfoDescription}
          servicePageImg={service.servicePageImg}
          serviceFeatures={service.servicePageFeatures}
        />
      }
    />
  ));
};

export default ServicePageRoutes;
