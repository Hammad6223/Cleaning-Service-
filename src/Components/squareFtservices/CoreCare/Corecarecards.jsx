import { Card } from "react-bootstrap";
import { GoPeople } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import "../index.css";

export const CoreCareFooter = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* First Card */}
        <div className="col-12 col-md-6 d-flex justify-content-center mb-3">
          <Card className="p-2 main-Content shadow border-0 w-100" style={{ maxWidth: "300px" }}>
            <Card.Body className="d-flex flex-column text-center">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <MdAccessTime size={24} style={{ color: "rgba(4, 40, 98, 1)" }} />
                <h6 className="fw-normal mb-0" style={{ color: "rgba(4, 40, 98, 1)" }}>
                  Cleaning Time
                </h6>
              </div>
              <p className="fs-5 fw-normal mt-1" style={{ color: "rgba(59, 130, 246, 1)" }}>
                1-1.5 hours
              </p>
            </Card.Body>
          </Card>
        </div>

        {/* Second Card */}
        <div className="col-12 col-md-6 d-flex justify-content-center mb-3">
          <Card className="p-2 shadow border-0 w-100" style={{ maxWidth: "300px" }}>
            <Card.Body className="d-flex flex-column text-center">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <GoPeople size={24} style={{ color: "rgba(4, 40, 98, 1)" }} />
                <h6 className="fw-normal mb-0" style={{ color: "rgba(4, 40, 98, 1)" }}>
                  Number of People
                </h6>
              </div>
              <p className="fs-5 fw-medium mt-1" style={{ color: "rgba(59, 130, 246, 1)" }}>
                2-3 persons
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
