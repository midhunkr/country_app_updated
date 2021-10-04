import { useEffect, useState } from "react"
import { Alert, Col, Container, ListGroup, Row, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import CountryCard from "../../Components/CountryCard"
import DataGrid from "../../Components/DataGrid"
import PaginationFrame from "../../Components/Pagination"
import { fetchDataAsync,filterCountryList } from '../../State/Slices/fetchDataSlice'
function Home() {
    const state = useSelector((state) => state.fetchData)
    const dispatch=useDispatch()
    const history=useHistory()
    const filteredData=state.filteredCountryList;
    const activeContinent=state.activeContinent;
    let activeItem=state.continentData[0]
    const pageLength=Math.ceil(filteredData.length/5);
   
    useEffect(() => {
        if(filteredData.length==0||activeContinent==''){
            dispatch(fetchDataAsync())
        }
        filterCountries(activeItem)
    }, []);
    const filterCountries = (item) => {
        dispatch(filterCountryList({filter:item}))
    }
    if(!state.isLoggedIn){
        const reRoute=()=>{
            history.push('/register')
        }
        return(
            <Container className="me-3 mt-3" fluid>
                <Alert variant="danger">
                    You are not Logged In.Please <Alert.Link onClick={reRoute}>Login.</Alert.Link>
                    
                </Alert>
            </Container>
        )
    }
    if(filteredData.length==0||activeContinent==''){
        dispatch(fetchDataAsync())
    }
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ListGroup as="ul" className="w-75 m-3">
                        {state.continentData.map((item) => <ListGroup.Item as="li" key={item} active={activeContinent == item ? true : false}
                            onClick={() => { 
                                // activeItem=item;
                                 filterCountries(item); }}
                        >{item}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
                <Col md={9}  >
                    <Container>
                 
                        <DataGrid data={filteredData} firstButtonName="Favourite" ></DataGrid>
                        
                    </Container>

                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                <PaginationFrame length={pageLength}></PaginationFrame>
                </Col>
            </Row>
        </Container>
    )
}

export default Home