import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap/js/dist/tab";
const PackageTab = () => {
  return (
    <>
      {/* Navigation Tabs */}
      <div className="d-flex justify-content-center">
        <ul
          className="nav nav-pills nav-Content d-flex justify-content-center rounded-pill border border-bottom p-0 bg-white shadow-sm"
          id="pills-tab"
          role="tablist">
          <li className="nav-item">
            <button
              className="nav-link active "
              id="pills-oneTime-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-OneTime"
              type="button"
              role="tab"
            >
              One-Time
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link d-flex align-items-center"
              id="pills-MonthlyRecurring-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-MonthlyRecurring"
              type="button"
              role="tab"
            >
              Monthly-Recurring
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
                {/* Content for One-Time Service */}

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-OneTime"
          role="tabpanel"
        >
        </div>
  {/* Content for Monthly Recurring Service */}
        <div
          className="tab-pane fade"
          id="pills-MonthlyRecurring"
          role="tabpanel"
          aria-labelledby="pills-MonthlyRecurring-tab"
        >
        </div>
      </div>
    </>
  );
};
export default PackageTab;
