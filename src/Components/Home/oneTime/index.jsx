import { Link } from "react-router";
const OnetimeInputsreen = () => {
  return (
    <>
      <div>
        <div
          className=" text-center text-white "
          style={{ marginTop: "160px" }}
        >
          <p className="fw-medium" style={{ fontSize: "26px" }}>
            Enter Your Space Size (Sq. Ft.)
          </p>
        </div>
        <div className=" d-flex align-items-center justify-content-center mt-4 ">
          <button
            className=" border-0 rounded text-center d-flex align-items-center justify-content-center "
            style={{
              width: "40px",
              height: "40px",
              color: "rgba(59, 131, 246, 1)",
            }}
          >
            <h1>-</h1>
          </button>
          <h3
            className=" text-white text-center fw-semibold mx-3 p-3"
            style={{ width: "232px", borderBottom: "1px solid white" }}
          >
            0 sq ft
          </h3>
          <button
            className=" border-0 rounded text-center d-flex align-items-center justify-content-center"
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
              className="mb-4 rounded border-0 fw-semibold p-2"
              style={{
                width: "173px",
                fontSize: "16px",
                height: "39px",
                color: "rgba(59, 131, 246, 1)",
                backgroundColor: "rgba(223, 234, 255, 1)",
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
