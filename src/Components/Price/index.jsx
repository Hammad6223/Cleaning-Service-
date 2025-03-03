import { useState } from "react"
import Logo from "../../Common/Logo"
import { Form } from "react-bootstrap";
import { Services } from "./ServicesData";
import { servicesData } from "./Services";
 const Price=()=>{
    const[data, setData] =useState(Services)
    const[Data, setdata]= useState(servicesData)
return(
    <>
<div>
    <Logo />
<div className="container">
    <h2 className="text-center mt-3 fw-bold" style={{color: "rgba(4, 40, 98, 1)",}}>Service Summary</h2>
    <div className="mt-5 mb-5" style={{backgroundColor:"rgba(231, 240, 254, 1)",
}}>
        {/* Heading Content */}
<div className="text-center ">
    <h4 className="pt-5">Selected Area per sq. ft.: <span className=" fs-4 fw-normal" style={{ color: "rgba(59, 131, 246, 1)"}}>800 sq. ft.</span></h4>
    <h4 className="pt-4">Service Name: <span className="fs-4 fw-normal" style={{ color: "rgba(59, 131, 246, 1)"}}>One-Time Essential Service</span></h4>
    <h4 className="pt-4">Number of Cleaner: <span className="fs-4 fw-normal" style={{ color: "rgba(59, 131, 246, 1)"}}>1 Cleaner</span></h4>
    <h4 className="pt-4">Cleaning Time: <span className="fs-4 fw-normal" style={{ color: "rgba(59, 131, 246, 1)"}}>1 - 1.5 hours</span></h4>
</div>
{/* Services  */}
<h5 className="fw-semibold mx-4 mt-5 pt-3"style={{ borderTop: "1px solid  rgba(60, 131, 246, 1)"}}>Services Include</h5>
<div className="row ">
    {/* Colunm 1 */}
<div className="col-lg-6 ">
<div className="ms-5">
<Form.Group className="mt-4 ">
            {Services.map((item) => (
              <Form.Check
                key={item.id}
                type="checkbox"
                id={item.id}
                label={item.label}
                className="fs-6 fw-normal p-1"
                style={{color: "rgba(4, 40, 98, 1)",}}

              />
            ))}
          </Form.Group>
</div>
</div>
{/* colunm 2 */}
<div className="col-lg-6 ">
<div className="ms-5 ">
<Form.Group className="mt-4 ">
            {servicesData.map((item) => (
              <Form.Check
                key={item.id}
                type="checkbox"
                id={item.id}
                label={item.label}
                className="fs-6 fw-normal p-1"
                style={{color: "rgba(4, 40, 98, 1)"}}
              />
            ))}
          </Form.Group>
</div>
</div>
</div>
{/* Toral Cost */}
<div className="d-flex justify-content-between mx-4 mt-4 " style={{  color:"rgba(4, 40, 98, 1)",
    borderTop: "1px dashed  rgba(4, 40, 98, 1)",
}}>
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