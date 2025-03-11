import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { oneTimeServices, monthlyServices } from "./Data"; // Ensure correct import path
import Navbar from "../Navbar";
import { Form, Card, Row, Col } from "react-bootstrap";
import { MdOutlineDone, MdAccessTime } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
import Info from "../../assets/Images/Info-img.png";
import Swal from "sweetalert2";
import "./index.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ServiceCard = ({ icon: Icon, title, value }) => (
  <Col md={6} xs={12} className="d-flex justify-content-center">
    <Card className="p-2 shadow border-0 service-card">
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center gap-1">
          <Icon size={20} className="text-primary-dark" />
          <p className="fw-normal fs-6 mb-0 text-primary-dark">{title}</p>
        </div>
        <p className="ps-4 fw-medium text-primary adjust-time">{value}</p>
      </div>
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
  const [selectedDay, setSelectedDay] = useState("");

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  useEffect(() => {
    const services = isMonthly
      ? getMonthlyServices(sqft)
      : getOneTimeServices(sqft);
    setFilteredServices(services);
  }, [sqft, isMonthly]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="position-relative">
          <Link to="/" className="position-absolute start-0 d-none d-md-block">
            <div className="arrow d-flex flex-column mt-3 pt-2 gap-1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>

        {/* Centered Heading */}
        <div className="text-center mt-4">
          <p className="fw-bold fs-2 fs-sm-5 text-primary-dark">
            {isMonthly
              ? "Monthly Cleaning Packages"
              : "One-Time Cleaning Packages"}
          </p>
        </div>

        <div className="row justify-content-center mt-5">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="service-container">
                  <h4 className="text-center text-primary-dark">
                    {service.serviceName}
                  </h4>
                  <h5 className="fs-4 fw-semibold ps-4">Services Include</h5>
                  <Form.Group className="ps-lg-5 ms-lg-2 ms-4 ps-2">
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

                  {isMonthly && (
                    <>
                      <p className="fs-6 mb-0 fw-semibold primary-blue text-center">
                        Select days per week:
                      </p>
                      <Form.Group className="d-flex justify-content-center">
                        {Object.keys(service.price).map((day, index) => (
                          <Form.Check
                            key={index}
                            type="radio"
                            id={`day-${day}`}
                            name="cleaningDays"
                            label={`${day} Days`}
                            value={day}
                            className="fs-6 fw-normal mx-2 custom-radio"
                            checked={selectedDay === day}
                            onChange={handleDayChange}
                          />
                        ))}
                      </Form.Group>
                    </>
                  )}
                  <div className="d-flex mt-2 flex-column align-items-center gap-3">
                    <Row className="justify-content-center g-3">
                      <ServiceCard
                        icon={MdAccessTime}
                        title="Cleaning Time"
                        value={service.cleaningTime}
                      />
                      <ServiceCard
                        icon={GoPeople}
                        title="Required Staff"
                        value={`${service.requiredStaff} Cleaners`}
                      />
                    </Row>

                    <button
                      className="get-quote-btn animated-button"
                      onClick={(e) => {
                        if (isMonthly && !selectedDay) {
                          e.preventDefault(); // Prevent navigation
                          Swal.fire({
                            icon: "warning",
                            title: "Day Required",
                            text: "Please select the number of cleaning days before proceeding.",
                            confirmButtonColor: "#3085d6",
                          });
                        } else {
                          window.location.href = `/price?sqft=${sqft}&isMonthly=${isMonthly}&isDay=${selectedDay}&isService=${encodeURIComponent(
                            JSON.stringify(service)
                          )}`;
                        }
                      }}
                    >
                      View Estimate
                    </button>
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
