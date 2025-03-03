import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap/js/dist/tab";

const PackageTab = () => {
  return (
    <>
     
      {/* Navigation Tabs */}
      <div className="d-flex justify-content-center">
        <ul className="nav nav-Content d-flex justify-content-center border border-bottom p-0 m-0 bg-white" id="pills-tab" role="tablist" style={{ boxShadow: "0px 3px 20px 0px rgba(0, 0, 0, 0.15) inset",
    borderRadius: "50px",width:"332px", height:"40px"}}>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active "
              id="pills-oneTime-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-OneTime"
              type="button"
              role="tab"
              aria-controls="pills-OneTime"
              aria-selected="true"
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
              aria-controls="pills-MonthlyRecurring"
              aria-selected="false"
            >
              Monthly-Recurring
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-OneTime" role="tabpanel" aria-labelledby="pills-oneTime-tab">
          {/* Content for One-Time Service */}
        </div>

        <div className="tab-pane fade" id="pills-MonthlyRecurring" role="tabpanel" aria-labelledby="pills-MonthlyRecurring-tab">
          {/* Content for Monthly Recurring Service */}
        </div>
      </div>
    </>
  );
};

export default PackageTab;
