import { useState } from "react";
import Logo from "../../Common/Logo";
import { Form } from "react-bootstrap";
import { Services } from "./ServicesData";
import { servicesData } from "./Services";
const Price = () => {
  const [data] = useState([...Services, ...servicesData]); 
  return (
    <div className="container-fluid d-flex flex-column align-items-center px-3">
     <div className="w-100">
      <Logo />
      </div>
      <h2 className="text-center fw-bold py-3" style={{color:"rgba(4, 40, 98, 1)"}}>Service Summary</h2>
      <div className="content-box pt-3 rounded shadow w-100" style={{ maxWidth: "1062px", backgroundColor:"rgba(231, 240, 254, 1)" }}>
        {/* Service Details */}
        <div className="text-center mb-3">
          {[
            { label: "Selected Area per sq. ft.", value: "800 sq. ft."  },
            { label: "Service Name", value: "One-Time Essential Service" },
            { label: "Number of Cleaner", value: "1 Cleaner" },
            { label: "Cleaning Time", value: "1 - 1.5 hours" },
          ].map((item, index) => (
            <p key={index} className="fs-5 mb-1 fw-semibold">
              {item.label}: <span className="text-primary fw-normal">{item.value}</span>
            </p>
          ))}
        </div>
        {/* Services Section */}
        <p className="fw-semibold border-top border-primary pt-2 mt-2 fs-5 px-3">Services Include</p>
        <div className="row px-3 mb-2">
          {data.map((item) => (
            <div key={item.id} className="col-md-6 col-sm-12 ">
              <Form.Group className="mb-2">
                <Form.Check
                  type="checkbox"
                  id={item.id}
                  label={item.label}
                  className="fs-6 fw-normal"
                  checked={true}
                  style={{color:"rgba(4, 40, 98, 1)"}}
                  readOnly
                 
                />
              </Form.Group>
            </div>
          ))}
        </div>
        {/* Total Cost Section */}
        <div className="d-flex justify-content-between pt-3 px-3" style={{borderTop:"1px dashed rgba(4, 40, 98, 1)"}}>
          <p className="fs-3 fw-bold" style={{color:"rgba(4, 40, 98, 1)"}}>Total Cost:</p>
          <p className="fs-3 fw-bold "style={{color:"rgba(4, 40, 98, 1)"}}>$129.00</p>
        </div>
      </div>
    </div>
  );
};
export default Price;

