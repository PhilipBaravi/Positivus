import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // Scroll to the top when refreshed
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return null;
}

export default ScrollToTop;
