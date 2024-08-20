import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function Animate({ Component, pageProps }) {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={location.pathname} />
    </AnimatePresence>
  );
}

export default Animate;
