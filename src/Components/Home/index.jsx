import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const OnetimeInputScreen = () => {
  const [data, setData] = useState("500"); // Keep as string for controlled input
  const [isMonthly, setIsMonthly] = useState(false);
  const navigate = useNavigate();

  const handleDecrease = useCallback(() => {
    setData((prev) => {
      return newValue.toString();
    });
  }, []);

  const handleIncrease = useCallback(() => {
    setData((prev) => {
      const newValue = isMonthly ? Number(prev) + 100 : Math.min(5000, Number(prev) + 100);
      return newValue.toString();
    });
  }, [isMonthly]);

  const handleTabChange = (isMonthlySelected) => {
    setData("500");
    setIsMonthly(isMonthlySelected);
  };

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    value = value ? Number(value) : 500;
  
    // Restrict input within range immediately
    if (!isMonthly && value > 5000) {
      value = 5000;
    }
  
    setData(value);
  };

  // Ensure value is within range when user leaves the field
  const handleBlur = () => {
    setData((prev) => {
      const numValue = Number(prev);
      if (!isMonthly && numValue < 500) return "500";
      if (!isMonthly && numValue > 5000) return "5000";
      return prev;
    });
  };

  return (
    <div className="bg_image">
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

      <div className="text-center text-white">
        <p className="fw-medium space-text mb-0" style={{ fontSize: "40px" }}>
          Enter Your Space Size (Sq. Ft.)
        </p>
        <div className="d-flex align-items-center justify-content-center mt-3">
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
            <input
              type="text"
              value={data}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="text-center bg-transparent border-0 text-white"
              style={{ outline: "none", width: "100px" }}
            />
            sq ft
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
          >
            Show Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OnetimeInputScreen;
