import { useState } from "react"
import Logo from "../../Common/Logo"
import { Form } from "react-bootstrap";
import "./index.css"
import { Services } from "./ServicesData"
import { servicesData } from "./Services";
 const Price=()=>{
    const[data, setData] =useState(Services)
    const[Data, setdata]= useState(servicesData)
return(
    <>
<div>
    <Logo />
<div className="container">
    <h2 className="text-color text-center mt-3 fw-bold">Service Summary</h2>
    <div className="bg1 mt-5 mb-5">
        {/* Heading Content */}
<div className="text-center ">
    <h4 className="pt-5">Selected Area per sq. ft.: <span className="text fs-4 fw-normal">800 sq. ft.</span></h4>
    <h4 className="pt-4">Service Name: <span className="text fs-4 fw-normal">One-Time Essential Service</span></h4>
    <h4 className="pt-4">Number of Cleaner: <span className="text fs-4 fw-normal">1 Cleaner</span></h4>
    <h4 className="pt-4">Cleaning Time: <span className="text fs-4 fw-normal">1 - 1.5 hours</span></h4>
</div>
{/* Services  */}
<h5 className="heading-content fw-semibold mx-4 mt-5 pt-3">Services Include</h5>
<div className="row ">
    {/* Colunm 1 */}
<div className="col-lg-6 ">
<div className="ms-5 text-color">
<Form.Group className="mt-4 ">
            {Services.map((item) => (
              <Form.Check
                key={item.id}
                type="checkbox"
                id={item.id}
                label={item.label}
                className="fs-6 fw-normal p-1"
              />
            ))}
          </Form.Group>
</div>
</div>
{/* colunm 2 */}
<div className="col-lg-6 ">
<div className="text-color ms-5 ">
<Form.Group className="mt-4 ">
            {servicesData.map((item) => (
              <Form.Check
                key={item.id}
                type="checkbox"
                id={item.id}
                label={item.label}
                className="fs-6 fw-normal p-1"
              />
            ))}
          </Form.Group>
</div>
</div>
</div>
{/* Toral Cost */}
<div className="footer-content d-flex justify-content-between mx-4 mt-4 ">
<p className="fs-2 fw-bold mt-4">Total Cost:</p>
<p className="fs-2 fw-bold mt-4">$129.00</p>
</div>
</div>
</div>



</div>
    </>
)
}
export default Price