import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import DataGrid from "../../Components/DataGrid";
import PaginationFrame from "../../Components/Pagination";

function Favourites(props) {
    const state = useSelector((state) => state.favourites);
    const length=Math.ceil(state.favouriteCountries.length/5)
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
                <Row>
                    <Col className="d-flex justify-content-center">
                        <PaginationFrame length={length}></PaginationFrame>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Favourites