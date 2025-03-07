import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { Form } from "react-bootstrap";
import Info from "../../assets/Images/Info-img.png";

const Price = () => {
  const location = useLocation();
  const [data, setData] = useState({
    sqft: "800",
    isMonthly: false,
    isDay: 2,
    service: null,
  });


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sqft = params.get("sqft") || "800";
    const isMonthly = params.get("isMonthly") === "true"; // Convert to boolean
    const isDay = Number(params.get("isDay")) || 1; // Convert to number

    const isService = params.get("isService");
    const serviceData = isService
      ? JSON.parse(decodeURIComponent(isService))
      : null;

    setData({ sqft, isMonthly, isDay, service: serviceData }); // Fix serviceData reference
  }, [location.search]);

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column align-items-center">
        <h2
          className="text-center fw-bold py-3"
          style={{ color: "rgba(4, 40, 98, 1)" }}
        >
          Service Summary
        </h2>
        <div
          className="content-box pt-3 rounded shadow w-100"
          style={{
            maxWidth: "1062px",
            backgroundColor: "rgba(231, 240, 254, 1)",
          }}
        >
          {/* Service Details */}
          <div className="text-center d-flex flex-column gap-3">
            {[
              {
                label: "Selected Area per sq. ft",
                value: `${data.sqft} sq. ft.`,
              },
              {
                label: "Service Name",
                value: data.service?.serviceName || "N/A",
              },
              {
                label: "Number of Cleaner",
                value: `${data.service?.requiredStaff || "N/A"} Cleaner`,
              },
              {
                label: "Cleaning Time",
                value: data.service?.cleaningTime || "N/A",
              },
            ].map((item, index) => (
              <p key={index} className="fs-5 fw-semibold mb-0">
                {item.label}:{" "}
                <span className="text-primary fw-normal">{item.value}</span>
              </p>
            ))}
          </div>
          {/* Services Section */}
          {data.service?.services && (
            <>
              <p className="fw-semibold border-top border-primary pt-2 mt-2 fs-5 mx-3">
                Services Include
              </p>
              <div className="row px-3 mb-2">
                {data.service.services.map((item) => (
                  <div key={item.id} className="col-md-6 col-sm-12">
                    <Form.Group className="mb-2">
                      <Form.Check
                        type="checkbox"
                        id={item.id}
                        label={item.label}
                        className="fs-6 fw-normal"
                        checked={true}
                        style={{ color: "rgba(4, 40, 98, 1)" }}
                        readOnly
                      />
                    </Form.Group>
                  </div>
                ))}
              </div>
            </>
          )}
          {/* Total Cost Section */}
          <div
            className="d-flex justify-content-between pt-3 mx-3"
            style={{ borderTop: "1px dashed rgba(4, 40, 98, 1)" }}
          >
            <p className="fs-3 fw-bold" style={{ color: "rgba(4, 40, 98, 1)" }}>
              Total Cost:
            </p>
            <p className="fs-3 fw-bold" style={{ color: "rgba(4, 40, 98, 1)" }}>
              ${data.service?.price?.[data.isDay] || data.service?.price}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="fw-normal text-start fs-6 mx-5 d-flex align-items-center">
            <img src={Info} alt="" className="me-2" />
            This is not the accurate price. Visit the area to get the exact
            price.
          </p>
        </div>
      </div>
    </>
  );
};

export default Price;
