import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import DataGrid from "../../Components/DataGrid";
import PaginationFrame from "../../Components/Pagination";
import { sendNewData} from '../../State/Slices/favouritesSlice'
function Favourites(props) {
    const state = useSelector((state) => state.favourites);
    const length=Math.ceil(state.favouriteCountries.length/5);
    const dispatch=useDispatch()
    useEffect(()=>{
        changeItems(0);
    },[]);
    const changeItems=(index)=>{
        dispatch(sendNewData({newIndex:index}));
    }
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
                        <DataGrid data={state.updatedData} firstButtonName="Remove"></DataGrid>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <PaginationFrame length={length} change={changeItems}></PaginationFrame>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Favourites