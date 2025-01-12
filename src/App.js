import * as Sentry from "@sentry/react";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { MainLoader } from "./component/Loader";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/Footer";
import { About } from "./Pages/About";
import { SupportS } from "./Pages/Support";
import { Mac } from "./Pages/Mac";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <main className="bg-black">
        {isLoading ? (
          <MainLoader />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Navigate to="/Home" />} />{" "}
           
              <Route path="/Home" element={<Home />} />
              <Route path="/Mac" element={<Mac />} />
              <Route path="/About" element={<About />} />
              <Route path="/Support" element={<SupportS />} />
              <Route path="*" element={<NotFound />} /> {/* مسیر 404 */}
            </Routes>
            <Footer />
          </>
        )}
      </main>
    </Router>
  );
};

export default Sentry.withProfiler(App);
