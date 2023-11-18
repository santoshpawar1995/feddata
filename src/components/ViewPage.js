import { Col, Container, Image, Row } from "react-bootstrap"
import pic from  "../assets/img/2M9A3614 copy.jpg"
import licence from  "../assets/img/License.jpg"
import w1 from "../assets/img/w1jpg.jpg"
import w2 from "../assets/img/w2.jpg"
import w3 from "../assets/img/w3.jpg"
import './ViewPage.css'
// import { Link } from "react-router-dom"
function ViewPage() {
  return (  
    <div className="container-fluid">
    
     <Container >
       <Row>

       <Col className="col-md-auto">
        <div className="pice">
           <img src={pic}  className="img-1"  alt=""/>
            <img src={licence}  className="img-1" alt=""/>
            <img src={w1}  className="img-1" alt=""/>
            <img src={w2}  className="img-1" alt="" />
            <img src={w3}  className="img-1" alt="" />
            </div>

       </Col>
       </Row>
     </Container>
    </div>
  )
}

export default ViewPage