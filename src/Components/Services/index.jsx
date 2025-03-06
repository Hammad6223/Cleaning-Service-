import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { oneTimeServices, monthlyServices } from "./Data"; // Ensure correct import path
import Logo from "../../Common/Logo";
import { Form, Card, Row, Col } from "react-bootstrap";
import { MdOutlineDone, MdAccessTime } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
import Info from "../../Images/Info-img.png";
import "./index.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ServiceCard = ({ icon: Icon, title, value }) => (
  <Col md={6} xs={12} className="d-flex justify-content-center">
    <Card className="p-2 shadow border-0 service-card">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex align-items-center gap-1">
          <Icon size={24} className="text-primary-dark" />
          <h6 className="fw-normal mb-0 text-primary-dark">{title}</h6>
        </div>
        <p className="ps-4 fs-5 fw-medium mt-1 text-primary">{value}</p>
      </Card.Body>
    </Card>
  </Col>
);

const CheckmarkBadge = () => (
  <div className="checkmark-badge">
    <MdOutlineDone />
  </div>
);

// Function to filter one-time services based on sqft
const getOneTimeServices = (sqft) => {
  return Object.values(oneTimeServices).filter(
    (service) => sqft >= service.sqftMin && sqft <= service.sqftMax
  );
};

// Function to filter monthly services based on sqft range
const getMonthlyServices = (sqft) => {
  return Object.values(monthlyServices).filter(
    (service) => sqft >= service.sqftMin && sqft <= service.sqftMax
  );
};

const OneTimeServices = () => {
  const query = useQuery();
  const sqft = parseInt(query.get("sqft"), 10);
  const isMonthly = query.get("isMonthly") === "true";

  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const services = isMonthly
      ? getMonthlyServices(sqft)
      : getOneTimeServices(sqft);
    setFilteredServices(services);
  }, [sqft, isMonthly]);

  return (
    <>
      <Logo />
      <div className="container">
        <div className="mt-5 d-flex align-items-center">
          <Link to="/" className="me-3">
            <div className="arrow d-flex flex-column gap-1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
          <h2 className="fw-bold text-center flex-grow-1 m-0 text-primary-dark">
            {isMonthly
              ? "Monthly Cleaning Packages"
              : "One-Time Cleaning Packages"}
          </h2>
        </div>

        <div className="row justify-content-center mt-5">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="service-container">
                  <h4 className="text-center text-primary-dark">
                    {service.serviceName}
                  </h4>
                  <h5 className="fs-4 fw-semibold mt-4 ps-5">
                    Services Include
                  </h5>
                  <Form.Group className="mt-4 ps-5">
                    {service.services.map((item) => (
                      <Form.Check
                        key={item.id}
                        type="checkbox"
                        id={item.id}
                        label={item.label}
                        className="fs-6 fw-normal p-1"
                        checked
                        readOnly
                      />
                    ))}
                  </Form.Group>

                  {isMonthly && <h1>Select days per week:</h1>}
                  <div className="d-flex flex-column align-items-center gap-3">
                    <Row className="justify-content-center g-3">
                      <ServiceCard
                        icon={MdAccessTime}
                        title="Cleaning Time"
                        value={service.cleaningTime}
                      />
                      <ServiceCard
                        icon={GoPeople}
                        title="Number of People"
                        value={`${service.requiredStaff} Cleaners`}
                      />
                    </Row>

                    <Link
                      to={`/price?sqft=${sqft}&isMonthly=${isMonthly}&isDay=${2}&isService=${encodeURIComponent(
                        JSON.stringify(service)
                      )}`}
                    >
                      <button className="get-quote-btn">Get A Quote</button>
                    </Link>
                  </div>
                  <CheckmarkBadge />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-5 text-danger">
              No services available for the selected square footage.
            </p>
          )}
        </div>

        {/* Information Section */}
        <div className="mt-4">
          <p className="fw-normal fs-6 mx-5">
            <img src={Info} alt="" className="me-2" />
            Both services include a pre-service walkthrough to identify priority
            areas and specific cleaning needs. We require 24-hour advance
            booking to ensure proper staffing and equipment availability.
            Protected by our comprehensive insurance coverage.
          </p>
        </div>
      </div>
    </>
  );
};

export default OneTimeServices;
