
 const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4 pt-1 mb-5">
          <p
            className="text-center fw-bold fs-2"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(59, 130, 246, 1), rgb(22, 45, 82))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            How It Works
          </p>
          <div className="col-lg-4 py-3 text-center">
            <h4 className=" fw-bold" style={{ color: "rgba(4, 40, 98, 1)" }}>
              {" "}
              Specify Your Area
            </h4>
            <p style={{ color: "rgba(113, 113, 113, 1)" }}>
              Tell us the size of the area that needs <br />
              <span>cleaning.</span>
            </p>
          </div>

          <div className="col-lg-4 py-3 text-center">
            <h4 className=" fw-bold" style={{ color: "rgba(4, 40, 98, 1)" }}>
              Pick a Service Plan
            </h4>
            <p style={{ color: "rgba(113, 113, 113, 1)" }}>
              Need a one-time clean or regular <br />
              <span>touch-ups? You decide.</span>
            </p>
          </div>

          <div className="col-lg-4 py-3 text-center">
            <h4 className=" fw-bold" style={{ color: "rgba(4, 40, 98, 1)" }}>
              Enjoy the Results
            </h4>
            <p style={{ color: "rgba(113, 113, 113, 1)" }}>
              We’ll make your space shine while <br />
              <span> you enjoy your time.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer
