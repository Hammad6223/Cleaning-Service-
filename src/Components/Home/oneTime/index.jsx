import { useState } from "react";
import { Link } from "react-router";
import "./index.css"
const OnetimeInputsreen = () => {
  const [data, setData] = useState(500);
  return (
    <>
      <div>
        <div
          className=" text-center text-white "
          style={{ marginTop: "150px" }}
        >
          <p className="heading-text fw-medium space-text" style={{ fontSize: "40px" }}>
            Enter Your Space Size (Sq. Ft.)
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <button
            className="border-0 rounded text-center d-flex align-items-center justify-content-center "
            onClick={() => setData((prev) => (prev > 500 ? prev - 100 : prev))}
            style={{
              width: "40px",
              height: "40px",
              color: "rgba(59, 131, 246, 1)",
            }}
          >
            <h1>-</h1>
          </button>
          <h2
            className="text-white text-center fw-semibold mx-3 p-3 text"
            onChange={(e) => setData(Number(e.target.value))}
            style={{ width: "232px", borderBottom: "1px solid white" }}
          >
            {data} sq ft
          </h2>
          <button
            className="border-0 rounded text-center d-flex align-items-center justify-content-center"
            onClick={() => setData((prev) => prev + 100)}
            style={{
              width: "40px",
              height: "40px",
              color: "rgba(59, 131, 246, 1)",
            }}
          >
            <h2>+</h2>
          </button>
        </div>

        <div className=" text-center " style={{ marginTop: "180px" }}>
          <Link to="/onetime-services">
            <button
              className="shiny-cta mb-4 rounded border-0 fw-semibold p-2"
              style={{
                width: "157px",
                fontSize: "16px",
                height: "39px",
              }}
              onClick={() => navigate("/onetime-services")}
            >
              Show Packages
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default OnetimeInputsreen;
