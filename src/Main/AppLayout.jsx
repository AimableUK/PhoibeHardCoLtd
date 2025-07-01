import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageTitleUpdater from "../Main/PageTitleUpdater";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";

const AppLayout = () => {
  const location = useLocation();
  const home = location.pathname == "/";

  return (
    <div>
      <PageTitleUpdater />
      {!home && <Header />}
      <Outlet />
      {!home && <Footer />}
    </div>
  );
};

export default AppLayout;
