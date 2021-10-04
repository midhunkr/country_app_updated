import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import DataGrid from "../../Components/DataGrid";

function Favourites(props) {
    const state=useSelector((state)=>state.favourites);
    return (
        <div>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center p-3">
                        <h3>Favourites</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DataGrid data={state.favouriteCountries} firstButtonName="Remove"></DataGrid>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Favourites