import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const OnetimeInputScreen = () => {
  const [data, setData] = useState(500);
  const [isMonthly, setIsMonthly] = useState(false); // Track package type
  const navigate = useNavigate();

  // Decrease space size but not below 500
  const handleDecrease = useCallback(() => {
    setData((prev) => (prev > 500 ? prev - 100 : prev));
  }, []);

  // Increase space size
  // Increase space size (limit 5000 if One-Time)
  const handleIncrease = useCallback(() => {
    setData((prev) => (isMonthly || prev < 5000 ? prev + 100 : prev));
  }, [isMonthly]);

  // Handle tab change for selecting package type
  const handleTabChange = (isMonthlySelected) => {
    setData(500);
    setIsMonthly(isMonthlySelected);
  };

  // Navigate with query parameters
  // const handleShowPackages = useCallback(() => {
  //   navigate(`/onetime-services?sqft=${data}&isMonthly=${isMonthly}`);
  // }, [navigate, data, isMonthly]);

  return (
    <div className="bg_image">
      {/* Navigation Tabs */}
      <div className="d-flex justify-content-center">
        <ul
          className="nav nav-Content d-flex justify-content-center border border-bottom p-0 m-0 bg-white"
          id="pills-tab"
          role="tablist"
          style={{
            boxShadow: "0px 3px 20px 0px rgba(0, 0, 0, 0.15) inset",
            borderRadius: "50px",
            width: "370px",
            height: "40px",
          }}
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${!isMonthly ? "active" : ""}`}
              id="pills-oneTime-tab"
              type="button"
              role="tab"
              aria-controls="pills-OneTime"
              aria-selected={!isMonthly}
              onClick={() => handleTabChange(false)}
            >
              One-Time
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${isMonthly ? "active" : ""}`}
              id="pills-MonthlyRecurring-tab"
              type="button"
              role="tab"
              aria-controls="pills-MonthlyRecurring"
              aria-selected={isMonthly}
              onClick={() => handleTabChange(true)}
            >
              Monthly-Recurring
            </button>
          </li>
        </ul>
      </div>

      {/* Space Size Selection */}
      <div className="text-center text-white">
        <p className="fw-medium space-text" style={{ fontSize: "40px" }}>
          Enter Your Space Size (Sq. Ft.)
        </p>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <button
            className="border-0 rounded text-center d-flex align-items-center justify-content-center"
            onClick={handleDecrease}
            style={{
              width: "40px",
              height: "40px",
              color: "rgba(59, 131, 246, 1)",
            }}
          >
            <h1>-</h1>
          </button>
          <h2
            className="text-white text-center fw-semibold mx-3 p-3"
            style={{ width: "232px", borderBottom: "1px solid white" }}
          >
            {data} sq ft
          </h2>
          <button
            className="border-0 rounded text-center d-flex align-items-center justify-content-center"
            onClick={handleIncrease}
            style={{
              width: "40px",
              height: "40px",
              color: "rgba(59, 131, 246, 1)",
            }}
          >
            <h2>+</h2>
          </button>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="text-center">
        <Link to={`/select-services?sqft=${data}&isMonthly=${isMonthly}`}>
          <button
            className="rounded border-0 fw-semibold p-2 animated-button"
            style={{
              width: "157px",
              fontSize: "16px",
              height: "39px",
              color: "rgba(59, 131, 246, 1)",
              backgroundColor: "rgba(223, 234, 255, 1)",
            }}
            // onClick={handleShowPackages}
          >
            Show Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OnetimeInputScreen;
