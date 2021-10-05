import { useEffect, useState } from "react"
import { Alert, Col, Container, ListGroup, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import CountryCard from "../../Components/CountryCard"
import DataGrid from "../../Components/DataGrid"
import PaginationFrame from "../../Components/Pagination"
import { sendNewData,fetchDataAsync, filterCountryList } from '../../State/Slices/fetchDataSlice'
var startingIndex = 0;
function Home() {
    const state = useSelector((state) => state.fetchData)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        // console.log('useEffect');
        // if (filteredData.length == 0 || activeContinent == '') {
        //     dispatch(fetchDataAsync())
        // }

        filterCountries(activeItem)

        changeItems(0)




    }, []);
    const filteredData = state.filteredCountryList;
    const activeContinent = state.activeContinent;
    let activeItem = state.continentData[0]
    const pageLength = Math.ceil(filteredData.length / 5);
    const [flength,setFlength]=useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const currentElements = [];
    let [updatedList, setUpdatedList] = useState([])
    useEffect(() => {
        // console.log('useEffect');
        // if (filteredData.length == 0 || activeContinent == '') {
        //     dispatch(fetchDataAsync())
        // }

        filterCountries(activeItem)






    }, []);

    const filterCountries = (item) => {
        dispatch(filterCountryList({ filter: item }))

        changeItems(0);


    }

    const changeItems = (index) => {
        dispatch(sendNewData({newIndex:index}))

        // let count = 0;

        // while (currentElements.length > 0) {

        //     currentElements.pop()

        // }
        // if (index === 0) {
        //     startingIndex = 0;
        // }
        // else {
        //     startingIndex = (index + 1) * 5 - 5;
        // }
        // console.log(`filtered data length ${filteredData.length}`);
        // while (startingIndex <= filteredData.length - 1 && count != 5) {

        //     console.log('entered in loop');
        //     currentElements.push(filteredData[startingIndex]);
        //     startingIndex += 1
        //     count += 1;
        // }
        // console.log('the updated list is');
        // console.log(currentElements);
        // setUpdatedList(currentElements);



    }
    if (!state.isLoggedIn) {
        const reRoute = () => {
            history.push('/register')
        }
        return (
            <Container className="me-3 mt-3" fluid>
                <Alert variant="danger">
                    You are not Logged In.Please <Alert.Link onClick={reRoute}>Login.</Alert.Link>

                </Alert>
            </Container>
        )
    }
    // if (filteredData.length == 0 || activeContinent == '') {
    //     dispatch(fetchDataAsync())
    // }
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <OverlayTrigger placement="right" overlay={<Tooltip>Double Click To Select</Tooltip>}>
                        <ListGroup as="ul" className="w-75 m-3">

                            {state.continentData.map((item) => <ListGroup.Item as="li" key={item} active={activeContinent == item ? true : false}
                                onClick={() => {
                                    // activeItem=item;
                                    filterCountries(item);
                                }}
                            >{item}</ListGroup.Item>)}


                        </ListGroup>
                    </OverlayTrigger>
                </Col>
                <Col md={9}  >
                    <Container>
                        <DataGrid data={state.updatedData} firstButtonName="Favourite" ></DataGrid>

                    </Container>

                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <PaginationFrame length={pageLength} change={changeItems}></PaginationFrame>
                </Col>
            </Row>
        </Container>
    )
}

export default Home