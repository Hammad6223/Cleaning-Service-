import { Card } from "react-bootstrap";
import { GoPeople } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import "../index.css";

export const CoreCareFooter= () => {
    return (
<div className="d-flex gap-3 justify-content-center">
{/* First Card */}
            <Card className="p-1 main-Content shadow border-0 "style={{width:"223px" ,height:"100px"}}>
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-1">
                        <MdAccessTime size={24} className="text-color" />
                        <h6 className="text-color fw-normal mb-0">Cleaning Time</h6>
                    </div>
                    <p className="secondText-color ps-4 fs-5 fw-normal mt-1">1-1.5 hours</p>
                </Card.Body>
            </Card>

            {/* Second Card */}
            <Card className="p-1 shadow border-0"style={{width:"223px" ,height:"100px"}}>
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-1">
                        <GoPeople size={24} className="text-color"/>
                        <h6 className="text-color fw-normal mb-0">Number of People</h6>
                    </div>
                    <p className="secondText-color ps-4 fs-5 fw-medium mt-1">2-3 persons</p>
                </Card.Body>
            </Card>
        </div>
    );
};
