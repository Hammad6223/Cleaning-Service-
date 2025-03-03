import { useState } from "react";
import { essentailData } from "./Essential/essentialData";
import Logo from "../../Common/Logo";
import { Form } from "react-bootstrap";
import "./index.css";
import { FoooterCards } from "./Essential/Essentailcards";
import { CoreCareFooter } from "./CoreCare/Corecarecards";
import { coreCareData } from "./CoreCare/coreCareData";
import Info from "../../Images/Info-img.png";
import { Link } from "react-router";
import { PiLessThanLight } from "react-icons/pi";


 const OneTimeServices = (essentialData) => {
  const [data, setData] = useState();
  const [coreData, setCoreData] = useState(coreCareData);
  return (
    <>
      <div>
        <Logo />
        <div className="container">
        <div className="mt-5 d-flex align-items-center">
    {/* Arrow Button (Left Side) */}
    <Link to="/" className="me-3">
        <div className="arrow d-flex flex-column gap-1">
        <span></span>
        <span></span>
        <span></span>
    </div>
  </Link>
  <h2 className="fw-bold text-center flex-grow-1 m-0" style={{color:"rgba(4, 40, 98, 1)",}}>One - Time Packages</h2>
  </div>

  <div className="row d-flex justify-content-between mt-5 gx-4">
    
    {/* First Column */}
    <div className="col-lg-6">
      <div className="column1-Content d-flex flex-column justify-content-between rounded-4 py-3 h-100">
        {/* Upper Section */}
        <div>
          <h4 className="text-center" style={{ color:"rgba(7, 60, 146, 1)",}}>One-Time Essential Service</h4>
          <h5 className="fs-4 fw-semibold mt-4 ps-5">Services Include</h5>
          <Form.Group className="mt-4 ps-5">
            {essentailData.map((item) => (
              <Form.Check
                key={item.id}
                type="checkbox"
                id={item.id}
                label={item.label}
                className="fs-6 fw-normal p-1"
              />
            ))}
          </Form.Group>
        </div>

        {/* Lower Section */}
        <div className="d-flex flex-column align-items-center gap-3">
          <FoooterCards />
          <Link to="/price">
          <button className="btn-content rounded fw-semibold fs-6 border-0 mt-2">
            Get A Quote
          </button>
          </Link>
        </div>
      </div>
    </div>

    {/* Second Column */}
    <div className="col-lg-6">
      <div className="colunm2-Content border rounded-4 d-flex flex-column justify-content-between rounded py-3 h-100">
        {/* Upper Section */}
        <div>
          <h4 className=" text-center" style={{ color:"rgba(7, 60, 146, 1)"}}>CoreCare Service</h4>
          <h5 className="fs-4 fw-semibold mt-4 ps-5">Services Include</h5>
          <Form.Group className="mt-4 ps-5">
            {coreCareData.map((item) => (
              <Form.Check
                key={item.id}
                type="checkbox"
                id={item.id}
                label={item.label}
                className="fs-6 fw-normal p-1"
              />
            ))}
          </Form.Group>
        </div>

        {/* Lower Section */}
        <div className="d-flex flex-column align-items-center gap-3">
          <CoreCareFooter />
         <Link to="/price">
          <button className="btn-content rounded fw-semibold fs-6 mt-2 border-0">
            Get A Quote
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Information Section */}
  <div className="mt-4">
    <p className="fw-normal fs-6">
      <span><img src={Info} alt="" className="me-2" /></span>
      Both services include a pre-service walkthrough to identify priority areas and specific cleaning needs.
      We require <br /> 24-hour advance booking to ensure proper staffing and equipment availability.
      Protected by our comprehensive <br /> insurance coverage.
    </p>
  </div>
</div>


   </div>
   
    </>
  );
};
export default OneTimeServices