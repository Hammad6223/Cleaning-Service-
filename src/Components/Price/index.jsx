import { useState } from "react";
import Logo from "../../Common/Logo";
import { Form } from "react-bootstrap";
import { Services } from "./ServicesData";
import { servicesData } from "./Services";

const Price = () => {
  const [data, setData] = useState(Services);
  const [Data, setdata] = useState(servicesData);

  return (
    <div
      className="container-fluid d-flex flex-column align-items-center"
      style={{
        width: "100%",
        maxWidth: "1440px",
        overflow: "hidden",
      }}
    >
      <Logo />

      <h2
        className="haeding_content text-center p-2 fw-bold"
        style={{ color: "rgba(4, 40, 98, 1)", fontSize: "2rem" }}
      >
        Service Summary
      </h2>

      <div
        className="content-box mx-auto pt-3"
        style={{
          backgroundColor: "rgba(231, 240, 254, 1)",
          width: "100%",
          maxWidth: "1062px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "10px",
        }}
      >
        {/* Heading Content */}
        <div className="paragraph_content fw-semibold text-center mb-1">
          <p className="fs-5 mb-1 ">
            Selected Area per sq. ft.:{" "}
            <span
              className="fw-normal"
              style={{ color: "rgba(59, 131, 246, 1)" }}
            >
              800 sq. ft.
            </span>
          </p>
          <p className="fs-5 mb-1">
            Service Name:{" "}
            <span
              className="fw-normal"
              style={{ color: "rgba(59, 131, 246, 1)" }}
            >
              One-Time Essential Service
            </span>
          </p>
          <p className="fs-5 mb-1">
            Number of Cleaner:{" "}
            <span
              className="fw-normal"
              style={{ color: "rgba(59, 131, 246, 1)" }}
            >
              1 Cleaner
            </span>
          </p>
          <p className="fs-5 mb-1">
            Cleaning Time:{" "}
            <span
              className="fw-normal"
              style={{ color: "rgba(59, 131, 246, 1)" }}
            >
              1 - 1.5 hours
            </span>
          </p>
        </div>

        {/* Services Section */}
        <p
          className="fw-semibold pt-2 mt-1 mx-3"
          style={{
            borderTop: "1px solid rgba(60, 131, 246, 1)",
            fontSize: "1.2rem",
          }}
        >
          Services Include
        </p>

        <div className="row mb-3 mx-2">
          {/* Column 1 */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <Form.Group>
                {Services.map((item) => (
                  <Form.Check
                    key={item.id}
                    type="checkbox"
                    id={item.id}
                    label={item.label}
                    className="fs-6 fw-normal"
                    style={{ color: "rgba(4, 40, 98, 1)" }}
                    checked
                    readOnly
                  />
                ))}
              </Form.Group>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <Form.Group>
                {servicesData.map((item) => (
                  <Form.Check
                    key={item.id}
                    type="checkbox"
                    id={item.id}
                    label={item.label}
                    className="fs-6 fw-normal"
                    style={{ color: "rgba(4, 40, 98, 1)" }}
                    checked
                    readOnly
                  />
                ))}
              </Form.Group>
            </div>
          </div>
        </div>

        {/* Total Cost Section */}
        <div
          className="d-flex justify-content-between mx-3"
          style={{
            color: "rgba(4, 40, 98, 1)",
            borderTop: "1px dashed rgba(4, 40, 98, 1)",
          }}
        >
          <p className="fs-3 fw-bold">Total Cost:</p>
          <p className="fs-3 fw-bold">$129.00</p>
        </div>
      </div>
    </div>
  );
};

export default Price;
