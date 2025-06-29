import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Phoibe Hard Company Ltd";

    if (location.pathname === "/") {
      title = "Phoibe Hard Company Ltd";
    } else if (location.pathname === "/aboutus") {
      title = "AboutUs - Phoibe Hard Company Ltd";
    } else if (location.pathname === "/settings") {
      title = "Settings - Phoibe Hard Company Ltd";
    } else {
      title = "404 Page Not Found";
    }

    document.title = title;
  }, [location]);

  return null;
};

export default PageTitleUpdater;
