import { Card, Row, Col } from "react-bootstrap";
import { GoPeople } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import "../index.css";

export const CoreCareFooter = () => {
  return (
    <Row className="justify-content-center g-3">
      {/* First Card */}
      <Col md={6} xs={12} className="d-flex justify-content-center">
        <Card className="p-2 shadow border-0" style={{ width: "223px", height: "100px" }}>
          <Card.Body className="d-flex flex-column">
            <div className="d-flex align-items-center gap-1">
              <MdAccessTime size={24} style={{ color: "rgba(4, 40, 98, 1)" }} />
              <h6 className="fw-normal mb-0" style={{ color: "rgba(4, 40, 98, 1)" }}>
                Cleaning Time
              </h6>
            </div>
            <p className="ps-4 fs-5 fw-medium mt-1" style={{ color: "rgba(59, 130, 246, 1)" }}>
              1-1.5 hours
            </p>
          </Card.Body>
        </Card>
      </Col>

      {/* Second Card */}
      <Col md={6} xs={12} className="d-flex justify-content-center">
        <Card className="p-2 shadow border-0" style={{ width: "223px", height: "100px" }}>
          <Card.Body className="d-flex flex-column">
            <div className="d-flex align-items-center gap-1">
              <GoPeople size={24} style={{ color: "rgba(4, 40, 98, 1)" }} />
              <h6 className="fw-normal mb-0" style={{ color: "rgba(4, 40, 98, 1)" }}>
                Number of People
              </h6>
            </div>
            <p className="ps-4 fs-5 fw-medium mt-1" style={{ color: "rgba(59, 130, 246, 1)" }}>
              2-3 persons
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
